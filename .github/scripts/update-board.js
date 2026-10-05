module.exports = async ({ github, context }) => {
  const organizationName = context.repo.owner;
  const DATE_FIELD_NAME = "Scheduled Date";
  const PROJECT_NUMBER = 2;

  // Target Status Column Names
  const STATUS_UPCOMING = "Upcoming Meeting Agenda Items";
  const STATUS_NEXT = "Next Meeting Agenda Items";
  const STATUS_FUTURE = "Future Meeting Agenda Items";

  /**
   * Helper function to find the 2nd Tuesday of a given year and month (0-indexed month)
   */
  function getSecondTuesday(year, month) {
    const date = new Date(Date.UTC(year, month, 1));
    let tuesdayCount = 0;

    while (tuesdayCount < 2) {
      if (date.getUTCDay() === 2) { // 2 = Tuesday
        tuesdayCount++;
        if (tuesdayCount === 2) break;
      }
      date.setUTCDate(date.getUTCDate() + 1);
    }
    date.setUTCHours(23, 59, 59, 999);
    return date;
  }

  // Determine Today's date (UTC midnight start)
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  // 1. Find the 2nd Tuesday of the current month
  let nextMeeting = getSecondTuesday(today.getUTCFullYear(), today.getUTCMonth());

  // If the current month's 2nd Tuesday has already passed, the next meeting is next month's 2nd Tuesday
  if (today > nextMeeting) {
    nextMeeting = getSecondTuesday(today.getUTCFullYear(), today.getUTCMonth() + 1);
  }

  // 2. Find the 2nd Tuesday of the following month
  const followingMeeting = getSecondTuesday(
    nextMeeting.getUTCFullYear(),
    nextMeeting.getUTCMonth() + 1
  );

  console.log("Calculated TAC Meeting Schedule:");
  console.log("  -> Upcoming Meeting Date:", nextMeeting.toISOString().split("T")[0]);
  console.log("  -> Next Meeting Date:    ", followingMeeting.toISOString().split("T")[0]);

  // Inlined Query
  const query = `
    query getProjectData {
      organization(login: "${organizationName}") {
        projectV2(number: ${PROJECT_NUMBER}) {
          id
          fields(first: 20) {
            nodes {
              ... on ProjectV2Field {
                id
                name
              }
              ... on ProjectV2SingleSelectField {
                id
                name
                options {
                  id
                  name
                }
              }
            }
          }
          items(first: 100) {
            nodes {
              id
              content {
                ... on Issue {
                  title
                }
                ... on PullRequest {
                  title
                }
                ... on DraftIssue {
                  title
                }
              }
              fieldValues(first: 20) {
                nodes {
                  ... on ProjectV2ItemFieldValueCommon {
                    field {
                      ... on ProjectV2FieldCommon {
                        name
                      }
                    }
                  }
                  ... on ProjectV2ItemFieldDateValue {
                    date
                  }
                  ... on ProjectV2ItemFieldSingleSelectValue {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const result = await github.graphql(query);

  const project = result.organization?.projectV2 || result.user?.projectV2;
  if (!project) {
    throw new Error("Project #" + PROJECT_NUMBER + " not found under owner '" + organizationName + "'.");
  }

  // Locate Status field and target option IDs
  const statusField = project.fields.nodes.find((f) => f.name === "Status");
  const upcomingOption = statusField?.options?.find((o) => o.name === STATUS_UPCOMING);
  const nextOption = statusField?.options?.find((o) => o.name === STATUS_NEXT);
  const futureOption = statusField?.options?.find((o) => o.name === STATUS_FUTURE);

  if (!statusField || !upcomingOption || !nextOption || !futureOption) {
    throw new Error(
      "Could not locate Status field or target options ('" +
        STATUS_UPCOMING +
        "', '" +
        STATUS_NEXT +
        "', '" +
        STATUS_FUTURE +
        "')"
    );
  }

  for (const item of project.items.nodes) {
    let scheduledDate = null;
    let currentStatus = null;
    const itemTitle = item.content?.title || "Untitled Item";

    for (const val of item.fieldValues.nodes) {
      if (val.field?.name === DATE_FIELD_NAME) {
        scheduledDate = val.date ? new Date(val.date) : null;
      }
      if (val.field?.name === "Status") {
        currentStatus = val.name;
      }
    }

    if (!scheduledDate) continue;

    // Target resolution based on TAC meeting schedule
    let targetOption = null;
    let targetStatusName = null;

    if (scheduledDate >= today && scheduledDate <= nextMeeting) {
      targetOption = upcomingOption;
      targetStatusName = STATUS_UPCOMING;
    } else if (scheduledDate > nextMeeting && scheduledDate <= followingMeeting) {
      targetOption = nextOption;
      targetStatusName = STATUS_NEXT;
    } else if (scheduledDate > followingMeeting) {
      targetOption = futureOption;
      targetStatusName = STATUS_FUTURE;
    }

    // Apply status change if item needs to move
    if (targetOption && currentStatus !== targetStatusName) {
      const formattedDate = scheduledDate.toISOString().split("T")[0];

      console.log('Moving "' + itemTitle + '" (' + item.id + ") -> '" + targetStatusName + "' (Scheduled: " + formattedDate + ")");

      // Inlined Mutation
      const updateStatusMutation = `
        mutation updateStatus {
          updateProjectV2ItemFieldValue(
            input: {
              projectId: "${project.id}"
              itemId: "${item.id}"
              fieldId: "${statusField.id}"
              value: { singleSelectOptionId: "${targetOption.id}" }
            }
          ) {
            projectV2Item {
              id
            }
          }
        }
      `;

      await github.graphql(updateStatusMutation);
    }
  }
};
