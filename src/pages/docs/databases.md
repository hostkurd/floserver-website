---
layout: ../../layouts/Docs.astro
title: Databases
description: 'Each FloServer project gets its own database and user in MariaDB, MySQL or PostgreSQL. Connection settings, .env lines, phpMyAdmin, Adminer and Settings → Database.'
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

<figure><img src="/img/docs/window-database.png" width="1106" height="713" loading="lazy" alt="The project panel on the Database tab, showing database my_shop with Copy .env lines and Open in phpMyAdmin buttons"><figcaption>The Database tab for my-shop, a MariaDB project.</figcaption></figure>

- **Copy .env lines** puts the connection settings on your clipboard, ready to paste into your project's `.env`. For PostgreSQL they say `pgsql`; Python projects also get a `DATABASE_URL`.
- **Open in phpMyAdmin** (MariaDB and MySQL) or **Open in Adminer** (PostgreSQL) opens the database in your browser, already signed in. See [below](#tools).

## phpMyAdmin and Adminer {#tools}

FloServer opens each database in a browser tool that suits its engine, signed in with the project's own user, so you never type a password.

| Engine | Tool | Address |
| --- | --- | --- |
| MariaDB, MySQL | **phpMyAdmin** | `phpmyadmin.localhost` |
| PostgreSQL | **Adminer** | `adminer.localhost` |

Neither is installed at first. Tick them on the [first start](/docs/first-start/#runtimes), or download them in [Settings → Runtimes](/docs/settings/runtimes/#tools); until then the button says where to get it. They run on the newest PHP you have installed, so they don't hold on to a PHP version.

### Adminer for PostgreSQL {#adminer}

<figure><img src="/img/docs/window-database-postgresql.png" width="1106" height="713" loading="lazy" alt="The project panel on the Database tab of the PostgreSQL project crm, showing database crm on 127.0.0.1:5432 with Copy .env lines and Open in Adminer buttons"><figcaption>The Database tab for crm, a PostgreSQL project.</figcaption></figure>

- **Open in Adminer** on a project's Database tab signs in as the project's user, straight into its database.
- **Open Adminer** in Settings → Database → PostgreSQL signs in as `postgres`, to look after the whole server.
- Each sign-in link works once. In FloServer, Adminer only opens FloServer's own PostgreSQL servers; MariaDB and MySQL databases open in phpMyAdmin.

## Settings → Database {#settings}

The database servers themselves (start and stop, ports, your own settings, root and superuser access) have their own page: [Settings → Database](/docs/settings/database/).

## Backups {#backups}

A [backup](/docs/backup/) includes the project's database, made with `mariadb-dump`, `mysqldump` or `pg_dump`. A MariaDB backup can go into a MySQL project and the other way round, but a PostgreSQL backup only goes into a PostgreSQL project.

## From the terminal {#flo}

- `flo db` shows the database servers and the projects using them.
- `flo env` prints a project's database settings as .env lines; `flo env --write` writes them. Add `--show` to include the password.
