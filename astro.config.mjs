import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ikaienergy.com.au',
  integrations: [sitemap()],
  trailingSlash: 'never'
});
