---
layout: ../../layouts/Docs.astro
title: The projects window
description: 'The FloServer projects window: the project list, states, shared sites and the status bar.'
lead: 'Everything you do day to day happens here: every project, whether it''s running, and what it uses.'
---

## At a glance {#overview}

<figure><div class="shot-marks"><img src="/img/docs/window-general.png" width="1106" height="713" alt="The FloServer projects window: four projects and the Shared sites row on the left, the my-shop panel on its General tab on the right"><span class="m" aria-hidden="true" style="left:2.0%;top:16.5%">1</span><span class="m" aria-hidden="true" style="left:22.6%;top:18.1%">2</span><span class="m" aria-hidden="true" style="left:37.7%;top:10.7%">3</span><span class="m" aria-hidden="true" style="left:59.9%;top:10.7%">4</span><span class="m" aria-hidden="true" style="left:89.2%;top:13.5%">5</span><span class="m" aria-hidden="true" style="left:96.6%;top:13.5%">6</span><span class="m" aria-hidden="true" style="left:9.3%;top:85.8%">7</span><span class="m" aria-hidden="true" style="left:30.0%;top:98.0%">8</span><span class="m" aria-hidden="true" style="left:84.6%;top:98.0%">9</span></div><figcaption>The numbers match the list below.</figcaption></figure>

<ol class="legend"><li><span class="n" aria-hidden="true">1</span><span><span class="visually-hidden">1. </span><strong>Switch</strong>: Turn a project on or off.</span></li><li><span class="n" aria-hidden="true">2</span><span><span class="visually-hidden">2. </span><strong>Address</strong>: Open the project in your browser at its .localhost address.</span></li><li><span class="n" aria-hidden="true">3</span><span><span class="visually-hidden">3. </span><strong>Versions</strong>: What the project uses, such as PHP 8.5.12, MariaDB 11.4 and nginx.</span></li><li><span class="n" aria-hidden="true">4</span><span><span class="visually-hidden">4. </span><strong>State</strong>: <strong>On</strong>, <strong>Sleeping</strong> (no requests for a while; it wakes on the next one), or <strong>Off</strong>.</span></li><li><span class="n" aria-hidden="true">5</span><span><span class="visually-hidden">5. </span><strong>New project</strong>: Start from a template, an existing folder or a backup. See <a href="/docs/create-project/">Create a project</a>.</span></li><li><span class="n" aria-hidden="true">6</span><span><span class="visually-hidden">6. </span><strong>Settings</strong>: Runtimes, PHP, Ports &amp; HTTPS, Database, Apache, Folders, Shared sites and General. See <a href="/docs/settings/">Settings</a>.</span></li><li><span class="n" aria-hidden="true">7</span><span><span class="visually-hidden">7. </span><strong>Shared sites</strong>: Every folder in the www folder at localhost, like htdocs. See <a href="/docs/shared-sites/">Shared sites</a>.</span></li><li><span class="n" aria-hidden="true">8</span><span><span class="visually-hidden">8. </span><strong>Status bar</strong>: How many projects are running and sleeping, and the web server's ports.</span></li><li><span class="n" aria-hidden="true">9</span><span><span class="visually-hidden">9. </span><strong>Service memory</strong>: What FloServer's background service is using right now.</span></li></ol>

## Project states {#states}

A project that gets no requests goes to sleep and wakes on the next request, so projects you aren't using cost almost nothing. Turn a project off with its switch to stop it completely.

A project that needs a runtime you haven't installed says so in the list and offers to download it.

## Next {#next}

Click a project to open its [panel](/docs/project-panel/), or right-click it for the [project menu](/docs/project-menu/).
