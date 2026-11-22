---
layout: ../../../layouts/Docs.astro
title: Mail
description: "FloServer Settings → Mail: Mailpit's addresses, PHP's mail, notices for new mail and how many emails to keep."
lead: "Settings → Mail looks after Mailpit, the mail catcher. Nothing leaves this PC."
---

## Addresses {#addresses}

The **Inbox** (`mail.localhost`) and the **SMTP server** your projects send to (no login, no encryption), each with a copy button. **Open inbox** opens it in your browser.

## Options {#options}

- **Send PHP's mail to Mailpit**: on by default. `mail()`, `wp_mail` and PHPMailer go to the inbox. Your own lines in custom.ini still win.
- **Notices for new mail**: a short notice at the bottom of FloServer with the subject and an Open button.
- **Keep running**: off by default. Mailpit sleeps after 10 minutes without mail or an open inbox, and wakes on the next email. Emails are kept.

## Emails {#emails}

- **Keep the last … emails**: older ones are deleted first.
- **Send a test email**, and **Delete all emails…**.

If Mailpit isn't installed, the page has an **Install** button. More about the inbox and sending mail: [Mail (Mailpit)](/docs/mail/).
