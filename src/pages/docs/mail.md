---
layout: ../../layouts/Docs.astro
title: Mail (Mailpit)
description: 'FloServer catches every email your projects send with Mailpit, in a local inbox at mail.localhost. Nothing leaves your PC.'
lead: 'Mailpit catches every email your projects send, in an inbox at <code>mail.localhost</code>. Nothing leaves your PC.'
---

## Install it {#install}

Tick **Mailpit** on the first start, or install it in Settings → Mail or [Settings → Runtimes](/docs/settings/runtimes/). From the terminal: `flo install mailpit`.

## The inbox {#inbox}

Open `https://mail.localhost` in your browser, or click **Mail** in the status line at the bottom of the projects window. When new emails have come in, it says how many: **Mail · 2 new**.

With **Notices for new mail** on, a short notice at the bottom of FloServer shows each new email's subject, with an **Open** button.

## Sending mail to it {#sending}

- **PHP**: with **Send PHP's mail to Mailpit** on (the default), `mail()`, `wp_mail` and PHPMailer go to the inbox without any change to your code. Your own lines in a PHP version's custom.ini still win.
- **Apps with their own mail settings**, such as Laravel: **Copy .env lines** in the project's panel includes `MAIL_HOST` and `MAIL_PORT`.
- **Anything else**: send to the SMTP server at `127.0.0.1:1025`, with no login and no encryption. If 1025 is taken, FloServer picks the next free port once and keeps it, so your .env files stay right.

## Settings → Mail {#settings}

Addresses, PHP's mail, notices and how many emails to keep: [Settings → Mail](/docs/settings/mail/).

## From the terminal {#flo}

| Command | What it does |
| --- | --- |
| `flo mail` | Where email goes (SMTP), the inbox's address and how many emails there are |
| `flo mail open` | Open the inbox in your browser |
| `flo mail test [address]` | Send a test email to the inbox |
| `flo mail clear [--yes]` | Delete every email in the inbox |

<div class="note" role="note"><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.5l8 14H2z" stroke="#8A5A00" stroke-width="1.6" fill="none" stroke-linejoin="round"/><path d="M10 8v4M10 14.2v.3" stroke="#8A5A00" stroke-width="1.8" stroke-linecap="round"/></svg><p>A project named <code>mail</code> made before 0.9 keeps its address, and the inbox isn't served until you rename that project. New projects can't use that name.</p></div>
