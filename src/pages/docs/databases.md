---
layout: ../../layouts/Docs.astro
title: Databases
description: 'Each FloServer project gets its own database and user in MariaDB, MySQL or PostgreSQL. Connection settings, .env lines, phpMyAdmin and Settings → Database.'
lead: 'Every project that uses a database gets its own database and user, in MariaDB, MySQL or PostgreSQL.'
---

## Pick an engine {#engines}

| Engine | Good for |
| --- | --- |
| **MariaDB** | The default. Long-term support versions, and what most PHP apps expect |
| **MySQL 8.4 LTS** | Projects that need MySQL itself. FloServer offers Oracle's long-term support release, not the 9.x Innovation releases |
| **PostgreSQL** | Projects built for PostgreSQL. PHP projects get `pdo_pgsql` and `pgsql` turned on |

A project uses one database engine. Choose it in the project's panel, when you [create the project](/docs/create-project/), or in its [floserver.json](/docs/floserver-json/): `"database": "mariadb-11.4"`, `"mysql-8.4"` or `"postgresql-18"`. From the terminal: `flo use mariadb 11.4`, `flo use mysql 8.4` or `flo use postgresql 18`; the new one replaces the old one.

Download and remove versions in [Settings → Runtimes](/docs/settings/runtimes/).

## The Database tab {#tab}

Open a project's panel and choose **Database**. It shows the database's name, the address (such as `127.0.0.1:3306`) and the user.

<figure><img src="/img/docs/window-database.png" width="1106" height="713" loading="lazy" alt="The project panel on the Database tab, showing database my_shop with Copy .env lines and Open in phpMyAdmin buttons"><figcaption>The Database tab for my-shop.</figcaption></figure>

- **Copy .env lines** puts the connection settings on your clipboard, ready to paste into your project's `.env`. For PostgreSQL they say `pgsql`; Python projects also get a `DATABASE_URL`.
- **Open in phpMyAdmin** opens a MariaDB or MySQL database in your browser. For PostgreSQL, connect a tool such as pgAdmin or DBeaver to the address shown.

## Settings → Database {#settings}

Settings → Database looks after the servers themselves. There's one server per engine and version, shared by the projects that use it, and each project still has its own database and user.

- **Server**: Start, Stop or Restart it. A server sleeps when no project has used it for a while and wakes on the next connection, unless **Keep running** is on.
- **Port**: automatic by default: 3306 for MariaDB and MySQL, 5432 for PostgreSQL, or the next free one. If you change it, copy the new lines from each project's Database tab.
- **Your own settings**: **Add your own my.ini lines…** (MariaDB and MySQL) or **Add your own postgresql.conf lines…** (PostgreSQL). Your lines win over the fields, and the server uses them when it next starts. **Show the final…** opens what the server really uses.
- **Root access** (MariaDB and MySQL) or **Superuser access** (PostgreSQL): the password of `root` or `postgres`, for database tools. Projects never use it.

<div class="note" role="note"><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.5l8 14H2z" stroke="#8A5A00" stroke-width="1.6" fill="none" stroke-linejoin="round"/><path d="M10 8v4M10 14.2v.3" stroke="#8A5A00" stroke-width="1.8" stroke-linecap="round"/></svg><p>MySQL and PostgreSQL can't start when the path of your Windows user folder has letters outside English and Windows keeps no short name for it. Use MariaDB on that computer, or a Windows user whose folder name has English letters only.</p></div>

## Backups {#backups}

A [backup](/docs/backup/) includes the project's database, made with `mariadb-dump`, `mysqldump` or `pg_dump`. A MariaDB backup can go into a MySQL project and the other way round, but a PostgreSQL backup only goes into a PostgreSQL project.

## From the terminal {#flo}

- `flo db` shows the database servers and the projects using them.
- `flo env` prints a project's database settings as .env lines; `flo env --write` writes them. Add `--show` to include the password.
