// JSON-LD for search engines. Only facts that are true today; no ratings or reviews.
import { release, company, siteUrl } from '../data/site.js';

const orgId = `${siteUrl}/#hostkurd`;
const appId = `${siteUrl}/#app`;

export const organization = {
  '@type': 'Organization',
  '@id': orgId,
  name: company.name,
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Darawaza City Mix Tower, Floor 5',
    addressLocality: 'Sulaymaniyah',
    addressRegion: 'Kurdistan Region',
    addressCountry: 'IQ',
  },
};

export const website = {
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'FloServer',
  url: `${siteUrl}/`,
  inLanguage: 'en',
  publisher: { '@id': orgId },
};

export const softwareApplication = {
  '@type': 'SoftwareApplication',
  '@id': appId,
  name: 'FloServer',
  description:
    'A free, lightweight local web development server for Windows: PHP, MariaDB, Node.js, Python, nginx or Apache per project, each with trusted HTTPS.',
  url: `${siteUrl}/`,
  image: `${siteUrl}/img/og.png`,
  screenshot: `${siteUrl}/img/docs/window-general.png`,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Windows 10, Windows 11 (64-bit)',
  softwareVersion: release.version,
  downloadUrl: release.setupUrl,
  fileSize: release.size,
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@id': orgId },
};

export function breadcrumbs(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${siteUrl}${path}`,
    })),
  };
}

// One <script type="application/ld+json"> body. "<" is escaped so the text can't close the tag.
export function toJsonLd(nodes) {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(/</g, '\\u003c');
}
