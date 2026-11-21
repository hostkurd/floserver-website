---
layout: ../../layouts/Docs.astro
title: Node.js, Bun and Deno
description: 'Run JavaScript and TypeScript projects in FloServer with Node.js, Bun or Deno, each behind its own .localhost address.'
lead: 'A JavaScript project runs on Node.js, Bun or Deno. Its dev server runs behind the project address, and sleeps when idle like any other project.'
---

## Pick a runtime {#pick}

| Runtime | What it is |
| --- | --- |
| **Node.js** | Long-term support versions, with npm |
| **Bun** | Fast JavaScript and TypeScript, with its own package manager |
| **Deno** | JavaScript and TypeScript with built-in tools and permissions |

A project uses one JavaScript runtime. Choose it in the project's panel, or in its [floserver.json](/docs/floserver-json/): `"node": "22"`, `"bun": "1.3"` or `"deno": "2"`. From the terminal: `flo use node 22`, `flo use bun 1.3` or `flo use deno 2`; the new one replaces the old one.

Download versions in [Settings → Runtimes](/docs/settings/runtimes/). Each Bun minor version (1.3, 1.4…) is its own series, because Bun's minor versions can change how things work.

## How a project starts {#start}

FloServer starts the project's dev server on a free port and serves it at `https://<name>.localhost`:

- **Node.js**: the `dev` script in package.json, or else its `start` script, through npm.
- **Bun**: `bun run dev` when package.json has a `dev` script, else `bun --hot` on `index.ts`, `server.ts` or another usual entry file.
- **Deno**: `deno task dev`.

Frameworks such as Vite and Next.js are given the port and address they should use. For anything else, set your own start line as `command` in [floserver.json](/docs/floserver-json/).

Packages are yours to install: run `npm install`, `bun install` or `deno install` in the project's terminal.

## In your terminal {#terminal}

`node`, `npm`, `npx`, `bun`, `bunx` and `deno` use the project's version in any terminal. See [Terminal commands](/docs/terminal/).
