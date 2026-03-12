---
parent: Meetings
title: "2026-03-10"
---


# LF Energy Technical Advisory Council (TAC) Meeting - March 10, 2026


## Voting Representative Attendees


### Strategic Member Representatives



- [x] Antonello Monti - RWTH Aachen University (Chair)
- [x] Art Pope - Google LLC
- [x] Boris Dolley - RTE (Reseau de Transport dElectricite)
- [x] Peter Mitri - PowSyBl Representative 
- [ ] Travis Sikes - OpenDSM Representative
- [x] Maarten Mulder - Grid eXchange Fabric (GXF) Representative


### Project Representatives



- [ ] Clément Bouvier - OperatorFabric Representative
- [x] Sachin Bakhar - Shell International Exploration & Production, Inc.
- [ ] Moise Kameni - Hydro-Quebec 
- [x] Jonas van den Bogaard - Alliander 


### Non-Voting Project and Working Group Representatives



- [ ] Arila Barnes - Hyphae Representative
- [ ] Chris Xie - ORES Representative
- [ ] Daniel Roesler - CDS WG1 & 2 Representative
- [ ] Gabe Hege - Battery Data Alliance Representative
- [ ] Hugo van de Pol - OpenLEADR Representative
- [ ] Eloi Bail - SEAPATH Representative
- [ ] Frederic Didier - OperatorFabric Representative
- [ ] Karl Yang - ORES Representative
- [ ] Mark Nigge-Uricher - SAM Representative
- [ ] Michael Stuber - GEISA Representative
- [ ] Nicolas Höning - FlexMeasures Representative
- [ ] Richard Lam - GEISA Representative
- [ ] Robben Riksen - Shapeshifter Representative
- [ ] Robert Tusveld - GXF Representative
- [ ] Stan Janssen - OpenLEADR Representative
- [ ] Thana Paris - CitrineOS Representative
- [ ] Tony Xiang - Power Grid Model Representative
- [x] Kjell Petter Myhren - p-SWAMP
- [x] Robert de Leeuw, Edge Flexibility and Interoperability SIG Representative
- [ ] Thomas Wisbech, Project Origin Representative


### LF Staff



- [x] Alex Thornton - LF Energy
- [x] Alexandre Parisot - LF Energy
- [ ] Dan Brown - The Linux Foundation
- [x] John Mertic - The Linux Foundation
- [x] Yarille Ortiz - The Linux Foundation


### Other Attendees



* Casey Martinez
* Nico Rikken
* Ryan McMahon
* Romain Lebrun Thauront
* Mattis Mörstam


## Meeting Assets



* [Deck](https://github.com/lf-energy/tac/blob/main/meetings/2026-03-10/LF%20Energy%20-%20TAC%20Meeting%20-%202026-03-10.pdf)
* [LF Energy RegistryOS Project Proposal](https://github.com/lf-energy/tac/blob/main/meetings/2026-03-10/LF%20Energy%20%20RegistryOS%20TAC%20Sandbox%20Proposal.pdf)
* [Recording](https://zoom.us/rec/share/Vk8rlm3wyIlP5E3YCOBeFMrCsmQAff16QSqD-c2cB0_-iXBepFEeOanmsnHuNvTY.KuTFr1eCFsrNqBKD)


## Antitrust Policy Notice

Linux Foundation meetings involve participation by industry competitors, and it is the intention of the Linux Foundation to conduct all of its activities in accordance with applicable antitrust and competition laws. It is therefore extremely important that attendees adhere to meeting agendas, and be aware of, and not participate in, any activities that are prohibited under applicable US state, federal or foreign antitrust and competition laws.

Examples of types of actions that are prohibited at Linux Foundation meetings and in connection with Linux Foundation activities are described in the Linux Foundation Antitrust Policy available at [linuxfoundation.org/antitrust-policy](https://www.linuxfoundation.org/antitrust-policy). If you have questions about these matters, please contact your company counsel, or if you are a member of the Linux Foundation, feel free to contact Andrew Updegrove of the firm of Gesmer Updegrove LLP, which provides legal counsel to the Linux Foundation.


## Agenda



* Opening and General Updates
    * TAC member updates and annual review date reminders
    * Project Pipeline
    * Security Audit Prioritization [#408](https://github.com/orgs/lf-energy/projects/2/views/1?pane=issue&itemId=155708761&issue=lf-energy%7Ctac%7C408)
    * Slack Pro
    * Security Advisory: Active Exploitation of Weak GitHub Actions Configurations [#775](https://github.com/lf-energy/tac/issues/775)
    * FledgePower moving to Emeritus [#137](https://github.com/orgs/lf-energy/projects/2/views/1?pane=issue&itemId=58391059&issue=lf-energy%7Ctac%7C137)
* New Project Proposal: LF Energy RegistryOS [#556](https://github.com/orgs/lf-energy/projects/2/views/1?pane=issue&itemId=114751178&issue=lf-energy%7Ctac%7C556)
* Marketing and PR Updates
* Closing and Next Meeting 


## Notes

John Mertic called the meeting to order at 8:04 am PT and Yarille Ortiz recorded the minutes.


### Opening and General Updates

Mertic reviewed the antitrust policy and introduced the meeting agenda.

Mertic briefly reviewed the TAC and SIG review calendars and project pipeline. He noted the SEAPATH would be rescheduled and that the next few months have full agendas with reviews. Alexandre Parisot offered to host the Grid2Op project review during the AI SIG meetings. Mertic also announced projects are welcome to contact SIG leaders if they are interested in presenting their annual reviews at the SIG level.


### Slack Pro

Mertic announced that after hard work, the Linux Foundation has negotiated free Slack Pro for all LF projects. Thanks to this negotiation, he said LF Energy and PowSyBl have been upgraded to the Pro version and no longer will have issues with accessing message history. 


### Security Advisory: Active Exploitation of Weak GitHub Actions Configurations [#775](https://github.com/lf-energy/tac/issues/775)

Mertic shared a current exploitation of weak GitHub actions and urged projects to review contents of PRs for high priority advisory on GitHub Actions configurations.


### Security Audit Prioritization [#408](https://github.com/orgs/lf-energy/projects/2/views/1?pane=issue&itemId=155708761&issue=lf-energy%7Ctac%7C408)

Mertic shared that the TAC has an ability to fund up to five Security Threat Model Assessments in 2026. 

He explained these are lighter-weight security assessments than the previous audits, and it includes a 1-hour discovery, asynchronous Q&A (Slack/email), and time to address vulnerabilities. Mertic listed projects that were recommended to undergo the audits: CoMPAS (already requested), Power Grid Model (recently moved to Early Adoption, so likely should be considered), OpenSTEF, and asked the TAC for other recommendations.


### FledgePower moving to Emeritus [#137](https://github.com/orgs/lf-energy/projects/2/views/1?pane=issue&itemId=58391059&issue=lf-energy%7Ctac%7C137)

Boris Dolley and Romain Lebrun Thauront presented the request to transition FledgePower to Emeritus status. They explained patches would be completed by the end of April before archiving the GitHub repositories. Dolley explained that FledgePower would not return to RTE due to reputation issues, and they discussed potentially presenting lessons learned at a future LF Energy Summit or TAC meeting. The discussion highlighted the importance of supply chain diversity in open source projects, with Dolley emphasizing the need for commercial-grade open source solutions with multiple providers rather than relying on a single vendor. Mertic noted the value of the LF Energy project lifecycle stages in building trust and recognition for projects.


## New Project Proposal: LF Energy RegistryOS [#556](https://github.com/orgs/lf-energy/projects/2/views/1?pane=issue&itemId=114751178&issue=lf-energy%7Ctac%7C556)

Casey Martinez presented LF Energy RegistryOS, a software solution designed to enhance existing EAC (Energy Attribute Certificate) registries by enabling the issuance of granular certificates. Martinez stated that the solution aims to address the lack of standardization and slow adoption of new capabilities in current EAC registries. He highlighted the benefits of open sourcing the software, including neutral governance and global reach, and mentioned ongoing pilots with companies like Akamai Technologies. The team aims to follow the Red Hat model by helping implement the open-source registry software for existing registries and operating an instance globally. The TAC discussed synergies between the project and CDS.

The group agreed to propose LF Energy RegistryOS for an LF Energy sandbox vote, with van den Bogaard expressing support once we have the correct link to the repo.


## Marketing and PR Updates

Mertic provided updates on meet ups and news contents. He mentioned that the LF Energy Wikipedia has been updated. He mentioned LF Energy Summit Europe 2026 registration is open and that the CFP will open up soon. He shared other events and CFP deadlines.

Dolley updated the TAC that the PowSyBl Bootcamp which was previously listed as “invite only” has recently been made public. He shared the registration link: [https://community.linuxfoundation.org/events/details/lfhq-lf-energy-presents-powsybl-bootcamp-2026/](https://community.linuxfoundation.org/events/details/lfhq-lf-energy-presents-powsybl-bootcamp-2026/)


## Closing and Next Meeting 

Mertic presented the agenda for the next meeting of the LF Energy TAC, scheduled for 14 April 2026 at 8:00 a.m. US Pacific Time/11:00 a.m. US Eastern Time/5:00 p.m. Central European Time.

 
