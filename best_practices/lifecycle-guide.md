---
parent: Best Practices
title: Lifecycle Guide
---

# LF Energy project lifecycle guide

A practical guide to moving through the LF Energy project lifecycle stages — what to focus on at each stage and what you need to advance to the next one.

---

## Overview

Projects move through up to four active stages: **Sandbox → Incubation → Early Adoption → Graduated**. Each transition requires a TAC presentation and a majority vote; Early Adoption and Graduated additionally require a Governing Board majority vote.

The OpenSSF Best Practices badge is the technical backbone of the whole journey:

| Stage | OpenSSF badge required |
|---|---|
| Incubation | Passing |
| Early Adoption | Silver |
| Graduated | Gold |

---

## Stage 1: Sandbox

### What this stage is for

You're in the foundation. The clock starts now — projects are expected to reach Incubation within one year. Use this stage to get your house in order: IP, tooling, governance foundations, and early community signals.

### What to focus on while you're here

**Start the OpenSSF Passing badge immediately**

The badge has ~65 criteria and takes weeks to complete properly — don't leave it until the last month. Visit [bestpractices.coreinfrastructure.org](https://bestpractices.coreinfrastructure.org) and work through each criterion from day one. Common quick wins: adding a CONTRIBUTING file, specifying your license clearly, and setting up basic CI.

Also set up a vulnerability reporting process early. Add a `SECURITY.md` file and a private disclosure channel (e.g. a `security@` email or GitHub private vulnerability reporting). This is a badge requirement and signals maturity to potential adopters.

**Lay your governance foundations**

Draft your `README`, `GOVERNANCE.md`, and `CODEOWNERS` files now — all three are required for Incubation. Starting them in Sandbox means you can iterate with real experience rather than writing them under deadline pressure. Use the [LF Energy TSC template](https://github.com/lf-energy/tsc-template) as your starting point for `GOVERNANCE.md`.

- `README`: what the project does, why it matters, how to get started, how to contribute
- `GOVERNANCE.md`: how decisions are made, how maintainers are added or removed, what the TSC does
- `CODEOWNERS`: which people or teams own which parts of the repo

Also identify your initial TSC members and register them in LFX Project Control Center. Early Adoption requires a TSC of at least 5 members — building toward that now is much easier than scrambling later.

**Build community visibility**

Establish your LFX Insights baseline from day one. You can't show growth without a starting point — check your dashboard regularly and understand which metrics the TAC will review at your annual review.

Participate actively in your SIG. SIGs aren't just a reporting obligation: they're where you build the relationships that support your advancement reviews. TAC members often attend SIG meetings and will have a stronger sense of your project's health when your review comes.

Publish a public roadmap early. A roadmap is required for Incubation, but publishing it during Sandbox has an added benefit: it signals to potential contributors and adopters what the project intends to do. Be specific about features and timelines, and include what you explicitly won't be doing.

> **Quarterly reports are required.** Submit them to your SIG on schedule and use them to document your progress toward Incubation criteria honestly — it keeps the TAC informed and creates a paper trail of progress.

---

## Sandbox → Incubation

**Approval:** TAC majority vote. Present at your annual review or request a standalone TAC slot. Target: within one year of joining Sandbox.

### What you need

**Technical health**

- **OpenSSF Passing badge** — ~65 criteria covering: a public bug tracker, a contributing guide, automated tests, a documented build process, and a security vulnerability disclosure policy. Work through each criterion at [bestpractices.coreinfrastructure.org](https://bestpractices.coreinfrastructure.org).
- **Architecture documentation** — a high-level design document in the repo explaining the software's major components and how they interact. A well-written overview with a diagram is sufficient. This is also a requirement of the OpenSSF Silver badge you'll need later.

**Governance**

- **README in every repository** — explains what the repo is, why it exists, and how to get started. Follow the [README checklist](https://github.com/ddbeck/readme-checklist) for guidance.
- **`GOVERNANCE.md`** — documents how technical decisions are made, how commit access is granted, how TSC members are elected or removed, and what happens if the project goes dormant. Use the [LF Energy TSC template](https://github.com/lf-energy/tsc-template/blob/main/GOVERNANCE.md).
- **TSC members registered in LFX Project Control Center** — all current TSC members listed under the project's TSC committee in LFX PCC. LF staff can help with setup.
- **`CODEOWNERS` or `COMMITTERS` file** — maps areas of the codebase to responsible people, and lists current and emeritus committers. Use the [LF Energy COMMITTERS template](https://github.com/lf-energy/tsc-template/blob/main/COMMITTERS.csv).

**Community and roadmap**

- **Documented roadmap for at least the next 12 months** — what the project intends to build, in what order, and what it explicitly won't do. Tie milestones to real release versions where possible.
- **LFX Insights data showing community growth** — the TAC will look at commit volume, contributor count, and organizational diversity. You don't need large numbers — you need visible growth and ideally contributions from more than one organization.
- **A credible plan to reach Early Adoption** — describe how you intend to grow committers, find production users, and meet Early Adoption criteria. It needs to be realistic, not polished.

> **Governance is what the TAC scrutinizes most.** They want evidence the project can function without its founders. A documented TSC with real decision-making authority signals long-term health far more than code quality alone.

---

## Stage 2: Incubation

### What this stage is for

Your governance foundations are in place. Now prove the project has a life beyond its creators: grow contributors from multiple organizations, find real production users, and build the technical quality needed for Early Adoption.

### What to focus on while you're here

**Work toward the OpenSSF Silver badge**

Silver adds ~55 additional criteria on top of Passing, with stronger requirements around test coverage (statements and branches), static analysis in CI, a documented security review process, and contributor response time standards. Start by reviewing the [Silver criteria](https://bestpractices.coreinfrastructure.org/en/criteria/1) and categorizing each as "already done," "in progress," or "needs work."

Set up coverage reporting in your CI pipeline (e.g. Codecov, Coveralls) and track it over time. Add static analysis if you don't have it — tools like SonarCloud integrate well with GitHub and satisfy multiple Silver criteria at once.

**Build toward production adoption**

Early Adoption requires at least two independent end users in production or credibly planning production deployment — and the TAC has final say on whether they count. Internal pilots at the founding organization generally don't qualify. Start having these conversations during Incubation: present at industry events, engage with SIG participants, reach out to energy companies who might benefit from the project.

Improve your documentation with deployment in mind. Write deployment guides, configuration references, upgrade guides, and troubleshooting documentation. This both attracts adopters and demonstrates maturity to the TAC.

**Grow governance and contributor diversity**

Build your TSC to 5+ members with an elected chair. Recruit from outside the founding organization — diversity of representation signals the project isn't controlled by a single entity. Document meeting minutes publicly.

Actively recruit contributors from other organizations. Graduation eventually requires no single org above 50% of contributions — building multi-org contribution early is much easier than redistributing an established contributor base later. Make it easy for external engineers to contribute: good docs, clear issue labeling, responsive review cycles.

Draft your 18-month release plan and growth plan now. Both are required for Early Adoption. The release plan should have specific milestones tied to features and timelines. The growth plan should address: target end-users, regulatory requirements for those deployments, how you'll grow contributors, and infrastructure needs.

> **Production users take time to find.** A company going from evaluation to production deployment can take 6–18 months. Start those conversations as early as possible in Incubation.

---

## Incubation → Early Adoption

**Approval:** TAC majority vote AND Governing Board majority vote — both required. Triggered by annual review or a standalone TAC presentation.

### What you need

**Technical quality**

- **OpenSSF Silver badge** — adds on top of Passing: documented statement and branch coverage, static analysis in CI, a security review process, architectural documentation, and stricter contributor-response standards. See all criteria at [bestpractices.coreinfrastructure.org/en/criteria/1](https://bestpractices.coreinfrastructure.org/en/criteria/1).

**Adoption evidence**

- **At least 2 independent end users in or planning production use** — users must be independent of each other and of the founding organization. "Adequate quality and scope" is a TAC judgment call — aim for users who can speak publicly about their deployment and whose use case is non-trivial. Internal proofs of concept rarely qualify.
- **Demonstrable growth in commits, committers, and organizations** — the TAC will review LFX Insights data. You need visible upward trends, not just static numbers. Multi-org contributions are a key signal of project health.

**Governance**

- **TSC with 5+ members, elected chair, and regular open meetings** — meetings must be open (publicly announced, minutes published) and regular. The chairperson must be elected by TSC members, not appointed by the founding organization.

**Growth plan**

- **18-month release plan with specific milestones** — concrete features and timelines. The TAC will hold you to this at Graduation.
- **Identified target end-users and deployment contexts** — who specifically will use this project in production, in what environments, and to solve what problems?
- **Identified relevant regulatory or standards body requirements** — for energy sector software, this may include grid codes, NERC CIP, IEC standards, or regional energy regulations. Document which ones apply and how you plan to address them.
- **Infrastructure needs for the growth plan identified** — what CI/CD resources, test environments, or hosting will the project need as it scales? LF Energy provides CI/CD funding at Early Adoption — knowing what you need in advance means you can request it efficiently.

> **Two votes means two audiences.** The TAC focuses on technical health and governance; the Governing Board cares about ecosystem impact and strategic fit. Your presentation should speak to both — not just code quality.

---

## Stage 3: Early Adoption

### What this stage is for

You have real users and a functioning governance model. Now execute your growth plan, broaden contributor diversity across organizations, and build the technical and community health that Graduation requires.

### What to focus on while you're here

**Work toward the OpenSSF Gold badge**

Gold adds ~15 criteria on top of Silver, including: a documented bus factor of at least 2, a two-person review requirement for code changes, and a documented security assurance case. Review all criteria at [bestpractices.coreinfrastructure.org/en/criteria/2](https://bestpractices.coreinfrastructure.org/en/criteria/2). The bus factor requirement has governance implications — you need multiple people capable of doing releases across organizations.

Consider a security audit. LF Energy and the Linux Foundation have programs to help fund or connect projects with security auditors. Engaging with this early both strengthens the codebase and demonstrates the security maturity enterprise adopters expect.

**Execute your growth plan**

Deliver on the plan you submitted to reach this stage. The TAC will check at Graduation whether you fulfilled or are credibly on track. If circumstances change and milestones need to shift, communicate that proactively at your annual review rather than letting it become a surprise.

Actively manage contributor org diversity toward the 50% rule. Track your organizational breakdown monthly in LFX Insights. If the founding organization still dominates, make explicit efforts to grow contributions from others: label "good first issues," present at relevant conferences, reach out to companies using the project and offer to help their engineers contribute.

Start building your `ADOPTERS.md` now. Graduation requires a public list of project adopters — starting it during Early Adoption means it grows organically. Reach out to known users and ask if they're willing to be listed.

**Use the resources available at this stage**

Engage the strategic planning session with LF Energy staff. This unlocks at Early Adoption and is an opportunity to align on marketing activities, event presence, and any specific support you need. LF staff have ecosystem-wide visibility and can make introductions to potential adopters or contributors.

Request CI/CD infrastructure funding. LF Energy provides this at Early Adoption — if your test suite is resource-constrained or you need dedicated environments for integration or performance testing, now is the time to request it.

> **The 50% rule is harder than it looks.** Even with the best intentions, founding organizations tend to dominate. Make contributor diversity an explicit project goal with regular tracking, not an afterthought.

---

## Early Adoption → Graduated

**Approval:** TAC majority vote AND Governing Board majority vote — both required. Triggered by annual review or a standalone TAC presentation.

### What you need (on top of Early Adoption criteria)

- **OpenSSF Gold badge** — adds stricter security, bus factor, and code review requirements on top of Silver. Notable additions: documented bus factor of 2+, two-person review for all commits, security assurance case. See all criteria at [bestpractices.coreinfrastructure.org/en/criteria/2](https://bestpractices.coreinfrastructure.org/en/criteria/2).
- **Growth plan from Early Adoption fulfilled or credibly on track** — the TAC will compare your actual progress against the plan you submitted when entering Early Adoption. If you've had to adjust significantly, explain why and what the updated path looks like.
- **Contributions from at least 3 organizations, no single org above 50%** — measured across both commits and committers. Pull LFX Insights data before your review and verify the breakdown. This is a hard requirement, not a judgment call.
- **`COMMITTERS` file with named committers from multiple organizations** — list all current committers with organization affiliation, plus emeritus committers. Multi-org representation here is the documented proof of community independence.
- **Public `ADOPTERS.md` or adopter showcase on the project website** — a public list of organizations using the project in production. Logos on the website also work.

> **The 50% rule is the most common blocker.** Start tracking organizational contribution breakdown at least 6 months before your planned Graduation review. If you're above the threshold, you need runway to grow external contributions before applying.

---

## Stage 4: Graduated

### What this stage is for

You've reached the top tier. Focus shifts from growth to sustainability — maintaining contributor diversity, delivering on long-term support commitments, and actively participating in the LF Energy ecosystem via your TAC seat.

### What sustaining looks like

**Maintain contributor diversity**

Annual reviews continue and the TAC will keep monitoring contributor health. If a single organization's share grows back above 50% — for example because others reduce activity — the TAC may flag it. Keep tracking org breakdown in LFX Insights regularly.

**Engage quarterly strategic planning sessions**

These sessions with LF Energy staff are an opportunity to align on outreach activities, funding requests from the discretionary budget, event presence, and white papers or marketing collateral. Come prepared with specific asks and an update on project health and roadmap.

**Participate actively on the TAC**

As a TAC Project you have a voting representative. Attend TAC meetings, vote on proposals, and contribute to shaping LF Energy's technical strategy. Projects that engage actively in foundation governance tend to benefit more from the ecosystem than those that treat TAC participation as a formality.

**Use the discretionary outreach budget**

Graduated projects have access to a discretionary budget (subject to Governing Board approval) for project-specific outreach and ecosystem development. This can fund conference presence, developer events, case study production, or other activities that grow adoption. Submit requests through LF Energy staff with a clear rationale.

> **Graduation is not the finish line.** Annual reviews continue and project health metrics still matter. A project that becomes inactive or loses contributor diversity can have its status revisited by the TAC.

> **Consider mentoring incoming projects.** Graduated projects are well-positioned to support Sandbox and Incubation projects working through the same journey — and it increases your project's visibility and influence within the foundation.

---

## Quick reference: advancement requirements

| | Sandbox → Incubation | Incubation → Early Adoption | Early Adoption → Graduated |
|---|---|---|---|
| **Vote required** | TAC majority | TAC + Governing Board | TAC + Governing Board |
| **OpenSSF badge** | Passing | Silver | Gold |
| **Production users** | — | 2+ independent | (maintained) |
| **TSC** | Established | 5+ members, elected chair | (maintained) |
| **Contributor orgs** | Growth shown | Growth shown | 3+ orgs, no org >50% |
| **Roadmap** | 12 months | 18-month release + growth plan | Growth plan on track |
| **Adopters list** | — | — | Public ADOPTERS.md |

---

*Based on the [LF Energy Project Lifecycle](https://tac.lfenergy.org/process/lifecycle.html) maintained by the LF Energy TAC.*
