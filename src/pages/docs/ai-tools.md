---
layout: ../../layouts/Docs.astro
title: AI coding tools (MCP)
description: 'Let Claude Code, Cursor, VS Code and other AI coding tools see your FloServer projects through flo mcp, read-only. And build your own MCP server from a template.'
lead: 'AI coding tools such as Claude Code, Cursor and VS Code can see your projects through MCP. And FloServer has templates for building your own MCP server.'
---

## What AI tools can see {#flo-mcp}

`flo mcp` is a small MCP server that AI coding tools start themselves. Through it they can see:

- your projects, their versions, addresses and databases;
- the runtimes installed;
- whether FloServer is running;
- a project's log;
- recent caught emails, from [Mailpit](/docs/mail/).

It's read-only: AI tools can't change anything, and never see passwords. Nothing runs until a tool starts it.

## Connect a tool {#connect}

Settings → General → **AI coding tools** has the lines for each tool, with a **Copy** button each:

- **Claude Code**: run this in a terminal:

  ```bash
  claude mcp add floserver -- flo mcp
  ```

- **Cursor and Claude Desktop**: add this to the tool's MCP settings:

  ```json
  { "mcpServers": { "floserver": { "command": "flo", "args": ["mcp"] } } }
  ```

- **VS Code**: add this to its MCP settings (`mcp.json`):

  ```json
  { "servers": { "floserver": { "type": "stdio", "command": "flo", "args": ["mcp"] } } }
  ```

If `flo` isn't on your Path, the lines in Settings name it in full.

## Build your own MCP server {#templates}

Two [New project](/docs/create-project/) templates start an MCP server of your own:

| Template | What you get |
| --- | --- |
| **MCP server (Python)** | FastAPI and the official MCP Python SDK |
| **MCP server (PHP)** | The official MCP PHP SDK, through Composer |

The project's panel then shows **MCP server**: its address, and lines for Cursor, Claude Code (in a terminal, or in a project's `.mcp.json` file) and Claude Desktop (needs Node.js), each with a copy button. The project must be on for AI tools to connect. The project's README.md explains how to add your own tools.

The server's path is kept in the project's [floserver.json](/docs/floserver-json/) as `"mcp": "/mcp"`.
