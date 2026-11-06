---
layout: ../../layouts/Docs.astro
title: Databases and phpMyAdmin
description: 'Each FloServer project gets its own MariaDB database and user. Connection settings, .env lines and phpMyAdmin.'
lead: 'Every project that uses a database gets its own MariaDB database and user.'
---

## The Database tab {#tab}

Open a project's panel and choose **Database**. It shows the database's name, the address (`127.0.0.1:3306`) and the user.

<figure><img src="/img/docs/window-database.png" width="1106" height="713" loading="lazy" alt="The project panel on the Database tab, showing database my_shop with Copy .env lines and Open in phpMyAdmin buttons"><figcaption>The Database tab for my-shop.</figcaption></figure>

- **Copy .env lines** puts the connection settings on your clipboard, ready to paste into your project's `.env`.
- **Open in phpMyAdmin** opens the database in your browser.

## From the terminal {#flo}

- `flo db` shows the databases and the projects using them.
- `flo env` prints a project's database settings as .env lines; `flo env --write` writes them. Add `--show` to include the password.

## Versions {#versions}

Choose MariaDB's version for a project in its panel, or in its [floserver.json](/docs/floserver-json/) as `"database": "mariadb-11.4"`. Download and remove versions in [Settings → Runtimes](/docs/settings/runtimes/).
