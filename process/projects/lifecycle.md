---
grand_parent: Processes
parent: Projects
title: Lifecycle
nav_order: 2
---

# LF Energy Foundation - Project Lifecycle

* TOC
{:toc}

# Overview

This lifecycle document is maintained by the LF Energy Foundation (“LFE”), and its purpose is to:

- Describe the requirements for contributing a project to LFE;
- Provide a clear process for the contribution of a project to LFE; and
- Set milestones and requirements for different stages of a project’s development once accepted into LFE.

LFE may adopt or amend this document by votes of its Technical Advisory Council (“TAC”) and Governing Board.

# Examples

- New projects that are designed to extend one or more LF Energy projects with functionality or interoperability libraries.
- Independent projects that fit within the LF Energy mission and provide the potential for a novel approach to existing functional areas (or are an attempt to meet an unfulfilled need).
- Projects commissioned or sanctioned by LF Energy.
- Any project that realistically intends to join LF Energy Incubating or Graduated Stages in the future and wishes to lay the foundations for that transition.

# Stages

This document provides for five lifecycle stages for contributed projects (“Projects”):

- Sandbox;
- Incubation;
- Early Adoption;
- Graduated; and
- Emeritus

![img](./assets/LF Energy Technical Project Lifecycle visual.png)


All projects must meet the Sandbox stage requirements. Some projects may be approved as Incubation and pass a review for the Early Adoption and/or Graduated stage at the same time to advance directly to those stages. 

## Sandbox

Projects submitted to LF Energy at the sandbox level are intended to be the entry point for early-stage projects. Characteristics for projects at the Sandbox Stage may be one or more of:

- Early-stage projects that the LF Energy TAC believes warrant experimentation.
- New projects that are designed to extend one or more TAC projects with functionality or interoperability libraries.
- Independent projects that fit the LF Energy mission/vision and provide the potential for a novel approach to existing functional areas (or are an attempt to meet an unfulfilled need).
- Projects commissioned or sanctioned by LF Energy, including initial code for LF Energy Working Group collaborations, and "experimental" projects.
- Any project that realistically intends to join LF Energy Incubation in the future and wishes to lay the foundations for that.

### Requirements

To be accepted at the Sandbox stage, a project must:

- Submit a completed [Project Contribution Proposal Template](https://wiki.lfenergy.org/display/HOME/New+Proposals+Process) to the TAC, or the TAC’s designated recipient for contribution proposals.
- Provide such additional information as the TAC may reasonably request.
- Be available to present to the TAC with respect to the project’s proposal and inclusion in LF Energy. Project teams should be prepared to present a detailed (20-30 minutes in length) overview on the project in addition to speaking to the information contained in the project contribution proposal.
- Be deemed by the TAC to add potential value or value to the mission of LF Energy.
- Obtain an affirmative vote of the TAC.

### Benefits

The Sandbox Stage benefits are outlined below.

- Neutral hosting of the project’s community and any key assets (e.g. trademark, domain, etc.).
- Access to the LF Energy collaboration infrastructure ( including GitHub, JIRA, Confluence, mailing lists, Slack ).
- A sponsor from the TAC to assist the project in reaching the Incubation Stage and facilitate collaboration with other project communities.
- Right to refer to the project as a Sandbox Project of LF Energy, and an opportunity to participate in events and other collaborative activities sponsored by LF Energy.
- Subject to applicable trademark usage guidelines, to display LF Energy’s logo on the project’s code repository.

### Expectations

Sandbox Stage projects should provide a quarterly report to the TAC outlining its progress on completing the requirements for the Incubation Stage.

It’s expected that projects in the Sandbox Stage move to the Incubation Stage within one year. In the case of a Sandbox Stage project that is not renewed with LF Energy, the trademark and any other assets will be returned to the project maintainers or an organization they designate.

## Incubation

Incubation projects are projects which the TAC believes are or have the potential to be, important to the ecosystem of Projects or the ecosystem as a whole. They may be early-stage projects just getting started or long-established projects with minimal resource needs. The Incubation stage provides a beneficial, neutral home for these projects to foster collaborative development and provide a path to deeper alignment with other LF Energy projects.

### Acceptance Criteria

To be considered for the Incubation Stage, the project must meet the following requirements:

- Have an open and documented technical governance, including:

- - A LICENSE file in every code repository, with the license chosen an [OSI-approved license](https://opensource.org/licenses).
  - A README file welcoming new community members to the project and explaining why the project is useful and how to get started ( follow the guidelines at the [README checklist](https://github.com/ddbeck/readme-checklist) to create an excellent README file ).
  - A CONTRIBUTING file explaining to other developers and your community of users how to contribute to the project. The file should explain what types of contributions are needed and how the process works.
  - A CODEOWNERS or COMMITTERS file to define individuals or teams that are responsible for code in a repository; document current project owners and current and emeritus committers. 
  - A CODE_OF_CONDUCT file that sets the ground rules for participants’ behavior associated and helps to facilitate a friendly, welcoming environment. By default, projects should leverage the [Linux Foundation Code of Conduct](https://lfprojects.org/policies/code-of-conduct/) unless an alternate Code of Conduct is approved prior.
  - A RELEASE file that provides documentation on the release methodology, cadence, criteria, etc.
  - A GOVERNANCE file that documents the project’s technical governance.
  - A SUPPORT file to let users and developers know about ways to get help with your project.

- Complete and approve the Technical Charter and agree to transfer any relevant trademarks to The Linux Foundation or its affiliate, LF Projects, LLC, and to assist in filing for any relevant unregistered ones.

- Have achieved and maintained an [OpenSSF Best Practices Badge](https://bestpractices.coreinfrastructure.org/) at the [‘Passing' level](https://bestpractices.coreinfrastructure.org/en/criteria/0).

- Have had a successful license scan with any critical issues remedied.

- Have a defined project mission and scope.

- The project's functional architecture is built out in the [LF Energy ArchiMate tool](http://architecture.lfenergy.org/).

- An overview of the project’s architecture and features is defined.

- The project roadmap is defined, which should address the following questions.

- - What use cases are possible now?
  - What does the next year look like in terms of additional features and use cases covered?

- Community and contributor growth assessment

- - The current number of contributors and committers, and the number of different organizations contributing to the project.
  - Demonstrate a sustained flow of commits / merged contributions.
  - A credible plan for developing a thriving user community, in particular expanding the number of committers and contributors?
  - An outline of the plan for the project to complete the requirements for the Early Adoption stage

- Receive the affirmative majority vote of the TAC.

### Benefits

Incubation stage projects receive a broad set of infrastructure and open-source advisement services to ensure the project can mature to the Early Adoption phase. In particular, Incubation projects are entitled to the following benefits in addition to those for Sandbox projects.

- Help to create the project’s artwork, website, and other required creative work.
- LF Energy blog post or similar announcing the hosting of the project in the Foundation.
- Right to refer to the project as an “LF Energy Foundation Project,” with the right, subject to applicable trademark usage guidelines, to display the LFE logo on the project’s code repository.
- An initial and regularly scheduled license scan of the project’s codebase with results reported to the project’s mailing list.
- Use of the LFX platform, including LFX Insights and LFX Security, for managing project health and security status.
- Marketing, communication, and PR support which is limited to major announcements. 
- Ability to post guest blogs on the LF Energy website with project news and updates. 
- Events support and promotion, limited to LF Energy hosted events.
- Access to Foundation staff who are eager to help and support the project.

## Early Adoption

The Early Adoption stage is for projects that are operating as an open-source community and are seeing a growing and diverse number of contributors and users of the project. 

Projects at the Early Adoption phase are focused on industry adoption and have completed the necessary steps for end-users to be able to consider these projects for future production deployments.

### Acceptance Criteria

To be considered for the Early Adoption stage, the project must meet the following requirements:

- Demonstrate growth in the project’s community, including

- - Growth in the number of commits to the project, number of project committers, and organizational diversity of contributions and committers.
  - Production or planned production use of the project by at least two independent end users which, in the TAC’s judgment, are of adequate quality and scope.

- Technical Governance of the project is operational, as measured by:

- - A Technical Steering Committee with at least 5 members and a chairperson elected by the members, holding regular open meetings.
  - Achievement of the OpenSSF Best Practice badge at the ['Silver' Level](https://bestpractices.coreinfrastructure.org/en/criteria/1)

- Development of a growth plan, to be done in conjunction with their project mentor(s) at the TAC. This plan should address the following points:

  - Since these metrics can vary significantly depending on the type, scope, and size of a project, the TAC has final judgment over the level of activity that is adequate to meet these criteria.

- - Release plans for the next 18 months.
  - Target end-users.
  - Identification of any regulatory or standards body requirements for deployment, and plans for implementation.
  - Plans for growth of project contributors and committers to support the growth plan.
  - Identification of any infrastructure resources needed to fulfill the growth plan.

- Presentation to the TAC of the project’s growth, technical governance, and growth plan.

- Receive the affirmative majority vote of the TAC and Governing Board

### Benefits

The benefits for Early Adoption stage projects focus on ecosystem enablement. In particular, Early Adoption projects are entitled to the following benefits in addition to those benefits at the Incubation Stage.

- An initial strategy meeting with the project leadership and the LFE staff to define the actions and activities to support the project’s growth plan.
- More marketing, communication, and PR support, including major and minor announcements. 
- Events support and promotion, both at LF Energy hosted events and potentially other events ( pending funding approval ).
- Support and funding for a CI/CD environment.
- The ability for the project to develop a conformance program and training program to support downstream adoption.

## Graduated Stage

The Graduated Stage is for projects that have reached their growth goals and are now on a sustaining cycle of development, maintenance, and long-term support. Graduated Stage projects are used commonly in enterprise production environments and have large, well-established project communities.

### Acceptance Criteria

To graduate from Incubation or Early Adoption status, or for a new project to join with Graduated status, a project must meet the Early Adoption stage criteria plus:

- Have a defined governing body of at least 5 or more members (owners and core maintainers), of which no more than 1/3 is affiliated with the same employer. In the case there are 5 governing members, 2 may be from the same employer.
- Have fulfilled or are on track to complete the growth plan defined in the Early Adoption stage proposal.
- Have a healthy number of contributions or committers from at least three organizations, with any single organization not composing more than 50% of the contributions or committers. Committers must be identified within the project in a COMMITTERS file.
- Have a public list of project adopters for at least the primary repo (e.g., [ADOPTERS.md](http://adopters.md/) or logos on the project website).
- Achievement of the OpenSSF Best Practices badge at the ['Gold' level](https://bestpractices.coreinfrastructure.org/en/criteria/2).
- Present to the TAC and the Governing Board on the fulfillment of these requirements.
- Receive a ⅔ majority vote from the TAC and a majority vote of the Governing Board to move to the Graduated stage. Projects can move directly from Incubation to Graduated status if they can demonstrate sufficient maturity and have met all requirements.

### Benefits

Graduated Stage projects are considered “TAC Projects” as defined in the LF Energy Charter, with all the rights and responsibilities as defined in the LF Energy Charter. In particular, Graduated Stage projects are entitled to the following benefits in addition to those benefits at the Incubation and Early Adoption stages.

- A voting representative from the project on the TAC.
- Quarterly strategic planning meetings with the project leadership and the LFE staff to define the actions and activities to support the project.
- Access to discretionary budget for supporting project-specific outreach and ecosystem development activities, subject to approval by the Governing Board.
- Advanced marketing/communication/PR support that includes project promotion via blog posts, social media, and LFE website; support with white papers and posters, and any type of marketing collateral designated to promote the project.

## Emeritus Stage

Emeritus projects are projects which the maintainers or the TAC feel have reached or are nearing end-of-life. Emeritus projects have contributed to the ecosystem, but are not necessarily recommended for modern development as there may be more actively maintained choices. LF Energy appreciates the contributions of these projects and their communities, and the role they have played in moving the ecosystem forward.

Projects in this stage are not in active development. Their maintainers may infrequently monitor their repositories, and may only push updates to address security issues, if at all. Emeritus projects should clearly state their status and what any user or contributor should expect in terms of response or support. If there is an alternative project the maintainers recommend, it should be listed as well. The foundation will continue to hold the IP and any trademarks and domains, but the project does not draw on foundation resources.

### Acceptance Criteria

Projects may be granted Emeritus status via a 2/3 vote from the TAC and with approval from project ownership. In cases where there is a lack of project ownership, only a 2/3 vote from the TAC is required.

### Benefits

Emeritus stage projects will have a long-term home for the project assets and code. Each Emeritus project will have a sponsor from the TAC to monitor any security or trademark concerns raised, and at the TAC’s discretion may address them. LFE will remove the promotion of Emeritus projects from its website and other promotional materials.

# Annual Review Process

The TAC will review each project on an annual basis. This review will gauge whether the project is still at the correct maturity stage based on the criteria for the current stage.

Projects will schedule their annual review as part of the next TAC meeting following the anniversary of the project’s acceptance. Projects should prepare a short presentation that covers the following points, which the TAC will use in its review of the project:

- The current activity of the project, including releases, adoption, and committer/contribution growth and diversity.
- The project's functional architecture that is built out in the [LF Energy ArchiMate tool](http://architecture.lfenergy.org/), which should be current.
- Assessment of whether the project is fulfilling the requirements for the project to remain at its current stage, or be considered for a different stage
- Feedback on its experience as an LF Energy project, including benefits from being an LF Energy project and areas that the TAC and LFE staff can better support the project.

Projects can use the template [here](https://wiki.lfenergy.org/download/attachments/14084913/Template for Annual Review at LF Energy Foundation TAC Meeting.pptx?version=1&modificationDate=1688671742511&api=v2) for this presentation.

Annual reviews require a majority affirmative vote of the TAC for the project to continue at the current stage or the appropriate number of votes to move to the next stage. If the TAC deems the project not to be currently meeting the requirements of the current stage, it may vote to move the project to the appropriate stage or Emeritus stage. The project may choose to move outside of the LFE at any time.

# Transition

The TAC is expected to review all projects during their next review cycle based on the criteria for each stage and the process as defined in this document.

Any projects on the TAC with a voting seat prior to this lifecycle taking effect will retain a voting seat unless they move to Emeritus status. 
