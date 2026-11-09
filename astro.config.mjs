import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical domain of the live studio site; used for sitemap and absolute URLs.
export default defineConfig({
  site: 'https://architettofaustoformica.it',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
