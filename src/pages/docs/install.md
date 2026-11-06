---
layout: ../../layouts/Docs.astro
title: Install and first start
section: Getting started
description: 'Download and install FloServer, choose your language and runtimes, trust local HTTPS and create your first project.'
lead: 'From download to your first project at its own <code>.localhost</code> address.'
---

## 1. Download and run the setup

Get `FloServer-Setup-0.1.0.exe` from the [Download page](/download/). It needs Windows 10 or 11, 64-bit, and installs for your user without admin rights.

<div class="note" role="note"><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.5l8 14H2z" stroke="#8A5A00" stroke-width="1.6" fill="none" stroke-linejoin="round"/><path d="M10 8v4M10 14.2v.3" stroke="#8A5A00" stroke-width="1.8" stroke-linecap="round"/></svg><p>The beta isn't code-signed yet. If Windows shows "Windows protected your PC", click <strong>More info</strong>, then <strong>Run anyway</strong>.</p></div>

## 2. First start {#first-start}

FloServer opens with three short steps: **Language**, **Runtimes** and **Ready**.

### Language

Pick **Same as Windows**, English, العربية or کوردی (Sorani). The window changes at once. You can change it later in [Settings → General](/docs/settings/#general).

<figure><img src="/img/docs/first-run-language.png" width="960" height="640" loading="lazy" style="max-width:760px" alt="The Welcome to FloServer screen with a choice of language"><figcaption>Step 1: language.</figcaption></figure>

### Runtimes

Choose what to download now: PHP, MariaDB, Node.js, Composer and others. nginx is always included. Every file is checked against FloServer's signed list. You can go on to the next step while the downloads keep going, even if you close the window.

### Trust local HTTPS {#https}

While the files download, Windows asks once whether to trust FloServer's certificate. Choose **Yes** for https without warnings. If you choose **No**, projects open on http and nothing else changes; you can trust it later in [Settings → Ports & HTTPS](/docs/settings/#ports), or with `flo trust`.

<figure><img src="/img/docs/first-run-downloading.png" width="960" height="640" loading="lazy" style="max-width:760px" alt="The Downloading screen with nginx, PHP, MariaDB, Node.js and Composer, and the Windows Security Warning asking to install the FloServer local CA certificate"><figcaption>Step 2: downloading, with Windows asking to trust the certificate.</figcaption></figure>

### Ready

A summary of what's installed, whether HTTPS is trusted, and where new projects go (you can change it). Then **Create your first project** or **Add an existing folder**.

<figure><img src="/img/docs/first-run-ready.png" width="960" height="640" loading="lazy" style="max-width:760px" alt="The FloServer is ready screen with the runtimes, HTTPS and new projects summary and two buttons"><figcaption>Step 3: ready.</figcaption></figure>

## 3. Create a project {#project}

Click **+ New project**. It takes three steps: **Template**, **Name and folder**, **Versions**.

<figure><img src="/img/docs/new-project.png" width="1106" height="713" loading="lazy" alt="The New project screen with eight template cards: PHP app, FloCMS, Laravel, WordPress, Node app, Python app, Static site and Database only"><figcaption>Step 1: pick a template. Each card shows what it sets up.</figcaption></figure>

- **PHP app**: an empty PHP project with a public folder
- **FloCMS**: a FloCMS site; opens in FloCMS Studio
- **Laravel**: a new Laravel app through Composer
- **WordPress**: latest WordPress with its database ready
- **Node app**: a Node.js project; its dev server runs behind the project address
- **Python app**: a Python project with its own .venv
- **Static site**: HTML, CSS and JavaScript files served as they are
- **Database only**: a database and user, no website

Already have a project? Use **Add an existing folder…**, or **From a backup…** to start from a FloServer backup zip.

Next: [the projects window](/docs/window/).
