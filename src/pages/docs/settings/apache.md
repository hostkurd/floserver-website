---
layout: ../../../layouts/Docs.astro
title: Apache
description: 'FloServer Settings → Apache: modules and your own httpd.conf lines for projects that use .htaccess.'
lead: 'Settings → Apache: the shared Apache that serves projects using .htaccess, behind nginx.'
---

## Modules {#modules}

Turn Apache's modules on or off, and find one by name. Ticked grey ones are FloServer's own: its config needs them, so they stay on. Grey empty ones don't apply behind nginx.

<figure><img src="/img/docs/settings-apache.png" width="1026" height="843" loading="lazy" alt="Settings on the Apache page: a grid of Apache modules with tick boxes and the httpd.conf section"><figcaption>Settings → Apache.</figcaption></figure>

## httpd.conf {#httpd}

**Add your own httpd.conf lines…** adds lines at the end of the config FloServer makes. Lines that would change where Apache listens, its files or modules, and `<VirtualHost>`, are left out; Apache checks the rest before using it. **Show the final httpd.conf** shows the result.

Changes apply when you click **Save**.

## Who uses Apache {#who}

A project uses Apache when its web server is set to Apache, in its [panel](/docs/project-panel/) or its [floserver.json](/docs/floserver-json/) (`"web": "apache"`). Shared sites can use it too.
