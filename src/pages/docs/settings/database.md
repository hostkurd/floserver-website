---
layout: ../../../layouts/Docs.astro
title: Database
description: "FloServer Settings → Database: start and stop the MariaDB, MySQL and PostgreSQL servers, ports, your own settings, root and superuser access, phpMyAdmin and Adminer."
lead: "Settings → Database looks after the database servers. There's one server per engine and version, shared by the projects that use it; each project still has its own database and user."
---

## The server {#server}

- **Server**: Start, Stop or Restart it. A server sleeps when no project has used it for a while and wakes on the next connection, unless **Keep running** is on.
- **Port**: automatic by default: 3306 for MariaDB and MySQL, 5432 for PostgreSQL, or the next free one. If you change it, copy the new lines from each project's Database tab.
- **Your own settings**: **Add your own my.ini lines…** (MariaDB and MySQL) or **Add your own postgresql.conf lines…** (PostgreSQL). Your lines win over the fields, and the server uses them when it next starts. **Show the final…** opens what the server really uses.
- **Root access** (MariaDB and MySQL) or **Superuser access** (PostgreSQL): the password of `root` or `postgres`, for database tools. Projects never use it.
- **Open phpMyAdmin** or **Open Adminer**: the server in your browser, signed in as `root` or `postgres`.

<div class="note" role="note"><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.5l8 14H2z" stroke="#8A5A00" stroke-width="1.6" fill="none" stroke-linejoin="round"/><path d="M10 8v4M10 14.2v.3" stroke="#8A5A00" stroke-width="1.8" stroke-linecap="round"/></svg><p>MySQL and PostgreSQL can't start when the path of your Windows user folder has letters outside English and Windows keeps no short name for it. Use MariaDB on that computer, or a Windows user whose folder name has English letters only.</p></div>

Each project's own database, user and .env lines are on its [Database tab](/docs/databases/#tab). Browser tools: [phpMyAdmin and Adminer](/docs/databases/#tools).
