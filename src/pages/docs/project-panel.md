---
layout: ../../layouts/Docs.astro
title: Project panel
description: 'The FloServer project panel and its General, PHP, Database and Log tabs.'
lead: 'Click a project in the list to open its panel on the right. Close it with the ✕ at its top right.'
---

## The General tab {#general}

<figure><div class="shot-marks"><img src="/img/docs/window-general.png" width="1106" height="713" alt="The FloServer projects window: four projects and the Shared sites row on the left, the my-shop panel on its General tab on the right"><span class="m" aria-hidden="true" style="left:66.3%;top:24.4%">1</span><span class="m" aria-hidden="true" style="left:82.3%;top:31.4%">2</span><span class="m" aria-hidden="true" style="left:78.1%;top:36.9%">3</span><span class="m" aria-hidden="true" style="left:74.3%;top:44.2%">4</span><span class="m" aria-hidden="true" style="left:78.8%;top:75.7%">5</span><span class="m" aria-hidden="true" style="left:84.1%;top:85.0%">6</span></div><figcaption>The my-shop project on its General tab. The numbers match the list below.</figcaption></figure>

<ol class="legend"><li><span class="n" aria-hidden="true">1</span><span><span class="visually-hidden">1. </span><strong>Tabs</strong>: General, PHP, Database and Log. A project only shows the tabs it uses: a Python app without a database has General and Log.</span></li><li><span class="n" aria-hidden="true">2</span><span><span class="visually-hidden">2. </span><strong>Quick buttons</strong>: Open in browser, open the folder, open a terminal, open in your code editor.</span></li><li><span class="n" aria-hidden="true">3</span><span><span class="visually-hidden">3. </span><strong>Project folder</strong>: Where the project's files are.</span></li><li><span class="n" aria-hidden="true">4</span><span><span class="visually-hidden">4. </span><strong>Versions</strong>: PHP, Database, Web server, Node.js and Python. Saved in <a href="/docs/floserver-json/">floserver.json</a>.</span></li><li><span class="n" aria-hidden="true">5</span><span><span class="visually-hidden">5. </span><strong>Keep running</strong>: Off: the project sleeps after 10 minutes without requests. Turn it on for a project that must stay awake, such as one with background jobs.</span></li><li><span class="n" aria-hidden="true">6</span><span><span class="visually-hidden">6. </span><strong>Remove from FloServer…</strong>: Forget the project in FloServer.</span></li></ol>

## The PHP tab {#php}

This project's own PHP extensions and php.ini values, on top of the defaults for its PHP version in [Settings → PHP](/docs/settings/php/). They're kept in its [floserver.json](/docs/floserver-json/).

## The Database tab {#database}

The project's own database and user. See [Databases and phpMyAdmin](/docs/databases/).

## The Log tab {#log}

Requests and messages from the project as they come in.
