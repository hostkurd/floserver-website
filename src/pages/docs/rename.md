---
layout: ../../layouts/Docs.astro
title: Rename a project
description: 'Rename a FloServer project: its address follows the new name, and optionally its folder too.'
lead: 'Right-click a project and choose <strong>Rename…</strong>'
---

## The new name {#name}

Letters a–z, digits and `-`. The address follows the new name, and the old address stops working.

<figure><img src="/img/docs/project-rename-dialog.png" width="498" height="351" loading="lazy" style="max-width:500px" alt="The Rename my-shop window with the new name shop-2026"><figcaption>Rename my-shop.</figcaption></figure>

## The folder {#folder}

Tick **Also rename the folder** to rename its folder too. Close editors and terminals that use it first.

## The database {#database}

The database and its user keep their names, so your `.env` keeps working.

## From the terminal {#flo}

`flo rename <name> <new>`, with `--folder` to rename the folder too.
