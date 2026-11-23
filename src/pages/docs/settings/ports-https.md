---
layout: ../../../layouts/Docs.astro
title: Ports & HTTPS
description: 'FloServer Settings → Ports and HTTPS: web ports, HTTPS for projects and shared sites, and the local certificate authority.'
lead: 'Settings → Ports &amp; HTTPS: where FloServer''s web server listens, and HTTPS for your projects. Changes take effect at once.'
---

## Web ports {#ports}

- **Automatic** (the default): 80 and 443 when they're free, else 8080 and 8443.
- **80 and 443**: addresses without a port, such as `https://shop.localhost`.
- **8080 and 8443**: addresses with the port, such as `https://shop.localhost:8443`.
- **Other ports**: two port numbers of your own.

The page shows which ports are in use now.

<figure><img src="/img/docs/settings-ports.png" width="1026" height="843" loading="lazy" alt="Settings on the Ports and HTTPS page: web ports set to Automatic, in use 80 and 443; HTTPS for projects on, shared sites over HTTPS off; the certificate authority trusted by Windows, with Remove and Open the certificate"><figcaption>Settings → Ports &amp; HTTPS, with the certificate authority trusted.</figcaption></figure>

## HTTPS {#https}

- **HTTPS for projects**: projects open at `https://<name>.localhost`, and their http addresses go there too.
- **Shared sites over HTTPS**: only `https://localhost/<folder>/` gets HTTPS; `<folder>.localhost` stays http.

HTTPS starts once Windows trusts FloServer's certificate authority.

## The certificate authority {#ca}

If there isn't one yet, **Trust** makes it and adds it to Windows. It's the same as `flo trust`; `flo untrust` removes it. It only works for localhost addresses, so it can't be misused for real websites, and its private key never leaves your computer.
