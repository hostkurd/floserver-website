---
layout: ../../layouts/Docs.astro
title: Create a project
description: 'Create a FloServer project from a template, an existing folder or a backup.'
lead: 'Click <strong>+ New project</strong> at the top of the projects window. It takes three steps: <strong>Template</strong>, <strong>Name and folder</strong>, <strong>Versions</strong>.'
---

## Pick a template {#templates}

<figure><img src="/img/docs/new-project.png" width="1106" height="793" loading="lazy" alt="The New project screen with its template cards: PHP app, FloCMS, Laravel, WordPress, Node app, Python app, Static site, Database only and the two MCP server templates"><figcaption>Each card shows what the template sets up.</figcaption></figure>

| Template | What you get |
| --- | --- |
| **PHP app** | An empty PHP project with a public folder |
| **FloCMS** | A FloCMS site; opens in FloCMS Studio |
| **Laravel** | A new Laravel app through Composer |
| **WordPress** | Latest WordPress with its database ready |
| **Node app** | A Node.js project; its dev server runs behind the project address |
| **Python app** | A Python project with its own .venv, served at the project address |
| **Static site** | HTML, CSS and JavaScript files served as they are |
| **Database only** | A database and user, no website |
| **MCP server (Python)** | An MCP server for AI tools: FastAPI and the official SDK. See [AI coding tools](/docs/ai-tools/#templates) |
| **MCP server (PHP)** | An MCP server for AI tools with the official PHP SDK |

## Name, folder and versions {#name}

Give the project a name: it becomes its address, `https://<name>.localhost`. The names `phpmyadmin`, `adminer` and `mail` are kept for phpMyAdmin, Adminer and Mailpit's inbox. New projects go in the projects folder, which you can change in [Settings → Folders](/docs/settings/folders/). Then check the versions it will use: PHP, the database (MariaDB, MySQL or PostgreSQL), the JavaScript runtime (Node.js, Bun or Deno) and Python, as the template needs.

## If making a project is slow {#slow}

Templates that run Composer, such as Laravel and FloCMS, write thousands of files: the packages and their autoload files. Windows Defender scans each one as it's written, so making the project can take a while.

<figure><img src="/img/docs/new-project-making.png" width="1106" height="713" loading="lazy" alt="Making laravel…: the New project screen showing Composer's output while it creates a Laravel project"><figcaption>Making a Laravel project. Composer's output shows as it runs.</figcaption></figure>

<div class="note" role="note"><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.5l8 14H2z" stroke="#8A5A00" stroke-width="1.6" fill="none" stroke-linejoin="round"/><path d="M10 8v4M10 14.2v.3" stroke="#8A5A00" stroke-width="1.8" stroke-linecap="round"/></svg><p><strong>Important:</strong> add your projects folder to Windows Defender's exclusions, and making projects (and running <code>composer install</code> or <code>npm install</code> in them) is much quicker. Files in that folder are no longer scanned, so keep only your own code there.</p></div>

1. Find your projects folder in [Settings → Folders](/docs/settings/folders/), usually `C:\Users\<you>\FloServer\projects`.
2. Open **Windows Security** → **Virus & threat protection**.
3. Under **Virus & threat protection settings**, click **Manage settings**.
4. Under **Exclusions**, click **Add or remove exclusions** → **Add an exclusion** → **Folder**, and choose the projects folder.

## A project you already have {#existing}

- **Add an existing folder…** turns a folder into a project. FloServer reads its [floserver.json](/docs/floserver-json/) if it has one, or picks versions for it. From a terminal: `flo add` in that folder.
- **From a backup…** makes a new project from a FloServer backup zip. See [Backup and restore](/docs/backup/#new-from-backup).
