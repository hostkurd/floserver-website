---
layout: ../../../layouts/Docs.astro
title: Redis
description: "FloServer Settings → Redis: Garnet's address and password, keep running, memory limit and keys."
lead: "Settings → Redis looks after Garnet, the shared Redis-compatible server from Microsoft Research."
---

## Server and options {#options}

<figure><img src="/img/docs/settings-redis.png" width="1026" height="843" loading="lazy" alt="Settings on the Redis page: Garnet 2.2.13 asleep; server 127.0.0.1:6379 and its password with Copy buttons; Keep running off; memory limit 256 MB; 0 keys and Flush all"><figcaption>Settings → Redis.</figcaption></figure>

- **Address**: the server, usually `127.0.0.1:6379`, and its password. The password is always on, so web pages can't reach the server.
- **Keep running**: off by default. Garnet sleeps after 10 minutes without connections. Its data is saved first and comes back when it wakes.
- **Memory limit**, in MB.
- **Data**: how many keys there are and how many projects use it. **Flush all…** deletes every key, for every project.

Changes apply when saved. Projects with Redis on get `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD` and their own `REDIS_PREFIX` in Copy .env lines. If Garnet isn't installed, the page has an **Install Garnet** button.

Turning Redis on for a project, and what Garnet doesn't do: [Redis](/docs/redis/).
