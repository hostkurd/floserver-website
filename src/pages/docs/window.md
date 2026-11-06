---
layout: ../../layouts/Docs.astro
title: The projects window
section: Using the app
description: 'The FloServer projects window, the project panel and its tabs, shared sites, the database tab and the right-click menu.'
lead: 'Everything you do day to day happens here.'
---

## At a glance {#overview}

<figure><div class="shot-marks"><img src="/img/docs/window-general.png" width="1106" height="713" alt="The FloServer projects window: four projects and the Shared sites row on the left, the my-shop panel on its General tab on the right"><span class="m" aria-hidden="true" style="left:2.0%;top:16.5%">1</span><span class="m" aria-hidden="true" style="left:22.6%;top:18.1%">2</span><span class="m" aria-hidden="true" style="left:37.7%;top:10.7%">3</span><span class="m" aria-hidden="true" style="left:59.9%;top:10.7%">4</span><span class="m" aria-hidden="true" style="left:89.2%;top:13.5%">5</span><span class="m" aria-hidden="true" style="left:96.6%;top:13.5%">6</span><span class="m" aria-hidden="true" style="left:9.3%;top:85.8%">7</span><span class="m" aria-hidden="true" style="left:30.0%;top:98.0%">8</span><span class="m" aria-hidden="true" style="left:84.6%;top:98.0%">9</span><span class="m" aria-hidden="true" style="left:66.3%;top:24.4%">10</span><span class="m" aria-hidden="true" style="left:82.3%;top:31.4%">11</span><span class="m" aria-hidden="true" style="left:78.1%;top:36.9%">12</span><span class="m" aria-hidden="true" style="left:74.3%;top:44.2%">13</span><span class="m" aria-hidden="true" style="left:78.8%;top:75.7%">14</span><span class="m" aria-hidden="true" style="left:84.1%;top:85.0%">15</span></div><figcaption>The numbers match the lists below.</figcaption></figure>

## The project list {#list}

<ol class="legend"><li><span class="n" aria-hidden="true">1</span><span><span class="visually-hidden">1. </span><strong>Switch</strong>: Turn a project on or off.</span></li><li><span class="n" aria-hidden="true">2</span><span><span class="visually-hidden">2. </span><strong>Address</strong>: Open the project in your browser at its .localhost address.</span></li><li><span class="n" aria-hidden="true">3</span><span><span class="visually-hidden">3. </span><strong>Versions</strong>: What the project uses, such as PHP 8.5.12, MariaDB 11.4 and nginx.</span></li><li><span class="n" aria-hidden="true">4</span><span><span class="visually-hidden">4. </span><strong>State</strong>: On, Sleeping (no requests for a while; wakes on the next one), or Off.</span></li><li><span class="n" aria-hidden="true">5</span><span><span class="visually-hidden">5. </span><strong>New project</strong>: Start from a template, an existing folder or a backup.</span></li><li><span class="n" aria-hidden="true">6</span><span><span class="visually-hidden">6. </span><strong>Settings</strong>: Runtimes, PHP, Ports &amp; HTTPS, Database, Apache, Folders, Shared sites, General.</span></li></ol>

## Shared sites and the status bar {#shared}

<ol class="legend"><li><span class="n" aria-hidden="true">7</span><span><span class="visually-hidden">7. </span><strong>Shared sites</strong>: Every folder in the www folder at localhost, with its own PHP and web server, like htdocs.</span></li><li><span class="n" aria-hidden="true">8</span><span><span class="visually-hidden">8. </span><strong>Status bar</strong>: How many projects are running and sleeping, and the web server's ports.</span></li><li><span class="n" aria-hidden="true">9</span><span><span class="visually-hidden">9. </span><strong>Service memory</strong>: What FloServer's background service is using right now.</span></li></ol>

The Shared sites row has its own switch, a **localhost** link, **Open folder** and a settings button. Its settings are in [Settings → Shared sites](/docs/settings/#shared).

## The project panel {#panel}

Click a project to open its panel. Close it with the ✕ at the top right.

<ol class="legend"><li><span class="n" aria-hidden="true">10</span><span><span class="visually-hidden">10. </span><strong>Tabs</strong>: General, PHP, Database and Log. A project only shows the tabs it uses.</span></li><li><span class="n" aria-hidden="true">11</span><span><span class="visually-hidden">11. </span><strong>Quick buttons</strong>: Open in browser, open the folder, open a terminal, open in your code editor.</span></li><li><span class="n" aria-hidden="true">12</span><span><span class="visually-hidden">12. </span><strong>Project folder</strong>: Where the project's files are.</span></li><li><span class="n" aria-hidden="true">13</span><span><span class="visually-hidden">13. </span><strong>Versions</strong>: PHP, Database, Web server, Node.js and Python. Saved in floserver.json.</span></li><li><span class="n" aria-hidden="true">14</span><span><span class="visually-hidden">14. </span><strong>Keep running</strong>: Off: the project sleeps after 10 minutes without requests.</span></li><li><span class="n" aria-hidden="true">15</span><span><span class="visually-hidden">15. </span><strong>Remove from FloServer…</strong>: Forget the project in FloServer.</span></li></ol>

### The PHP tab

This project's own PHP extensions and php.ini values, on top of the defaults in [Settings → PHP](/docs/settings/#php). They're kept in its [floserver.json](/docs/floserver-json/).

### The Database tab {#database}

The project's own database and user, at 127.0.0.1:3306. **Copy .env lines** puts the connection settings on your clipboard; **Open in phpMyAdmin** opens the database in your browser.

<figure><img src="/img/docs/window-database.png" width="1106" height="713" loading="lazy" alt="The project panel on the Database tab, showing database my_shop with Copy .env lines and Open in phpMyAdmin buttons"><figcaption>The Database tab.</figcaption></figure>

### The Log tab

Requests and messages from the project as they come in.

## Right-click menu {#menu}

Right-click a project for everything you can do with it:

<figure><img src="/img/docs/window-menu.png" width="1106" height="713" loading="lazy" alt="The right-click menu on a project, with Open in browser, Open folder, Open terminal, Open in VS Code, Copy address, Turn off, Keep running, Rename, Back up as zip, Restore from backup and Remove from FloServer"><figcaption>The right-click menu on python-app.</figcaption></figure>

- **Open in browser**, **Open folder**, **Open terminal**, **Open in VS Code**, **Copy address**
- **Turn off** and **Keep running**
- **Rename…**, **Back up as zip…**, **Restore from backup…** (see [Backup, restore and rename](/docs/backup/))
- **Remove from FloServer…**
