---
parent: Processes
---

# Documentation Best Practices for Projects

Documentation is a key aspect for any open source project. After all, without guides on how to use the project, it would be extremely challenging, if not impossible, to start using it.

The biggest challenge in open source projects is that documentation can be an afterthought. This isn’t out of malice, but that documentation is a skill that many software developers struggle with. As a result, documentation can become either incomplete or outdated quickly, making it difficult for end-users to leverage the project and challenging for the project to remedy the inaccurate documentation. Even if documentation is kept up to date, its structure might suit the audience of a core maintainer, but not the audience of someone looking to get started with using the project.

The OpenSSF Best Practices Badge program is a valuable resource for open source projects seeking to enhance their operational processes and strengthen their security posture. It provides numerous references to documentation that projects should have. This document will use the guidelines in the OpenSSF Best Practices Badge as the core guidance to ensure alignment with best practices in open source projects.

## Basics

### Project Description

> - The project website MUST succinctly describe what the software does (what problem does it solve?). [[description_good](https://www.bestpractices.dev/en/criteria#0.description_good)]

The keyword here is ‘succinctly’, ensuring the reader (who may lack domain or subject matter expertise) clearly understands the project's purpose and the problems it aims to solve. It can be useful to link to other resources that describe some of the key concepts, so you don’t need to.

This also applies to the `README` file for the project; it should start with a 2-3 sentence at most description of the project and the problems it aim to solve.

### Default language

> - The project SHOULD provide documentation in English and be able to accept bug reports and comments about code in English. [[english](https://www.bestpractices.dev/en/criteria#0.english)]

English is the default language for all open source projects, but projects should seek to understand their audience and provide translations to other languages as appropriate.

## User Docs

### Core Documentation

> - The project MUST provide basic documentation for the software produced by the project. {N/A justification} [[documentation_basics](https://www.bestpractices.dev/en/criteria#0.documentation_basics)]

Basic documentation should encapsulate a few key areas:

* How to install it
* How to start it
* How to use it in a basic way (possibly with a tutorial using examples)

This can be a subset of the more in-depth documentation of features and functionality, and it’s best to point to that more in-depth documentation for reference as appropriate. 

Tools to do this include:

* [Read The Docs](https://about.readthedocs.com/), which is a great tool for taking standardized documentation markup and creating good-looking documentation. 
* [Just the Docs](https://just-the-docs.com/), which is more of a generic Jekyll template, but centered on a documentation-focused site. The TAC website uses Just the Docs.
* Projects may choose to use their Confluence space as well.

Key things to ensure are documented:

* A quick start guide ( more below ).
* Key workflows
* All feature options.
    * For a CLI tool, this would be all the CLI flags and options
    * For a web based tool, this would be all the various menu and configuration options, with screenshots.
    * If it is just a library, this would be the API

### Release Notes

> - The project MUST provide, in each release, release notes that are a human-readable summary of major changes in that release to help users determine if they should upgrade and what the upgrade impact will be. The release notes MUST NOT be the raw output of a version control log (e.g., the "git log" command results are not release notes). Projects whose results are not intended for reuse in multiple locations (such as the software for a single website or service) AND employ continuous delivery MAY select "N/A". {N/A justification} {Met URL} [[release_notes](https://www.bestpractices.dev/en/criteria#0.release_notes)]
> - The release notes MUST identify every publicly known run-time vulnerability fixed in this release that already had a CVE assignment or similar when the release was created. This criterion may be marked as not applicable (N/A) if users typically cannot practically update the software themselves (e.g., as is often true for kernel updates). This criterion applies only to the project results, not to its dependencies. If there are no release notes or there have been no publicly known vulnerabilities, choose N/A. {N/A justification} [[release_notes_vulns](https://www.bestpractices.dev/en/criteria#0.release_notes_vulns)]

Release notes should serve as a guide for users, outlining what has changed and the associated impacts. Here’s a good structure to work from:

* Release Name - A brief description of the key aspects of this release
* Breaking Changes - Any changes for users that could break during an upgrade, including API changes or dependencies.
* Known Issues - Identify any known issues with the release users should be aware of; best practice is to point to a specific issue that is tracking the issue. 
* Key Changes - Other key changes for users to be aware of, including any security issues fixed along with the relevant CVEs
* Other Changes - List of all other changes.

This should be human-readable, point to the relevant issues/PRs, and, as stated abov,e not just be a dump of `git log`.

### Roadmap

> - The project MUST have a documented roadmap that describes what the project intends to do and not do for at least the next year. {Met URL} [[documentation_roadmap](https://www.bestpractices.dev/en/criteria#1.documentation_roadmap)]

A roadmap is a key document that helps downstream users understand the project's priorities and planned features. Roadmaps can be adjusted over time, but documenting them at least gives downstream users a sense of the direction, and also helps the TSC and maintainers stay aligned. Some ways to do this include…

* GitHub Project board
* A `ROADMAP.md` or similar wiki page. The key is that this should be an open document that anyone can get access to.

It is advised not to define the roadmap solely in an annual review presentation or other presentations made to the larger community. These presentations, as their name suggests, are immutable and also challenging to discover.

### Quick Start guide

> - The project MUST provide a "quick start" guide for new users to help them quickly do something with the software. {N/A justification} {Met URL} [[documentation_quick_start](https://www.bestpractices.dev/en/criteria#1.documentation_quick_start)]

A quick start guide is an essential part of the project’s documentation, as it ensures that the initial experience for an end-user gives them the impression that the project is of high quality. If an end-user cannot get through the quick start guide, they will quickly move on to the next project.

Key elements of a quick start guide:

* How to install with the basic options. This might be pointing to a package repository or app store packaging of the project, which would avoid having the user set up a build environment.
* A simple use case demonstrating the project's primary functionality and capabilities.

## Contributing Guidelines

### Core Contribution Guidelines

> - The project website MUST provide information on how to: obtain, provide feedback (as bug reports or enhancements), and contribute to the software. [[interact](https://www.bestpractices.dev/en/criteria#0.interact)]
> - The information on how to contribute MUST explain the contribution process (e.g., are pull requests used?) {Met URL} [[contribution](https://www.bestpractices.dev/en/criteria#0.contribution)]
> - The information on how to contribute SHOULD include the requirements for acceptable contributions (e.g., a reference to any required coding standard). {Met URL} [[contribution_requirements](https://www.bestpractices.dev/en/criteria#0.contribution_requirements)]
> - The project MUST identify the specific coding style guides for the primary languages it uses, and require that contributions generally comply with it. {N/A justification} {Met URL} [[coding_standards](https://www.bestpractices.dev/en/criteria#1.coding_standards)]
> - The project MUST document its code review requirements, including how code review is conducted, what must be checked, and what is required to be acceptable. {N/A justification} {Met URL} [[code_review_standards](https://www.bestpractices.dev/en/criteria#2.code_review_standards)]
> - The project MUST provide a process for users to submit bug reports (e.g., using an issue tracker or a mailing list). {Met URL} [[report_process](https://www.bestpractices.dev/en/criteria#0.report_process)]
> - The project MUST provide a way for potential developers to quickly install all the project results and support environment necessary to make changes, including the tests and test environment. This MUST be performed with a commonly-used convention. {N/A justification} {Met justification} [[installation_development_quick](https://www.bestpractices.dev/en/criteria#1.installation_development_quick)]

The best practice is to either outline contribution guidelines in the `README` file or a separate `CONTRIBUTING` file. This file should have these elements.

* Thanking the potential contributor for being interested in contributing to the project
* Pointing to how to setup the development or test environment (which could be in a `BUILD` file or in the `README` file)
* Defining the coding style used ( which ideally should align with a standard style for the given language, which means you could just point to where that is documented ).
* Outlining the legal requirements ( DCO, CLA, copyright notices )

Some examples around the Linux Foundation projects:

- [OpenEXR](https://github.com/AcademySoftwareFoundation/openexr/blob/main/CONTRIBUTING.md)
- [Zowe](https://docs.zowe.org/stable/contribute/roadmap-contribute/)
- [Kubeflow](https://www.kubeflow.org/docs/about/contributing/)

### Test Policy

> - The project MUST have a formal written policy that as major new functionality is added, tests for the new functionality MUST be added to an automated test suite. {N/A justification} {Met justification} [[test_policy_mandated](https://www.bestpractices.dev/en/criteria#1.test_policy_mandated)]
> - The project MUST include, in its documented instructions for change proposals, the policy that tests are to be added for major new functionality. {N/A justification} {Met justification} [[tests_documented_added](https://www.bestpractices.dev/en/criteria#1.tests_documented_added)]

Most of the time you will reference the general "new functionality must have tests" in your contributing guidelines.

### Good First Issues

> - The project MUST clearly identify small tasks that can be performed by new or casual contributors. {Met URL} [[small_tasks](https://www.bestpractices.dev/en/criteria#2.small_tasks)]

The `good first issue` label on GitHub is a standard label used by open-source projects to identify issues that are particularly suitable for new contributors. These issues are typically:
- Approachable: They require minimal prior knowledge of the project's codebase or complex technical skills.
- Well-defined: The task is clearly described, often with steps to reproduce a bug or implement a small feature.
- Mentored: Project maintainers are often willing to provide extra guidance and support to new contributors working on these issues.
Purpose of the "good first issue" label:
- Lowering the barrier to entry: It helps individuals new to open source or a specific project find a starting point for contributions.
- Encouraging engagement: It fosters a welcoming environment for newcomers, promoting community growth and participation.
- Streamlining contributions: By clearly identifying easy-to-tackle tasks, it simplifies the process of finding suitable work for new contributors.

As a bonus, many tools out there crawl GitHub repositories for `good first issue` issues, so this can give your project greater exposure to potential open source contributors out there.

## Security

> - The project MUST publish the process for reporting vulnerabilities on the project site. {Met URL} [[vulnerability_report_process](https://www.bestpractices.dev/en/criteria#0.vulnerability_report_process)]
> - The project MUST document what the user can and cannot expect in terms of security from the software produced by the project (its "security requirements"). {N/A allowed} {Met URL} [[documentation_security](https://www.bestpractices.dev/en/criteria#1.documentation_security)]
> - The project MUST provide an assurance case that justifies why its security requirements are met. The assurance case MUST include: a description of the threat model, clear identification of trust boundaries, an argument that secure design principles have been applied, and an argument that common implementation security weaknesses have been countered. {Met URL} [[assurance_case](https://www.bestpractices.dev/en/criteria#1.assurance_case)]

There are several guides from the OpenSSF projects should leverage:

- [Guide to implementing a coordinated vulnerability disclosure process for open source projects](https://github.com/ossf/oss-vulnerability-guide/blob/main/maintainer-guide.md)
- [Concise Guide for Developing More Secure Software](https://best.openssf.org/Concise-Guide-for-Developing-More-Secure-Software)
- [Systems Engineering and Assurance Modeling (SEAM)](https://modelbasedassurance.org/seamdoc/docs/chapter5/)

## Developer Docs

> - The project MUST provide reference documentation that describes the external interface (both input and output) of the software produced by the project. {N/A justification} [[documentation_interface](https://www.bestpractices.dev/en/criteria#0.documentation_interface)]
> - The project MUST include documentation of the architecture (aka high-level design) of the software produced by the project. If the project does not produce software, select "not applicable" (N/A). {N/A justification} {Met URL} [[documentation_architecture](https://www.bestpractices.dev/en/criteria#1.documentation_architecture)]

Reference documentation often will follow one of the establish interface development documentation tools, such as...

- OpenAPI, for API documents
- Doxygen, for inline code comments to turn them into documentation; this is great for general SDK and defining public interfaces in code.

For high level architecture documentation, these generally take the form of visual modeling, which for simple cases can be done in markdown combined with mermaid. For more complex cases, look towards something like Archi which can be used for defining multiple layers of architecture.

## Governance and Processes

> - The project MUST clearly define and document its project governance model (the way it makes decisions, including key roles). {Met URL} [[governance](https://www.bestpractices.dev/en/criteria#1.governance)]
> - The project MUST adopt a code of conduct and post it in a standard location. {Met URL} [[code_of_conduct](https://www.bestpractices.dev/en/criteria#1.code_of_conduct)]
> - The project MUST clearly define and publicly document the key roles in the project and their responsibilities, including any tasks those roles must perform. It MUST be clear who has which role(s), though this might not be documented in the same way. {Met URL} [[roles_responsibilities](https://www.bestpractices.dev/en/criteria#1.roles_responsibilities)]

The [LF Energy TSC repository template](https://github.com/lf-energy/tsc-template) has a number of templates projects can use.

## Keeping Documentation up to date

> - The project MUST make an effort to keep the documentation consistent with the current version of the project results (including software produced by the project). Any known documentation defects making it inconsistent MUST be fixed. If the documentation is generally current, but erroneously includes some older information that is no longer true, just treat that as a defect, then track and fix as usual. {N/A justification} {Met justification} [[documentation_current](https://www.bestpractices.dev/en/criteria#1.documentation_current)]

Some ideas here:

- Have the documentation in the same repo as the code, so that as new changes are added the documentation can be added at the same time ( bonus points - your documentation is easily versioned using this approach ).
- Include in your release process a documentation review.
