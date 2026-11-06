import { defineConfig } from 'astro/config';
import remarkHeadingId from './src/lib/remark-heading-id.mjs';

export default defineConfig({
  site: 'https://floserver.org',
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: {
    remarkPlugins: [remarkHeadingId],
    shikiConfig: { theme: 'dark-plus' },
  },
});
