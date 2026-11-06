import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkHeadingId from './src/lib/remark-heading-id.mjs';

export default defineConfig({
  site: 'https://floserver.org',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
  build: { format: 'directory' },
  // Scripts as files, never inline, so the Content-Security-Policy can stay strict.
  vite: { build: { assetsInlineLimit: 0 } },
  markdown: {
    remarkPlugins: [remarkHeadingId],
    shikiConfig: { theme: 'dark-plus' },
  },
});
