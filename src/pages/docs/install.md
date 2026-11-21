---
layout: ../../layouts/Docs.astro
title: Install FloServer
description: 'Download and install FloServer on Windows 10 or 11, without admin rights.'
lead: 'FloServer installs for your Windows user, without admin rights.'
---

## What you need {#requirements}

- Windows 10 or Windows 11, 64-bit (x64)
- No admin rights
- Internet for the first runtime download

## Download and run the setup {#setup}

1. Get the setup from the [Download page](/download/).
2. Open it. It shows the licence, then installs FloServer for your user.

<div class="note" role="note"><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.5l8 14H2z" stroke="#8A5A00" stroke-width="1.6" fill="none" stroke-linejoin="round"/><path d="M10 8v4M10 14.2v.3" stroke="#8A5A00" stroke-width="1.8" stroke-linecap="round"/></svg><p>The beta isn't code-signed yet. If Windows shows "Windows protected your PC", click <strong>More info</strong>, then <strong>Run anyway</strong>.</p></div>

## What the setup changes {#changes}

FloServer puts its programs in `%LOCALAPPDATA%\Programs\FloServer`, and its runtimes, settings and databases in `%LOCALAPPDATA%\FloServer`. It adds its terminal commands to your user's Path. Section 6 of the [licence](/licence/#s6) lists every change.

## Next {#next}

When the setup is done, open FloServer and follow the [first start](/docs/first-start/).

## If FloServer is already installed {#installed}

The setup sees it and asks what to do:

- **Update to &lt;version&gt;**, with the setup's version, when yours is older. Your projects, databases and settings stay.
- **Repair**, when it's the same version: puts back any missing or damaged program files.
- **Remove FloServer**: opens FloServer's own uninstaller. See [Remove FloServer](/docs/remove/).

If the installed version is newer than the setup, it only offers to remove it.

FloServer also updates itself. See [Updates](/docs/updates/).
