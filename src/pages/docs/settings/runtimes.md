---
layout: ../../../layouts/Docs.astro
title: Runtimes
description: 'FloServer Settings → Runtimes: download and remove PHP, MariaDB, Node.js, Python and web server versions.'
lead: 'Settings → Runtimes: the versions of PHP, MariaDB, Node.js, Python, the web servers and tools on this computer.'
---

## Versions {#versions}

Each runtime lists its versions: the default, what uses it, and **Download** or **Remove**. A version something still uses can't be removed until nothing needs it.

<figure><img src="/img/docs/settings-runtimes.png" width="1026" height="713" loading="lazy" alt="Settings on the Runtimes page: PHP 8.5.12 installed as the default, 8.4, 8.3 and 8.2 to download; MariaDB 11.8 and 11.4; nginx and Apache"><figcaption>Settings → Runtimes.</figcaption></figure>

## Default for new projects {#default}

For PHP and MariaDB, **default for new projects** can be a fixed version or **Newest installed**.

## Checking for new versions {#check}

The page says which list of versions it has and how long it's good for. Click **Check for updates** to fetch the newest list now. The list is signed, and every download is checked before it's used.

From the terminal: `flo runtimes`, `flo install php 8.5`, `flo uninstall php 8.5.12`.
