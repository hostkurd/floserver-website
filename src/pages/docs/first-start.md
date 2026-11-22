---
layout: ../../layouts/Docs.astro
title: First start
description: 'The three steps the first time FloServer opens: language, runtimes and trusting local HTTPS.'
lead: 'The first time FloServer opens, it takes three short steps: <strong>Language</strong>, <strong>Runtimes</strong> and <strong>Ready</strong>.'
---

## 1. Language {#language}

Pick **Same as Windows**, English, <span lang="ar" dir="rtl">العربية</span> or <span lang="ckb" dir="rtl">کوردی</span> (Sorani). The window changes at once. You can change it later in [Settings → General](/docs/settings/general/).

<figure><img src="/img/docs/first-run-language.png" width="960" height="640" loading="lazy" style="max-width:760px" alt="The Welcome to FloServer screen with a choice of language"><figcaption>Step 1: language.</figcaption></figure>

## 2. Runtimes {#runtimes}

Choose what to download now: PHP, MariaDB, Node.js, Composer and Mailpit are ticked; others, such as MySQL, PostgreSQL, Bun, Deno, Python, Redis (Garnet), Apache, phpMyAdmin and Adminer, are there to tick. nginx is always included. Every file is checked against FloServer's signed list before it's used. You can go on to the next step while the downloads keep going, even if you close the window.

Other versions, and removing these, are in [Settings → Runtimes](/docs/settings/runtimes/). A project that needs something missing offers to download it.

## Trust local HTTPS {#https}

While the files download, Windows asks once whether to trust FloServer's certificate. Choose **Yes** for https without warnings. It only works for `.localhost` addresses and needs no admin rights.

If you choose **No**, projects open on http and nothing else changes. You can trust it later in [Settings → Ports & HTTPS](/docs/settings/ports-https/), or with `flo trust`.

<figure><img src="/img/docs/first-run-downloading.png" width="960" height="640" loading="lazy" style="max-width:760px" alt="The Downloading screen with nginx, PHP, MariaDB, Node.js and Composer, and the Windows Security Warning asking to install the FloServer local CA certificate"><figcaption>Step 2: downloading, with Windows asking to trust the certificate.</figcaption></figure>

## 3. Ready {#ready}

A summary of what's installed, whether HTTPS is trusted, and where new projects go (you can change it). Then **Create your first project** or **Add an existing folder**.

<figure><img src="/img/docs/first-run-ready.png" width="960" height="640" loading="lazy" style="max-width:760px" alt="The FloServer is ready screen with the runtimes, HTTPS and new projects summary and two buttons"><figcaption>Step 3: ready.</figcaption></figure>
