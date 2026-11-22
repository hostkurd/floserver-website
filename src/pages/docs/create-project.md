---
layout: ../../layouts/Docs.astro
title: Create a project
description: 'Create a FloServer project from a template, an existing folder or a backup.'
lead: 'Click <strong>+ New project</strong> at the top of the projects window. It takes three steps: <strong>Template</strong>, <strong>Name and folder</strong>, <strong>Versions</strong>.'
---

## Pick a template {#templates}

<figure><img src="/img/docs/new-project.png" width="1106" height="800" loading="lazy" alt="The New project screen with its template cards: PHP app, FloCMS, Laravel, WordPress, Node app, Python app, Static site, Database only and the two MCP server templates"><figcaption>Each card shows what the template sets up.</figcaption></figure>

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

## A project you already have {#existing}

- **Add an existing folder…** turns a folder into a project. FloServer reads its [floserver.json](/docs/floserver-json/) if it has one, or picks versions for it. From a terminal: `flo add` in that folder.
- **From a backup…** makes a new project from a FloServer backup zip. See [Backup and restore](/docs/backup/#new-from-backup).
