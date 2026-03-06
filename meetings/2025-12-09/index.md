---
parent: Meetings
title: "2025-12-09"
---

# LF Energy Technical Advisory Council (TAC) Meeting - December 9, 2025

## Voting Representative Attendees

### Strategic Member Representatives

- [x] Antonello Monti - RWTH Aachen University (Chair)
- [x] Art Pope - Google LLC
- [x] Boris Dolley - RTE (Reseau de Transport dElectricite)
- [x] Peter Mitri - PowSyBl Representative
- [x] Travis Sikes - OpenDSM Representative
- [x] Maarten Mulder - Grid eXchange Fabric (GXF) Representative

### Project Representatives

- [ ] Clément Bouvier - OperatorFabric Representative
- [ ] Sachin Bakhar - Shell International Exploration & Production, Inc.
- [ ] Moise Kameni - Hydro-Quebec
- [ ] Jonas van den Bogaard - Alliander

### Non-Voting Project and Working Group Representatives

- [x] Arila Barnes - Hyphae Representative
- [ ] Chris Xie - ORES Representative
- [x] Daniel Roesler - CDS WG1 & 2 Representative
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
- [ ] Kjell Petter Myhren - p-SWAMP
- [ ] David Chassin, Dynawo, Arras Representative

### LF Staff

- [x] Alex Thornton - LF Energy
- [x] Alexandre Parisot - LF Energy
- [x] Dan Brown - The Linux Foundation
- [x] John Mertic - The Linux Foundation
- [x] Yarille Ortiz - The Linux Foundation
- [ ] Ben Thomas

### Other Attendees

- [x] Sebastien Lussier, Hydro-Quebec
- [x] Thomas Wisbech, Energinet
- [x] Bruce Nordman
- [x] DeAndrea Salvador
- [x] Francois Mirallès
- [x] Michael Lu

## Meeting Assets

* [Deck](2025-12-09/LF Energy - TAC Meeting - 2025-12-09.pdf)
* [Project Origin Presentation](https://github.com/user-attachments/files/25430719/LFE.-.Project.Origin.-.Granular.Certificates.-.LFE.TAG.11.11.2025.pptx.pdf)
* [CDS Working Group Presentation](2025-12-09/CDS - TAC Meeting Presentation - 2025-12-09.pdf)
* [Recording](https://zoom.us/rec/share/9ha-K54VaK5nRWQil0fptArXBG_twt6mK--yFwECkzm3OZYIdYwhjBgsGx5Dn4k.IH_tppYpG2UdgeDp)

## Antitrust Policy Notice

Linux Foundation meetings involve participation by industry competitors, and it is the intention of the Linux Foundation to conduct all of its activities in accordance with applicable antitrust and competition laws. It is therefore extremely important that attendees adhere to meeting agendas, and be aware of, and not participate in, any activities that are prohibited under applicable US state, federal or foreign antitrust and competition laws.

Examples of types of actions that are prohibited at Linux Foundation meetings and in connection with Linux Foundation activities are described in the Linux Foundation Antitrust Policy available at [linuxfoundation.org/antitrust-policy](https://www.linuxfoundation.org/antitrust-policy). If you have questions about these matters, please contact your company counsel, or if you are a member of the Linux Foundation, feel free to contact Andrew Updegrove of the firm of Gesmer Updegrove LLP, which provides legal counsel to the Linux Foundation.

## Agenda

* General Updates
* Annual Review: CDS WG Annual Reviews [#93](https://github.com/orgs/lf-energy/projects/2/views/1?pane=issue&itemId=45965002&issue=lf-energy%7Ctac%7C93)
* Annual Review: NODE Collective [#171](https://github.com/orgs/lf-energy/projects/2/views/1?pane=issue&itemId=66748737&issue=lf-energy%7Ctac%7C171)
* Marketing and Events Updates

## Notes

John Mertic called the meeting to order at 8:05 am PT and Yarille Ortiz recorded the minutes.

### Opening and General Updates

Mertic reviewed the antitrust policy and introduced the meeting agenda.

### Projects and Working Group Leads

Mertic briefly reviewed the TAC project annual review schedule and project pipeline. \

### TAC Vote on GridFM Resource Request

A vote for a resource request for the Good FM project to upload a large dataset to Hugging Face is nearly complete, with a vote expected to be finalized within the next day.

Moments after Ortiz announced a quorum on the vote with the TAC voting members approving the request.

### 2026 TAC Planning

The 2026 meeting schedule is set, and the TAC will begin planning its priorities for the year in the January meeting.

### Digital Substation SIG

The group has requested to shut down due to a lack of leadership and momentum. The TAC tentatively agreed to archive the SIG for now but may resurrect it later, especially in light of upcoming European Commission projects on the topic.

### Project Origin Update [#576](https://github.com/orgs/lf-energy/projects/2?pane=issue&itemId=118976779&issue=lf-energy%7Ctac%7C576)

Thomas Wisbech provided an update addressing previous concerns about continuity. He mentioned the project will move to Mjølner Informatics, with the current core team remaining involved, and plans for a Rust implementation. Wisbech agreed to update the GitHub issue with this proposal for additional feedback.

## Proposal for SBOM, SIGstore, and SWHID

Boris Dolley presented a proposal to enhance security and transparency for LFE releases by consistently publishing a Software Bill of Materials (SBOM), cryptographic hash (SIGstore), and Software Heritage ID (SWHID). The idea received strong support, especially for its relevance in the Operational Technology (OT) space and for improving supply chain security. The next step is to explore a pilot project, possibly with the OSPO SIG.

## Connected Data Specifications (CDS) Working Group Annual Review

Daniel Roesler presented updates for CDS Working Groups 1 (Registration) and 3 (Customer Data).

He mentioned the project changed its name from Carbon Data Specification to Connected Data Specification (CDS) to reflect a broader scope beyond just carbon accounting.

Roesler said Working Group 1 has merged two specifications that define a generic framework for central entities (like utilities) to publish capabilities and manage secure client registration/onboarding. He noted Working Group 3 is finalizing specifications for open standards for requesting and downloading customer data (meter, billing, account details).

Roesler mentioned future goals include submitting the specifications to ISO for adoption, starting pilot implementations, and creating an open-source test suite to enable third-party certification of CDS deployments.

## Node Collective Annual Review

DeAndrea Salvador provided an update on the sandbox project, which is developing a standardized schema for residential energy efficiency and electrification incentive programs in the U.S. She highlighted  a published Version 1 of its schema on GitHub, influenced by data from its founding members. She also mentioned the project has significant market interest but is planning a "technical restart" in 2026, focusing on data sourcing, potentially using Hugging Face for the dataset, and increasing community engagement.

## Marketing and PR Updates

Dan Brown provided updates on a year-end press release announcing Symantec Energy Framework, RTC Tools, and p-SWAMP. He mentioned they are also looking to schedule webinars for 2026 and confirmed that LF Energy will have an Energy Dev Room at FOSDEM and a booth at Distributech.

## Closing and Next Meeting

Mertic presented the agenda for the next meeting of the LF Energy TAC, scheduled for 13 January 2026 at 8:00 a.m. US Pacific Time/11:00 a.m. US Eastern Time/5:00 p.m. Central European Time.
