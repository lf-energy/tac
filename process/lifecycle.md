---
parent: Processes
title: Project Lifecycle
nav_order: 20
has_children: true
---

# {{ site.foundation_name }} - Project Lifecycle

* TOC
{:toc}

This lifecycle document is maintained by the {{ site.foundation_name }}, and its purpose is to:

- Describe the requirements for contributing a project to {{ site.foundation_name }};
- Provide a clear process for the contribution of a project to {{ site.foundation_name }}; and
- Set milestones and requirements for different stages of a project’s development once accepted into {{ site.foundation_name }}.

{{ site.foundation_name }} may adopt or amend this document by votes of its Technical Advisory Council (“TAC”) and Governing Board.

# Examples

- New projects that are designed to extend one or more {{ site.foundation_name }} projects with functionality or interoperability libraries.
- Independent projects that fit within the {{ site.foundation_name }} mission and provide the potential for a novel approach to existing functional areas (or are an attempt to meet an unfulfilled need).
- Projects commissioned or sanctioned by {{ site.foundation_name }}.
- Any project that realistically intends to join {{ site.foundation_name }} Incubating or Graduated Stages in the future and wishes to lay the foundations for that transition.

# Stages

This document provides for five lifecycle stages for contributed projects (“Projects”):

- [Sandbox](#sandbox);
- [Incubation](#incubation);
- [Early Adoption](#early-adoption);
- [Graduated](#graduated); and
- [Emeritus](#emeritus)

![Lifecycle Image](./assets/-V6A8WeK55PFD-YJsuxSZPLhNWUHol-vWuSgRS3nkhs7x7DeRD1eHcM8KddVngWsnFeqvTK2ecJwfBKcwd2GEC2kNF6diOncNeLry8RSFWvW_gpLK71dG53IRzoDVoUEt4iNKqwgON7FAI-5YFTolg.png)

All projects must meet the Sandbox stage requirements. It is possible that some projects may be approved at the Incubation stage and pass a review for the Early Adoption and/or Graduated stage at the same time to advance directly to those stages. 

## Sandbox

Projects submitted to {{ site.foundation_name }} at the Sandbox stage are intended to be the entry point for early-stage projects. Characteristics for projects at the Sandbox stage may be one or more of:
:
- Early-stage projects that the {{ site.foundation_name }} TAC believes warrant experimentation.
- New projects that are designed to extend one or more TAC projects with functionality or interoperability libraries.
- Independent projects that fit the {{ site.foundation_name }} mission/vision, and provide the potential for a novel approach to existing functional areas (or are an attempt to meet an unfulfilled need).
- Projects commissioned or sanctioned by {{ site.foundation_name }}.
- Any project that realistically intends to become an {{ site.foundation_name }} Project and wishes to lay the foundations for that.

### Requirements

To be accepted at the Sandbox stage, a project must:

- Submit a completed Project Contribution Proposal to the TAC via the process outlined at [Project Contribution](/process/start_project) Process.
- Complete and approve the Technical Charter and agree to transfer any relevant trademarks to The Linux Foundation or its affiliate, LF Projects, LLC, and to assist in filing for any relevant unregistered ones.
- Have a successful license scan with any critical issues remedied.
- Provide administrator access to all project tools, such as its GitHub organization, collaboration and communication tools, and build/test infrastructure.

*NOTE: The LF Energy TAC expects projects to complete the requirements above within six months of the Project Contribution Proposal submission. If a project is unable to complete the requirements in that timeframe, the TAC may request that the project reapply when they can focus on completing the requirements.*

### Approval Process

In conjunction with the LF staff and TAC voting representative, the project will be scheduled to be presented at an upcoming TAC meeting. This presentation should provide an overview of the project and its alignment with {{ site.foundation_name }}, and speak to the information shared in the project contribution proposal. Voting will be done per the [TAC voting policy]({% link process/voting.md %}).

### Benefits

The Sandbox Stage benefits are outlined below.

- Right to refer to the project as an {{ site.foundation_name }} Sandbox Project, and use the {{ site.foundation_name }} Sandbox Project logo in the project’s code repository ( subject to the {{ site.foundation_name }} Branding Guidelines ).
- Help to create the project’s artwork, website, and other required creative work.
- {{ site.foundation_name }} blog post or similar announcing the hosting of the project in the Foundation.
- Neutral hosting of the project’s community and key assets (e.g., trademark, domain, etc.).
- Access to the {{ site.foundation_name }} collaboration infrastructure ( including GitHub, JIRA, Confluence, mailing lists, 1Password, and Slack ).
- Participation in one or more SIGs, which will provide collaboration and networking opportunities with similar projects.
- Ability to participate in events and other collaborative activities sponsored by {{ site.foundation_name }}.
- Regularly scheduled license scans of the project’s codebase with results reported to the project’s mailing list.
- Use of the LFX platform, including LFX Insights and LFX Security, for managing project health and security status.

Sandbox Stage projects will provide a quarterly report and present an annual review to the primary SIG it is aligned with, outlining its progress on completing the requirements for the Incubation Stage. 

It’s expected that projects in the Sandbox Stage move to the Incubation Stage within one year. In the case of a Sandbox Stage project that is not renewed with {{ site.foundation_name }}, the trademark and any other assets will be returned to the project maintainers or an organization they designate.

## Incubation

Incubation projects are projects that the TAC believes are, or have the potential to be, important to the ecosystem of Projects or the ecosystem as a whole. They may be early-stage projects just getting started, or long-established projects with minimal resource needs. The Incubation stage provides a beneficial, neutral home for these projects, fostering collaborative development and paving the way for deeper alignment with other {{ site.foundation_name }} projects.

### Acceptance Criteria

To be considered for the Incubation Stage, the project must meet the following requirements:

- Have achieved and maintained an [OpenSSF Best Practices Badge](https://bestpractices.coreinfrastructure.org/) at the [‘Passing' level](https://bestpractices.coreinfrastructure.org/en/criteria/0).
- Have an open and documented technical governance, including:
  - A README file in each code repository, welcoming new community members to the project and explaining why the project is useful and how to get started (follow the guidelines at the [README checklist](https://github.com/ddbeck/readme-checklist) to create an excellent README file).
  - A GOVERNANCE file that documents the project’s technical governance ([template](https://github.com/lf-energy/tsc-template/blob/main/GOVERNANCE.md)).
  - All current Technical Steering Committee members specified in the ‘Technical Steering Committee (TSC)’ committee in LFX Project Control Center (details on how this should be set up are [here]({% link tools/collaboration.md %})).
  - A CODEOWNERS or COMMITTERS file to define individuals or teams that are responsible for code in a repository, as well as documenting current project owners and current and emeritus committers ( [template](https://github.com/lf-energy/tsc-template/blob/main/COMMITTERS.csv) )
- Documentation of the architecture (aka high-level design) of the software produced by the project ([aligns with this OpenSSF Best Practices Silver badge requirement](https://www.bestpractices.dev/en/criteria?details=true&rationale=true#1.documentation_architecture)).
- A documented roadmap that describes what the project intends to do and not do for at least the next year ([aligns with this OpenSSF Best Practices Silver badge requirement](https://www.bestpractices.dev/en/criteria?details=true&rationale=true#1.documentation_roadmap)).
- Community and contributor growth assessment using the data from LFX Insights. Specific metrics that will be reviewed are.
  - Current number of contributors, committers, and different organizations contributing to the project.
  - Flow of commits / merged contributions
- A credible plan for developing a thriving user community, particularly expanding the number of committers and contributors to the project.
- An outline of the plan for the project to complete the requirements for the Early Adoption stage.

### Approval Process

Sandbox Stage projects that wish to move to the Incubation Stage as part of their [annual review]({% link process/review_cycle.md %}) or upon request of the project. To be considered for the Incubation Stage, the project must present a review of its progress, including an assessment of whether the Incubation Stage requirements have been completed, as part of its annual review or a separate TAC presentation. 

The project must receive the affirmative majority vote of the TAC to become an Incubation Stage project.

### Benefits

Incubation Stage projects receive a broad set of infrastructure and open-source advisement services to ensure the project can mature to the Early Adoption phase. In particular, Incubation projects are entitled to the following benefits in addition to those for Sandbox projects.

- Right to refer to the project as an “{{ site.foundation_name }} Project,” with the right, subject to applicable trademark usage guidelines, to display the “{{ site.foundation_name }} Project” logo and mark on the project’s code repository.
- Marketing, communication, and PR support, which is limited to major announcements. 
- Ability to post guest blogs on the {{ site.foundation_name }} website with project news and updates. 
- Events support and promotion, limited to {{ site.foundation_name }} hosted events.
- Access to Foundation staff who are eager to help and support the project.

## Early Adoption

The Early Adoption stage is for projects that operate as an open-source community and are experiencing a growing and diverse number of contributors and users. 

Projects at the Early Adoption phase are focused on industry adoption and have completed the necessary steps for end-users to consider these projects for future production deployments.

### Acceptance Criteria

To be considered for the Early Adoption stage, the project must meet the following requirements:

- Demonstrate growth in the project’s community, including
  - Growth in the number of commits to the project, the number of project committers, and the organizational diversity of contributions and committers.
  - Production or planned production use of the project by at least two independent end users, which, in the TAC’s judgment, are of adequate quality and scope.
- Technical Governance of the project is operational, as measured by:
  - A Technical Steering Committee with at least five members and a chairperson elected by the members, holding regular open meetings ([aligns with OpenSSF Best Practices Gold badge requirement](https://www.bestpractices.dev/en/criteria?details=true&rationale=true#2.bus_factor))
  - Achievement of the OpenSSF Best Practice badge at the ['Silver' Level](https://bestpractices.coreinfrastructure.org/en/criteria/1)
- Development of a growth plan, to be done in conjunction with their project mentor(s) at the TAC. This plan should address the following points: 
  - Release plans for the next 18 months.
  - Target end-users.
  - Identification of any regulatory or standards body requirements for deployment and implementation plans.
  - Plans for the growth of project contributors and committers to support the growth plan.
  - Identification of any infrastructure resources needed to fulfill the growth plan.

Since these metrics can vary significantly depending on the type, scope, and size of a project, the TAC has final judgment over the level of activity that is adequate to meet these criteria.

### Approval Process

Incubation Stage projects that wish to move to the Early Adoption Stage as part of their [annual review]({% link process/review_cycle.md %}) or upon request of the project. To be considered for the Early Adoption Stage, the project must present a review of its progress, including an assessment of whether the Early Adoption Stage requirements have been completed, as part of its annual review or a separate TAC presentation. 

The project must receive the affirmative majority vote of the TAC and subsequently the affirmative majority vote of the Governing Board to become an Early Adoption Stage project.

### Benefits

The benefits for Early Adoption stage projects focus on ecosystem enablement. In particular, Early Adoption projects are entitled to the following benefits in addition to those benefits at the Incubation Stage.

- An initial strategy meeting with the project leadership and the {{ site.foundation_name }} staff to define the actions and activities to support the project’s growth plan.
- More marketing, communication, and PR support, including major and minor announcements. 
- Events support and promotion, both at {{ site.foundation_name }} hosted events and potentially other events (pending funding approval).
- Support and funding for a CI/CD environment.
- The ability for the project to develop a conformance program and training program to support downstream adoption.

## Graduated Stage

The Graduated Stage is for projects that have reached their growth goals and are now on a sustaining cycle of development, maintenance, and long-term support. Graduated Stage projects are commonly used in enterprise production environments and have large, well-established project communities.

### Acceptance Criteria

To graduate from Incubation or Early Adoption status, or for a new project to join with Graduated status, a project must meet the Early Adoption stage criteria plus:

- Achievement of the OpenSSF Best Practices badge at the ['Gold' level](https://bestpractices.coreinfrastructure.org/en/criteria/2).
- Have fulfilled or are on track to complete the growth plan defined in the Early Adoption stage proposal.
- Have a healthy number of contributions or committers from at least three organizations, with any single organization not composing more than 50% of the contributions or committers. Committers must be identified within the project in a COMMITTERS file.
- Have a public list of project adopters for at least the primary repo (e.g., ADOPTERS.md or logos on the project website).

### Approval Process

Early Adoption Stage projects that wish to move to the Graduated Stage as part of their [annual review]({% link process/review_cycle.md %}) or upon request of the project. To be considered for the Graduated Stage, the project must present a review of its progress, including an assessment of whether the Graduated Stage requirements have been completed, as part of its annual review or a separate TAC presentation. 

The project must receive the affirmative majority vote of the TAC and subsequently the affirmative majority vote of the Governing Board to become a Graduated Stage project.

### Benefits

Graduated Stage projects are considered “TAC Projects” as defined in the {{ site.foundation_name }} Charter, with all the rights and responsibilities as defined in the {{ site.foundation_name }} Charter. In particular, Graduated Stage projects are entitled to the following benefits in addition to those benefits at the Incubation and Early Adoption stages.

- A voting representative from the project on the TAC.
- Quarterly strategic planning meetings with the project leadership and the {{ site.foundation_name }} staff to define the actions and activities to support the project.
- Access to discretionary budget for supporting project-specific outreach and ecosystem development activities, subject to approval by the Governing Board.
- Advanced marketing/communication/PR support that includes project promotion via blog posts, social media, and {{ site.foundation_name }} website; support with white papers and posters, and any marketing collateral designated to promote the project.

## Emeritus Stage

Emeritus projects are projects that the maintainers or the TAC feel have reached or are nearing end-of-life. Emeritus projects have contributed to the ecosystem, but are not necessarily recommended for modern development, as there may be more actively maintained choices. {{ site.foundation_name }} appreciates the contributions of these projects and their communities, as well as the role they have played in advancing the ecosystem.

Projects in this stage are not in active development. Their maintainers may infrequently monitor their repositories and may only push updates to address security issues, if at all. Emeritus projects should clearly state their status and what users or contributors can expect in terms of response or support. If there is an alternative project the maintainers recommend, it should be listed as well. The foundation will continue to hold the IP, as well as any trademarks and domains, but the project does not draw on foundation resources.

### Acceptance Criteria

Projects may be granted Emeritus status by a 2/3 vote of the TAC, with the approval of the project's leadership. In cases where there is a lack of project leadership or the project is unresponsive or unwilling to do its annual review, only a 2/3 vote from the TAC is required.

### Benefits

Emeritus stage projects will have a long-term home for the project assets and code. Each Emeritus project will have a sponsor from the TAC to monitor any security or trademark concerns raised and, at the TAC’s discretion, address them. {{ site.foundation_name }} will remove the promotion of Emeritus projects from its website and other promotional materials.
