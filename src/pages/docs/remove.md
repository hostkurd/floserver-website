---
layout: ../../layouts/Docs.astro
title: Remove FloServer
description: 'How to uninstall FloServer, what is always removed and what you choose to keep.'
lead: 'From <strong>Settings → General → Remove FloServer…</strong>, or from Windows Settings → Apps.'
---

## Always removed {#always}

The programs, the Start menu shortcut, `flo` on your Path, Start with Windows, and FloServer's certificate (Windows asks you once).

## You choose {#choose}

- **Downloaded runtimes and caches** (ticked): PHP, MariaDB, Node.js, Python and the web servers. They can be downloaded again.
- **Databases** (not ticked): every project's database. This can't be undone.
- **The projects folder** (not ticked): moved to the Recycle Bin. Projects you added from other folders are never touched.

<figure><img src="/img/docs/settings-remove-dialog.png" width="478" height="378" loading="lazy" style="max-width:520px" alt="The Remove FloServer from this computer window with three Also delete tick boxes"><figcaption>From Settings → General. Sizes are examples.</figcaption></figure>

## From Windows Settings {#windows}

Windows Settings → Apps → FloServer → Uninstall opens FloServer's own uninstaller with the same choices, then shows what was kept.

<figure><img src="/img/docs/uninstall-choose.png" width="880" height="580" loading="lazy" style="max-width:760px" alt="The Remove FloServer uninstaller with the Always removed list and the Also delete choices"><figcaption>The uninstaller.</figcaption></figure>

<figure><img src="/img/docs/uninstall-done.png" width="880" height="580" loading="lazy" style="max-width:760px" alt="FloServer has been removed, with the kept databases and projects folders"><figcaption>Done, with what was kept.</figcaption></figure>
