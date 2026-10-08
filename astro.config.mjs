
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.apolloins.ca',
  integrations: [tailwind(), sitemap({ filter: page => /\/(zh-hant|zh|en|fr)\//.test(page) })],
  server: {
    host: "0.0.0.0",
  },
  vite: {
    server: {
      allowedHosts: ['appolo.smartcubes.uk', 'apolloins.ca']
    }
  }
});
