// Facts used across the site. Change a release here, and in public/_redirects.
export const release = {
  version: '0.9.0',
  date: '21 November 2026',
  setupUrl: 'https://cdn.floserver.org/app/0.9.0/FloServer-Setup-0.9.0.exe',
  setupFile: 'FloServer-Setup-0.9.0.exe',
  size: 'SIZE',
};

const companyAddress = {
  street: 'Darawaza City Mix Tower, Floor 5',
  city: 'Sulaymaniyah',
  region: 'Kurdistan Region',
  country: 'Iraq',
  countryCode: 'IQ',
};

export const company = {
  name: 'HostKurd',
  address: `${companyAddress.street}, ${companyAddress.city}, ${companyAddress.region} of ${companyAddress.country}`,
  addressParts: companyAddress,
  email: 'dev@floserver.org',
};

// The slogan: hero and footer.
export const slogan = 'The lightweight local environment for developers.';

export const siteUrl = 'https://floserver.org';

// The docs menu: one entry per page, in reading order. Prev/next links and
// the menu both come from this list, so a new docs page is added here too.
export const docsNav = [
  {
    title: 'Getting started',
    items: [
      { title: 'Overview', href: '/docs/' },
      { title: 'Install FloServer', href: '/docs/install/' },
      { title: 'First start', href: '/docs/first-start/' },
      { title: 'Create a project', href: '/docs/create-project/' },
    ],
  },
  {
    title: 'Using the app',
    items: [
      { title: 'The projects window', href: '/docs/window/' },
      { title: 'Project panel', href: '/docs/project-panel/' },
      { title: 'Right-click menu', href: '/docs/project-menu/' },
      { title: 'Databases', href: '/docs/databases/' },
      { title: 'Mail (Mailpit)', href: '/docs/mail/' },
      { title: 'Redis', href: '/docs/redis/' },
      { title: 'Node.js, Bun and Deno', href: '/docs/javascript/' },
      { title: 'AI coding tools (MCP)', href: '/docs/ai-tools/' },
      { title: 'Shared sites (www)', href: '/docs/shared-sites/' },
      { title: 'Backup and restore', href: '/docs/backup/' },
      { title: 'Rename a project', href: '/docs/rename/' },
    ],
  },
  {
    title: 'Settings',
    items: [
      { title: 'All settings', href: '/docs/settings/' },
      { title: 'General', href: '/docs/settings/general/' },
      { title: 'Runtimes', href: '/docs/settings/runtimes/' },
      { title: 'PHP', href: '/docs/settings/php/' },
      { title: 'Ports & HTTPS', href: '/docs/settings/ports-https/' },
      { title: 'Apache', href: '/docs/settings/apache/' },
      { title: 'Folders', href: '/docs/settings/folders/' },
    ],
  },
  {
    title: 'Projects and terminal',
    items: [
      { title: 'floserver.json', href: '/docs/floserver-json/' },
      { title: 'Terminal commands', href: '/docs/terminal/' },
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

export const docsPages = docsNav.flatMap((g) => g.items.map((i) => ({ ...i, group: g.title })));
