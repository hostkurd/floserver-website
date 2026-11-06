// Release notes, newest first. Each one gets a page at /news/<version>/.
// The app's "What's new" link can point there (the signed list's notes_url).
export const releases = [
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
