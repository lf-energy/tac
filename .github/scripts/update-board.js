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

  // 1. Calculate the 2nd Tuesday of the current month
  let upcomingMeeting = getSecondTuesday(today.getUTCFullYear(), today.getUTCMonth());

  // If today is STRICTLY AFTER the 2nd Tuesday (i.e., Wednesday or later), 
  // shift the upcoming meeting to next month's 2nd Tuesday.
  if (today > upcomingMeeting) {
    upcomingMeeting = getSecondTuesday(today.getUTCFullYear(), today.getUTCMonth() + 1);
  }

  // 2. Find the 2nd Tuesday of the following month relative to upcomingMeeting
  const nextMeeting = getSecondTuesday(
    upcomingMeeting.getUTCFullYear(),
    upcomingMeeting.getUTCMonth() + 1
  );

  console.log("Calculated Monthly TAC Meeting Schedule:");
  console.log("  -> Current Run Date:        ", today.toISOString().split("T")[0]);
  console.log("  -> Upcoming Meeting Date:   ", upcomingMeeting.toISOString().split("T")[0]);
  console.log("  -> Next Meeting Date:       ", nextMeeting.toISOString().split("T")[0]);

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

    if (scheduledDate >= today && scheduledDate <= upcomingMeeting) {
      targetOption = upcomingOption;
      targetStatusName = STATUS_UPCOMING;
    } else if (scheduledDate > upcomingMeeting && scheduledDate <= nextMeeting) {
      targetOption = nextOption;
      targetStatusName = STATUS_NEXT;
    } else if (scheduledDate > nextMeeting) {
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
