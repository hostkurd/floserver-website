---
layout: ../../layouts/Docs.astro
title: floserver.json
section: Projects
description: 'The keys a FloServer project''s floserver.json can hold, with examples.'
lead: 'Each project keeps its settings in a small <code>floserver.json</code> in its folder. Commit it, and the next person who opens the folder gets the same setup.'
---

## An example {#example}

```json
{
  "php": "8.2",
  "node": "22",
  "database": "mariadb-11.4",
  "web": "nginx",
  "root": "public",
  "extensions": ["intl", "gd", "-exif"],
  "php_ini": { "memory_limit": "1024M" }
}
```

FloServer writes this file when you change a project's versions in the window or with `flo use`. You can edit it by hand too; every key is optional, and `{}` means the defaults. `flo check` tells you if something in it is wrong.

## The keys {#keys}

<div class="table-box"><table>
<tr><th>Key</th><th>What it holds</th></tr>
<tr><td><code>php</code></td><td>A PHP version in quotes, such as <code>"8.2"</code> or <code>"8.2.27"</code>. Or <code>"newest"</code> for the newest installed PHP, or <code>false</code> for no PHP.</td></tr>
<tr><td><code>node</code></td><td>A Node.js version in quotes, such as <code>"22"</code>.</td></tr>
<tr><td><code>python</code></td><td>A Python version in quotes, such as <code>"3.13"</code>.</td></tr>
<tr><td><code>database</code></td><td>The database and its version, such as <code>"mariadb-11.4"</code>.</td></tr>
<tr><td><code>web</code></td><td><code>"nginx"</code> (the default) or <code>"apache"</code>, for projects that need .htaccess.</td></tr>
<tr><td><code>root</code></td><td>The folder inside the project that the web server serves, such as <code>"public"</code>. The default is the project folder itself.</td></tr>
<tr><td><code>extensions</code></td><td>PHP extensions to turn on for this project, such as <code>["intl", "gd"]</code>. A leading <code>-</code> turns one off: <code>"-exif"</code>. opcache is always on.</td></tr>
<tr><td><code>php_ini</code></td><td>php.ini values for this project, such as <code>{"memory_limit": "1024M"}</code>.</td></tr>
<tr><td><code>command</code></td><td>One line that starts the project's own server, run in the project folder, such as <code>"npm run serve -- --port {port}"</code>. FloServer puts the port in place of <code>{port}</code>.</td></tr>
</table></div>

## From the terminal {#flo}

- `flo use php 8.5`, `flo use node 22`, `flo use python 3.13`, `flo use mariadb 11.4` set a version.
- `flo use php none`, `newest` or `auto`: no PHP, always the newest, or PHP when the project has .php files.
- `flo php <project> ext …` and `flo php <project> ini …` change the project's own PHP settings.

See [the flo command](/docs/flo/) for the rest.
