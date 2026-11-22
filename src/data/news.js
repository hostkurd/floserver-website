// Release notes, newest first. Each one gets a page at /news/<version>/.
// The app's "What's new" link can point there (the signed list's notes_url).
export const releases = [
  {
    version: '0.9.1',
    date: '23 November 2026',
    iso: '2026-11-23',
    summary: 'Adminer for PostgreSQL, and fixes for 0.9.0.',
    sections: [
      {
        title: 'New',
        items: [
          '<strong>Adminer for PostgreSQL</strong>: <strong>Open in Adminer</strong> on a PostgreSQL project\'s Database tab signs you in to its database in one click, at <code>adminer.localhost</code>. Settings → Database → PostgreSQL has <strong>Open Adminer</strong>, signed in as <code>postgres</code>. Download Adminer on the first start or in Settings → Runtimes. <a href="/docs/databases/#adminer">Databases</a>',
        ],
      },
      {
        title: 'Fixed',
        items: [
          'MySQL now starts reliably on Windows.',
          'A MariaDB or MySQL server that FloServer started is no longer mistaken for another program on its port, and a failed start says which check failed.',
          '<strong>Open in phpMyAdmin</strong> signs in to MySQL databases in one click, as it does for MariaDB.',
          'PostgreSQL projects no longer offer phpMyAdmin, which only works with MariaDB and MySQL.',
          'Installing Mailpit or phpMyAdmin also installs nginx, which serves them. The mail page says so when nginx is missing.',
          'A project can\'t be renamed to <code>adminer</code>: that address belongs to Adminer, like <code>phpmyadmin</code> and <code>mail</code>.',
        ],
      },
      {
        title: 'Good to know',
        items: [
          'Your projects, databases and settings are kept when you update from 0.9.0 or 0.1.0.',
          'The setup isn\'t code-signed yet, so Windows SmartScreen may ask: click <strong>More info</strong>, then <strong>Run anyway</strong>.',
          'Windows 10 and 11, 64-bit. macOS and Linux are planned.',
        ],
      },
    ],
  },
  {
    version: '0.9.0',
    date: '21 November 2026',
    iso: '2026-11-21',
    summary: 'The second public beta: PostgreSQL, MySQL, Redis, a mail catcher, Bun and Deno, and AI coding tools.',
    sections: [
      {
        title: 'New',
        items: [
          '<strong>PostgreSQL</strong> beside MariaDB, with its own database and login for each project, <code>pdo_pgsql</code> turned on for PHP projects, and backups through <code>pg_dump</code>. <a href="/docs/databases/">Databases</a>',
          '<strong>MySQL 8.4 LTS</strong>, for projects that need MySQL itself. Each project picks MariaDB, MySQL or PostgreSQL. <a href="/docs/databases/">Databases</a>',
          '<strong>Redis</strong> through Garnet, Microsoft Research\'s Redis-compatible server: one shared server, each project with its own key prefix and <code>REDIS_</code> lines in Copy .env lines. Laravel\'s Redis cache, queues and sessions work with it. <a href="/docs/redis/">Redis</a>',
          '<strong>Mail catcher</strong>: Mailpit catches every email your projects send, in an inbox at <code>mail.localhost</code>. PHP\'s <code>mail()</code>, <code>wp_mail</code> and PHPMailer go there, and a notice shows each new email. Nothing leaves your PC. <a href="/docs/mail/">Mail</a>',
          '<strong>Bun and Deno</strong> as well as Node.js: each project picks one JavaScript runtime, and <code>bun</code>, <code>bunx</code> and <code>deno</code> work in your terminal at its version. <a href="/docs/javascript/">Node.js, Bun and Deno</a>',
          '<strong>AI coding tools</strong>: Claude Code, Cursor, VS Code and others can see your projects, versions, addresses, logs and caught emails through <code>flo mcp</code>, read-only. <a href="/docs/ai-tools/">AI coding tools</a>',
          'Two new templates, <strong>MCP server (Python)</strong> and <strong>MCP server (PHP)</strong>, for building your own MCP server. The project panel gives the lines to connect AI tools to it.',
          'Running the setup when FloServer is already installed offers <strong>Update</strong>, <strong>Repair</strong> or <strong>Remove</strong>.',
        ],
      },
      {
        title: 'Better',
        items: [
          'New <code>flo</code> commands: <code>flo mail</code>, <code>flo redis</code>, <code>flo mcp</code>, and <code>flo use</code> for <code>bun</code>, <code>deno</code>, <code>mysql</code>, <code>postgresql</code> and <code>redis</code>.',
          'Screen readers: the main window waits while a menu or question is open.',
          'FloServer\'s background service runs without a console window.',
        ],
      },
      {
        title: 'Good to know',
        items: [
          'Your projects, databases and settings are kept when you update from 0.1.0.',
          'The setup isn\'t code-signed yet, so Windows SmartScreen may ask: click <strong>More info</strong>, then <strong>Run anyway</strong>.',
          'Windows 10 and 11, 64-bit. macOS and Linux are planned.',
        ],
      },
    ],
  },
  {
    version: '0.1.0',
    date: '6 November 2026',
    iso: '2026-11-06',
    summary: 'The first public beta of FloServer for Windows.',
    sections: [
      {
        title: 'In this release',
        items: [
          'Projects with their own versions of PHP (8.2 to 8.5), MariaDB, Node.js and Python, each at its own <code>.localhost</code> address.',
          'Trusted local HTTPS from FloServer\'s own certificate authority, limited to <code>localhost</code> names.',
          'nginx for every project, and Apache for projects that need .htaccess.',
          'Eight templates: PHP app, FloCMS, Laravel, WordPress, Node app, Python app, Static site and Database only.',
          'A MariaDB database and user for each project, "Copy .env lines" and phpMyAdmin.',
          'Shared sites: every folder in one www folder at <code>localhost/&lt;folder&gt;/</code>.',
          'Projects sleep when idle and wake on the next request.',
          'Backup as a zip with the database, restore, a new project from a backup, and rename.',
          'Terminal commands (<code>php</code>, <code>composer</code>, <code>node</code>, <code>npm</code>, <code>python</code>, <code>pip</code>) at each project\'s versions, and the <code>flo</code> command line.',
          'A signed list of runtimes, SHA-256 checks on every download, and app updates through the same list.',
          'English, Arabic and Kurdish (Sorani).',
        ],
      },
      {
        title: 'Good to know',
        items: [
          'The setup isn\'t code-signed yet, so Windows SmartScreen may ask: click <strong>More info</strong>, then <strong>Run anyway</strong>.',
          'Windows 10 and 11, 64-bit. macOS and Linux are planned.',
        ],
      },
    ],
  },
];
