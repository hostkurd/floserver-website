---
layout: ../../../layouts/Docs.astro
title: Folders
description: 'FloServer Settings → Folders: the projects folder, the www folder, the data folder and clean up.'
lead: 'Settings → Folders: where FloServer makes projects, serves shared sites from and keeps its own files.'
---

## The folders {#folders}

- **Projects folder**: where new projects are made. Projects you already have stay where they are.
- **www folder for shared sites**: every folder in it opens at `localhost/<folder>/`. It's the same setting as in [Shared sites](/docs/shared-sites/).
- **FloServer's data folder**: runtimes, logs, databases and settings. It can't be moved, and the page shows how much space it uses.

<figure><img src="/img/docs/settings-folders.png" width="1026" height="843" loading="lazy" alt="Settings on the Folders page: projects folder, www folder, data folder and the clean up buttons"><figcaption>Settings → Folders.</figcaption></figure>

## Clean up {#cleanup}

- **Clear old logs** deletes older copies of the web servers', PHP's, Node.js' and Python's logs, and empties a log nothing has written to for a day. Each project's Log tab is kept.
- **Remove leftover downloads** deletes downloads that were cut off, and installs and new projects that didn't finish.

Never removed: installed runtimes, your projects, databases, settings, certificates and passwords.
