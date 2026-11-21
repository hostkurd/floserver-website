---
layout: ../../layouts/Docs.astro
title: Terminal commands
description: 'php, composer, node, npm, python and pip in any terminal use the versions of the FloServer project you are in.'
lead: 'In a project folder, <code>php</code>, <code>composer</code>, <code>node</code>, <code>npm</code>, <code>python</code> and <code>pip</code> run the versions that project uses.'
---

## How it works {#how}

The setup adds FloServer's command folder to your user's Path: `php`, `composer`, `node`, `npm`, `npx`, `bun`, `bunx`, `deno`, `python` and `pip`. When you run `php` in a project folder, FloServer picks that project's PHP; in another project, that one's.

```bash
cd C:\Users\you\FloServer\projects\my-shop
php -v
composer install
```

The quickest way in is **Open terminal**, from the project's [panel](/docs/project-panel/) or [right-click menu](/docs/project-menu/).

## Turn them on or off {#shims}

`flo shims install` sets them up, and `flo shims remove` takes them away again.

## The flo command {#flo}

Everything the window does is also a `flo` command. See [the flo command](/docs/flo/).
