---
layout: ../../layouts/Docs.astro
title: Settings
section: Settings
description: 'Every FloServer settings page: runtimes, PHP, Apache, folders, general, shared sites, ports and HTTPS.'
lead: 'Open Settings with the gear button at the top right of the projects window.'
---

## The sections {#sections}

<div class="table-box stack" role="region" aria-label="Settings sections"><table>
<tr><td><strong>General</strong></td><td>Language, theme, start with Windows, code editor, updates (Check now), licences and Remove FloServer…</td></tr>
<tr><td><strong>Runtimes</strong></td><td>Download and remove versions, and choose the default for new projects.</td></tr>
<tr><td><strong>PHP</strong></td><td>Extensions and php.ini values for each PHP version.</td></tr>
<tr><td><strong>Ports&nbsp;&amp;&nbsp;HTTPS</strong></td><td>Which ports the web server uses, HTTPS for projects and shared sites, and FloServer's certificate authority.</td></tr>
<tr><td><strong>Database</strong></td><td>The MariaDB server the projects' databases run on.</td></tr>
<tr><td><strong>Apache</strong></td><td>Apache's modules and your own httpd.conf lines.</td></tr>
<tr><td><strong>Folders</strong></td><td>The projects folder, the www folder, FloServer's data folder, and clean up.</td></tr>
<tr><td><strong>Shared&nbsp;sites</strong></td><td>The www folder at localhost: its PHP version, web server and database.</td></tr>
</table></div>

## Runtimes {#runtimes}

Each runtime lists its versions: the default, what uses it, and **Download** or **Remove**. A version something still uses can't be removed. **Default for new projects** can be a fixed version or **Newest installed**. Nothing is checked online until you click **Check for updates**.

<figure><img src="/img/docs/settings-runtimes.png" width="1026" height="713" loading="lazy" alt="Settings on the Runtimes page: PHP 8.5.12 installed as the default, 8.4, 8.3 and 8.2 to download; MariaDB 11.8 and 11.4; nginx and Apache"><figcaption>Settings → Runtimes.</figcaption></figure>

## PHP {#php}

The defaults for every project and shared sites on one PHP version. Pick the version at the top right, tick the extensions you want, and set the php.ini values people change most. **Add your own php.ini lines…** for anything else; your lines win over the fields and stay after updates. **Show the final php.ini** shows the result. opcache is always on.

A project can change these for itself in its [PHP tab](/docs/window/#panel).

<figure><img src="/img/docs/settings-php.png" width="1026" height="713" loading="lazy" alt="Settings on the PHP page: extension tick boxes for PHP 8.5.12 and php.ini fields such as memory_limit and upload_max_filesize"><figcaption>Settings → PHP. Saving restarts PHP for the projects on it in under a second.</figcaption></figure>

## Apache {#apache}

The shared Apache serves projects that use .htaccess, behind nginx. Turn its modules on or off; ticked grey ones are FloServer's own and stay on. **Add your own httpd.conf lines…** adds lines at the end of the config; lines that would change where Apache listens, its files or modules, and `<VirtualHost>`, are left out.

<figure><img src="/img/docs/settings-apache.png" width="1026" height="713" loading="lazy" alt="Settings on the Apache page: a grid of Apache modules with tick boxes and the httpd.conf section"><figcaption>Settings → Apache.</figcaption></figure>

## Folders {#folders}

- **Projects folder**: where new projects are made. Projects you already have stay where they are.
- **www folder for shared sites**: every folder in it opens at `localhost/<folder>/`.
- **FloServer's data folder**: runtimes, logs, databases and settings. It can't be moved.
- **Clean up**: **Clear old logs** and **Remove leftover downloads**. Installed runtimes, your projects, databases, settings, certificates and passwords are never removed.

<figure><img src="/img/docs/settings-folders.png" width="1026" height="713" loading="lazy" alt="Settings on the Folders page: projects folder, www folder, data folder and the clean up buttons"><figcaption>Settings → Folders.</figcaption></figure>

## General {#general}

Language, theme, **Start FloServer when I sign in to Windows**, and the code editor the quick buttons open (Automatic picks VS Code). **Check now** looks for [updates](/docs/updates/); FloServer also checks once a day and asks before updating. Licences, and [Remove FloServer…](/docs/remove/), are here too.

<figure><img src="/img/docs/settings-general.png" width="1026" height="713" loading="lazy" alt="Settings on the General page: language, theme, start with Windows, code editor, updates, licences and Remove FloServer"><figcaption>Settings → General.</figcaption></figure>

## Shared sites {#shared}

Like XAMPP's htdocs or Laragon's www: every PHP or HTML folder in the www folder opens at `localhost/<folder>/`. Choose their PHP version, database and web server (Apache, so .htaccess works, or nginx). A folder that needs its own versions, or a Node.js or Python app, should be made a project.

<figure><img src="/img/docs/settings-shared.png" width="1026" height="713" loading="lazy" alt="Settings on the Shared sites page: www folder, PHP, database and web server"><figcaption>Settings → Shared sites.</figcaption></figure>

## Ports & HTTPS {#ports}

Where FloServer's web server listens, and HTTPS for your projects. Changes take effect at once.

### Web ports

- **Automatic** (default): 80 and 443 when they're free, else 8080 and 8443.
- **80 and 443**: addresses without a port, such as `https://shop.localhost`.
- **8080 and 8443**: addresses with the port, such as `https://shop.localhost:8443`.
- **Other ports**: two port numbers of your own.

The page shows which ports are in use now.

### HTTPS

- **HTTPS for projects**: projects open at `https://<name>.localhost`, and their http addresses go there too.
- **Shared sites over HTTPS**: only `https://localhost/<folder>/` gets HTTPS; `<folder>.localhost` stays http.

HTTPS starts once Windows trusts FloServer's certificate authority.

### FloServer's certificate authority {#ca}

If there isn't one yet, **Trust** makes it and adds it to Windows (the same as `flo trust`). It only works for localhost addresses, so it can't be misused for real websites.

<figure><img src="/img/docs/settings-ports.png" width="1026" height="713" loading="lazy" alt="Settings on the Ports and HTTPS page: web ports set to Automatic, HTTPS for projects on, shared sites over HTTPS off, and a Trust button for the certificate authority"><figcaption>Settings → Ports &amp; HTTPS. Here the certificate authority isn't trusted yet, so projects open on http.</figcaption></figure>

## Database {#database}

The MariaDB server that every project's database runs on, on 127.0.0.1:3306. Each project's own database is in its [Database tab](/docs/window/#database).
