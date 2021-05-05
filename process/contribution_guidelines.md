**DEPRECATED - current guidelines at https://wiki.lfenergy.org/display/HOME/Contribution+and+Compliance+Guidelines+for+LF+Energy+Foundation+hosted+projects**

# Contribution Guidelines for LF Energy Foundation hosted projects

- [Two-factor authentication (2FA)](#two-factor-authentication-2fa)
- [License](#license)
  - [Code License identification](#code-license-identification)
- [Copyright Notices](#copyright-notices)
  - [Example of the SPDX short-form license identifiers and copyright notice in a source file](#example-of-the-spdx-short-form-license-identifiers-and-copyright-notice-in-a-source-file)
- [Contribution sign off](#contribution-sign-off)
  - [Useful tools to make doing DCO signoffs easier](#useful-tools-to-make-doing-dco-signoffs-easier)
  - [Signoff for commits where the DCO signoff was missed](#signoff-for-commits-where-the-dco-signoff-was-missed)
  - [Handling DCO errors using GitHub website commits](#handling-dco-errors-using-github-website-commits)

This document captures the general guidelines for contributing to open source projects hosted by LF Energy Foundation.

Note that each hosted project may adopt thier own guidelines, which would supercede these provisions in the case of conflict.

## Two-factor authentication (2FA)

To enable stronger security for hosted projects, LF Energy Foundation TAC requires all hosted projects to require Two-factor authentication (2FA) for accessing repos. Instructions for GitHub are below...

- [Configuring 2FA for your GitHub account](https://docs.github.com/en/github/authenticating-to-github/configuring-two-factor-authentication)
- [Accessing GitHub using 2FA](https://docs.github.com/en/github/authenticating-to-github/accessing-github-using-two-factor-authentication)
- [Recovering your account if you lose your 2FA credentials](https://docs.github.com/en/github/authenticating-to-github/recovering-your-account-if-you-lose-your-2fa-credentials)

## License

Generally open source projects at LF Energy Foundation that have not previously selected a license leverage the [Apache License, Version 2.0] for their codebase, a [Community Data License Agreement (CDLA) license] for any data sets, and the [Creative Commons Attribution 4.0 International License] for all documentation and non-code assets. These licenses are widely used and understood by both developers and organizations alike, providing flexibility for downstream usage and patent protection for those contributing code.

### Code License identification

Each repository must contain a license file. Include the plain-text version of the license as a LICENSE file in the top-level directory of the repostiory.

All source files need to include a header to clearly show the license. LF Energy Foundation recommends the use of [SPDX short-form license identifiers](https://spdx.org/ids) in source code files, which vastly reduces errors in copy and pasting license text and enables the headers to be machine readable. Example of the use of SPDX short-form license identifiers can be found at https://spdx.org/ids.

## Copyright Notices

LF Energy Foundation TAC has been recommending that contributors to a new project establish a common format for copyright notices in their own code. This can help minimize compliance burdens that might otherwise require downstream distributors to reproduce a large number of variations in years, entity names and formats for notices. We recommend a common copyright notice in a form similar to the following, which does not refer to years or specific contributing entities:

```
Copyright Contributors to the __________ Project.
```

For clarity, we would not recommend removing a third party’s license or copyright notice in any circumstance. If a third party dependency is added to a repository, its license and copyright notices should be preserved and should not be modified or removed.

### Example of the SPDX short-form license identifiers and copyright notice in a source file

Assumes [Apache License, Version 2.0] and Foo project name.

```
# SPDX-License-Identifier: Apache-2.0
# Copyright Contributors to the Foo Project.
```

## Contribution sign off

Ensuring a clean code pedigree and lineage is critical to downstream adoption of open source code in industry.

LF Energy Foundation requires the use of the [Developer’s Certificate of Origin 1.1 (DCO)](https://developercertificate.org/), which is the same mechanism that the [Linux® Kernel](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/process/submitting-patches.rst#n416) and many other communities use to manage code contributions. The DCO is considered one of the simplest tools for sign offs from contributors as the representations are meant to be easy to read and indicating signoff is done as a part of the commit message.

Here is an example Signed-off-by line, which indicates that the submitter accepts the DCO:

`Signed-off-by: John Doe <john.doe@example.com>`

You can include this automatically when you commit a change to your local git repository using <code>git commit -s</code>.

### Useful tools to make doing DCO signoffs easier

There are a number of great tools out there to manage DCO signoffs for developers to make it much easier to do signoffs.

- DCO command line tool, which let's you do a single signoff for an entire repo ( https://github.com/coderanger/dco )
- GitHub UI integrations for adding the signoff automatically ( https://github.com/scottrigby/dco-gh-ui )
  - Chrome - https://chrome.google.com/webstore/detail/dco-github-ui/onhgmjhnaeipfgacbglaphlmllkpoijo
  - Firefox - https://addons.mozilla.org/en-US/firefox/addon/scott-rigby/?src=search
  
Additionally, it is possible to use shell scripting to automatically apply signing. Here is an example for bash, to be put into a .bashrc file:

```
git() {
    if [[ $1 == "commit" ]]; then
        shift
        echo "Executing git commit -s $@"
        command git commit -s "$@"
    else
        command git "$@"
    fi
}
```

### Signoff for commits where the DCO signoff was missed

When bringing in a code repository for the first time, or commits done before the DCO checks are enabled, there would be a series of commits that don't include the sign-off statement. You can retroactively signoff commits you've made by make a commit with your DCO signoff that contains a new text file ( suggested name is past_commits.txt ) with the following contents:

````
The following commits were made pursuant to the Developer Certificate of Origin, even though a Signed-off-by: was not included in the commit message.

<COMMIT HASH> <COMMIT MSG>
...
````

Each user who has made the past commits should have thier own <code>Signed-off-by:</code> line in the commit message.

This process can be automated using the [DCO Org Check script](https://github.com/jmertic/dco-org-check).

### Handling DCO errors using GitHub website commits

The [Probot: DCO](https://github.com/probot/dco) app requires that the email address and name specifyed in the DCO Signoff match that of the current infortmation from the user making the commit. Generally this is handled automatically when using a local git client, but when making contributions from the GitHub website directly this needs to be aligned manually. 

If you are using one of the recommended [GitHub UI integrations for adding the signoff automatically]( https://github.com/scottrigby/dco-gh-ui), you will want to ensure that the name and email listed there match that which is in your GitHub profile.

Examples of the UI elements to match are below

DCO GitHub UI Configuration
![](assets/dco-github-ui.png)

GitHub user profile (https://github.com/settings/profile)
![](assets/github-settings-profile.png)
