---
layout: ../../layouts/Docs.astro
title: Shared sites (www)
description: 'Shared sites in FloServer: every folder in one www folder opens at localhost, like XAMPP htdocs.'
lead: 'Like XAMPP''s htdocs or Laragon''s www: every PHP or HTML folder in the www folder opens at <code>localhost/&lt;folder&gt;/</code>.'
---

## In the projects window {#row}

Shared sites have their own row at the bottom of the project list, with a switch, a **localhost** link, **Open folder** and a settings button.

## Settings {#settings}

The www folder, PHP version, database and web server: [Settings → Shared sites](/docs/settings/shared-sites/).

## When to make it a project {#project}

A folder that needs its own PHP version or database, or a Node.js or Python app, works better as a [project](/docs/create-project/). A project always keeps its own address.

## From the terminal {#flo}

- `flo shared on` or `flo shared off`
- `flo shared php <version|newest>`, `flo shared web <apache|nginx>`, `flo shared dir <folder|default>`
- `flo shared db <11.4|none>`; `flo shared login` shows its database user (`--show` for the password)
