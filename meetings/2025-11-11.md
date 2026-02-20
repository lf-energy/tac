---
parent: Meetings
title: "2025-11-11"
---

# LF Energy Technical Advisory Council (TAC) Meeting - November 11, 2025

## Voting Representative Attendees

### Strategic Member Representatives



- [x] Antonello Monti - RWTH Aachen University (Chair)
- [x] Art Pope - Google LLC
- [ ] Boris Dolley - RTE (Reseau de Transport dElectricite)
- [x] Sachin Bakhar - Shell International Exploration & Production, Inc.
- [x] Jonas van den Bogaard - Alliander 
- [ ] Moise Kameni - Hydro-Quebec 


### Project Representatives



- [ ] Clément Bouvier - OperatorFabric Representative
- [x] Maarten Mulder - Grid eXchange Fabric (GXF) Representative
- [ ] Peter Mitri - PowSyBl Representative 
- [ ] Travis Sikes - OpenDSM Representative


### Non-Voting Project and Working Group Representatives



- [x] Arila Barnes - Hyphae Representative
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
- [x] Chloe Ching - Shell
- [x] David Chassin, Dynawo, Arras Representative


### LF Staff



- [ ] Alex Thornton - LF Energy
- [x] Alexandre Parisot - LF Energy
- [ ] Dan Brown - The Linux Foundation
- [x] John Mertic - The Linux Foundation
- [x] Yarille Ortiz - The Linux Foundation

### Other Attendees

* Sebastien Lussier, Hydro-Quebec
* Jesper Villadsen,  Energinet
* Thomas Wisbech, Energinet
* Bruce Nordman

## Meeting Assets

* [Deck](2025-11-11/LF Energy - TAC Meeting - 2025-11-11.pdf)
* [Project Origin Presentation](https://github.com/user-attachments/files/25430719/LFE.-.Project.Origin.-.Granular.Certificates.-.LFE.TAG.11.11.2025.pptx.pdf)
* [Recording](https://zoom.us/rec/share/ouo1L6v92dyz75eQw7oZNbWO4l_zUulJcPJiR32svqHaPdFX6CBFvKq7FlOweAwR.p0xsP_q1TMmcT0UI)


## Antitrust Policy Notice

Linux Foundation meetings involve participation by industry competitors, and it is the intention of the Linux Foundation to conduct all of its activities in accordance with applicable antitrust and competition laws. It is therefore extremely important that attendees adhere to meeting agendas, and be aware of, and not participate in, any activities that are prohibited under applicable US state, federal or foreign antitrust and competition laws.

Examples of types of actions that are prohibited at Linux Foundation meetings and in connection with Linux Foundation activities are described in the Linux Foundation Antitrust Policy available at [linuxfoundation.org/antitrust-policy](https://www.linuxfoundation.org/antitrust-policy). If you have questions about these matters, please contact your company counsel, or if you are a member of the Linux Foundation, feel free to contact Andrew Updegrove of the firm of Gesmer Updegrove LLP, which provides legal counsel to the Linux Foundation.

## Agenda

* General Updates
* New Project Proposal: Project Origin [#576](https://github.com/orgs/lf-energy/projects/2?pane=issue&itemId=118976779&issue=lf-energy%7Ctac%7C576)
* Annual Review: AI SIG [#93](https://github.com/orgs/lf-energy/projects/2/views/1?pane=issue&itemId=45965002&issue=lf-energy%7Ctac%7C93)
* Annual Review: SC Decarbonisation Hub [#171](https://github.com/orgs/lf-energy/projects/2/views/1?pane=issue&itemId=66748737&issue=lf-energy%7Ctac%7C171)
* Marketing and Events Updates

## Notes

John Mertic called the meeting to order at 8:05 am PT.

### Opening and General Updates

Mertic reviewed the antitrust policy and introduced the meeting agenda, noting a new project proposal, Project Origin, and the AI SIG for their annual review. Mertic also shared a change in the Shell TAC representation, with Sachin Bhakar introducing himself as the new Shell representative.

### Projects and Working Group Leads

Mertic briefly reviewed the TAC project annual review schedule and project pipeline.

### Project Pipeline

Mertic provided an update on the projects in the pipeline.

* **Active Onboarding (Q1 Presentations Expected):** CityLearn Global Granular, Certificate Registry, and PowerCore are at various stages of LF onboarding.
* **Recently Submitted:** Smart HEMS Benchmark (from EcoFlow) is in early LF onboarding.
* **Working with LF Europe:** AINETUS is being reviewed due to its many sub-projects, with a focus on how to best onboard it into LF Energy.
* **Fledge Interest:** Conversations are ongoing with the Fledge project about joining, but major updates are unlikely until Q1 due to bandwidth constraints on FledgePower.
* **Recently Accepted:** Utility Rate Plan Exchange Working Group (accepted by the LFESS Steering Committee).

### TAC Priorities

Mertic reviewed the 2025 priorities and mentioned a session to discuss TAC priorities for 2026 is tentatively planned for the January meeting. He asked the TAC to review and provide feedback on the [pull request for the documentation audit support](https://github.com/orgs/lf-energy/projects/2/views/1?pane=issue&itemId=136016025&issue=lf-energy%7Ctac%7C546) to get it finalized by the next meeting. Mertic also asked the TAC to continue providing feedback on the [current lifecycle adjustments](https://github.com/orgs/lf-energy/projects/2/views/1?pane=issue&itemId=136015884&issue=lf-energy%7Ctac%7C650) so that a draft of potential changes could be presented at the next meeting.

Mertic mentioned the focus of security audits is shifting to lighter-weight security threat models and he asked Incubation-stage projects to comment if they would like to participate in one of the approximately five available engagements.

Mertic concluded the updates with a reminder that Projects should review the license scan reports and the newly included SBOMs from Jeff Shapiro. The main ask is to address key findings and general maintenance work outlined in the report.

### Project Origin Presentation [#576](https://github.com/orgs/lf-energy/projects/2?pane=issue&itemId=118976779&issue=lf-energy%7Ctac%7C576)

Thomas Wisbech presented Project Origin, a decentralized certificate registry system that allows for tokenization and proof of ownership in energy management systems. He explained that the system has been in production and was recently published. Wisbech highlighted its potential applications in home energy management systems and its alignment with ORES. He emphasized the need for true decentralization, cryptographic consistency between registries, and proper governance to validate transactions and manage rules. Thomas also mentioned his departure from Energinet on December 31st and expressed his desire to hand over the project to the public domain.

Wisbech explained that Project Origin was discontinued by its original developer, Energinet, due to misalignment with their core mission. He noted that while the project had been in production and had received European Commission approval, it hadn't found market fit, with market participants only wanting minor changes before going to market. The TAC discussed the challenges of bringing discontinued projects into LF Energy, with Mertic highlighting that successful projects typically come with existing development resources and community support, which Project Origin currently lacks. 

The group discussed the Project Origin proposal. A TAC member raised concerns about adoption and potential use cases, particularly for utilities in demand response management. Wisbech shared Energinet's experience with vehicle-to-grid technology and emphasized the need for standards in this area. Arila Barnes proposed a knowledge transfer from Energinet to the ORES Group and the Hyphae project, highlighting the potential benefits for distributed microgrids and tokenization efforts. Barnes suggested exploring potential synergies between the two solutions. Wisbech and Barnes agreed to meet to discuss the opportunity and then report back to the TAC.

### AI SIG Annual Review [#53](https://github.com/orgs/lf-energy/projects/2/views/1?pane=issue&itemId=39989290&issue=lf-energy%7Ctac%7C53)

Alexandre Parisot presented the AI annual review, highlighting its activities, projects, and outreach efforts. He mentioned the publication of an AI white paper and the SIG's response to the EU's call for evidence on digitalization and AI in the energy sector. David Chassin raised concerns about data quality and biases in AI models, which Parisot acknowledged as a significant issue. The group discussed potential tools and strategies to address these challenges. Parisot mentioned the SIG would be hosting annual reviews for its projects, noting the first would be GridFM.

### SC Decarbonisation Annual Review [#171](https://github.com/orgs/lf-energy/projects/2/views/1?pane=issue&itemId=66748737&issue=lf-energy%7Ctac%7C171)

Bhakar reported changes in the project leadership and will provide updates at a future meeting.

## Closing and Next Meeting

Mertic presented the agenda for the next meeting of the LF Energy TAC, scheduled for 9 December 2025 at 8:00 a.m. US Pacific Time/11:00 a.m. US Eastern Time/5:00 p.m. Central European Time.
