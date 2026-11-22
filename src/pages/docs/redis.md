---
layout: ../../layouts/Docs.astro
title: Redis
description: 'A shared Redis server for FloServer projects through Garnet, a Redis-compatible server from Microsoft Research. Laravel caches, queues and sessions.'
lead: 'One Redis server for all your projects, through Garnet, a Redis-compatible server from Microsoft Research.'
---

## Install it {#install}

Click **Install Garnet** in Settings → Redis, or install it in [Settings → Runtimes](/docs/settings/runtimes/). FloServer also downloads the .NET runtime Garnet needs. From the terminal: `flo install garnet`.

## Turn it on for a project {#project}

Turn on **Redis** in the project's panel, or run `flo use redis on` in the project's folder. It's saved in the project's [floserver.json](/docs/floserver-json/) as `"redis": true`.

The server is shared, so each project's keys start with its own prefix. **Copy .env lines** then includes `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD` and the project's `REDIS_PREFIX`.

- If the project's PHP has the phpredis extension, the lines say `REDIS_CLIENT=phpredis`.
- If not, they say `REDIS_CLIENT=predis`: run `composer require predis/predis` in the project.

Laravel's Redis cache, queues and sessions work with it.

## Settings → Redis {#settings}

Address, password, memory limit and keys: [Settings → Redis](/docs/settings/redis/).

## What Garnet doesn't do {#limits}

Garnet doesn't support Redis streams (`XADD`, `XREAD`) or `WAIT`. Laravel's own drivers don't use them.

## From the terminal {#flo}

| Command | What it does |
| --- | --- |
| `flo redis` | Its state, address and key count |
| `flo redis flush [--yes]` | Delete every key on the shared server |
| `flo use redis <on\|off>` | Redis for the project in this folder |
