// Facts used across the site. Change a release here, and in public/_redirects.
export const release = {
  version: '0.1.0',
  date: '6 November 2026',
  setupUrl: 'https://cdn.floserver.org/app/0.1.0/FloServer-Setup-0.1.0.exe',
  setupFile: 'FloServer-Setup-0.1.0.exe',
  size: '3.9 MB',
};

export const company = {
  name: 'HostKurd',
  address: 'Darawaza City Mix Tower, Floor 5, Sulaymaniyah, Kurdistan Region of Iraq',
  email: 'dev@floserver.org',
};

export const siteUrl = 'https://floserver.org';

// The docs menu. `href` without a hash is a page; a hash points into one.
export const docsNav = [
  {
    title: 'Getting started',
    items: [
      { title: 'Overview', href: '/docs/' },
      { title: 'Install and first start', href: '/docs/install/' },
      { title: 'First start', href: '/docs/install/#first-start' },
      { title: 'Create a project', href: '/docs/install/#project' },
    ],
  },
  {
    title: 'Using the app',
    items: [
      { title: 'The projects window', href: '/docs/window/' },
      { title: 'Right-click menu', href: '/docs/window/#menu' },
      { title: 'Project panel', href: '/docs/window/#panel' },
      { title: 'Shared sites (www)', href: '/docs/window/#shared' },
      { title: 'Databases and phpMyAdmin', href: '/docs/window/#database' },
      { title: 'Backup and restore', href: '/docs/backup/' },
      { title: 'Rename a project', href: '/docs/backup/#rename' },
    ],
  },
  {
    title: 'Settings',
    items: [
      { title: 'All settings', href: '/docs/settings/' },
      { title: 'Runtimes', href: '/docs/settings/#runtimes' },
      { title: 'PHP', href: '/docs/settings/#php' },
      { title: 'Apache', href: '/docs/settings/#apache' },
      { title: 'Folders', href: '/docs/settings/#folders' },
      { title: 'General', href: '/docs/settings/#general' },
      { title: 'Shared sites', href: '/docs/settings/#shared' },
      { title: 'Ports & HTTPS', href: '/docs/settings/#ports' },
    ],
  },
  {
    title: 'Projects',
    items: [{ title: 'floserver.json', href: '/docs/floserver-json/' }],
  },
  {
    title: 'Command line',
    items: [
      { title: 'Terminal commands', href: '/docs/flo/#shims' },
      { title: 'The flo command', href: '/docs/flo/' },
    ],
  },
  {
    title: 'Help',
    items: [
      { title: 'Updates', href: '/docs/updates/' },
      { title: 'Remove FloServer', href: '/docs/remove/' },
    ],
  },
];
