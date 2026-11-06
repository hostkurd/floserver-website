---
layout: ../../layouts/Docs.astro
title: Backup and restore
description: 'Back up a FloServer project as a zip with its database, restore it, or make a new project from a backup.'
lead: 'Right-click a project for <strong>Back up as zip…</strong> and <strong>Restore from backup…</strong>'
---

## Back up a project {#backup}

A backup is one .zip with the project's files and, if you tick it, its database as `database.sql`. It goes to `Documents\FloServer Backups` unless you choose another place.

Folders that can be installed again, such as `vendor` (Composer) and `node_modules` (npm), are left out by default. Only the folders the project has are listed; a Python project shows `.venv`.

<figure><img src="/img/docs/project-backup-dialog.png" width="538" height="427" loading="lazy" style="max-width:560px" alt="The Back up my-shop window: save as path, include the database, leave out vendor and node_modules"><figcaption>Back up my-shop. Sizes are examples.</figcaption></figure>

When it's done, a message shows the file and its size, with **Show in folder**.

<figure><img src="/img/docs/project-backup-toast.png" width="360" height="82" loading="lazy" style="max-width:360px" alt="A message saying Backed up my-shop with the zip name and size and a Show in folder link"><figcaption>Done.</figcaption></figure>

From the terminal: `flo backup <project>`, with `--to <zip>` or `--no-database`.

## Restore a project {#restore}

Pick the backup zip. You choose what to replace:

- **Replace the project's files**: today's files go to the Recycle Bin first, so you can get them back.
- **Replace its database**: today's database is saved first, as a .sql file next to the backup.
- **Install the packages that were left out**: composer install and npm install, after it's restored.

The project stops while it's restored, then starts again.

<figure><img src="/img/docs/project-restore-dialog.png" width="558" height="386" loading="lazy" style="max-width:580px" alt="The Restore my-shop from a backup window with three tick boxes and a red Restore button"><figcaption>Restore my-shop.</figcaption></figure>

From the terminal: `flo restore <project> <zip>`.

## A new project from a backup {#new-from-backup}

To keep the original and make a copy, use **+ New project → From a backup…** (or `flo add --from-backup <zip>`). Give it a name; it gets its own folder, address and a new database made from the backup, and its `.env` is updated to it.

<figure><img src="/img/docs/project-new-from-backup-dialog.png" width="558" height="382" loading="lazy" style="max-width:580px" alt="The New project from a backup window with the backup, the name my-shop-copy and where it will go"><figcaption>New project from a backup.</figcaption></figure>
