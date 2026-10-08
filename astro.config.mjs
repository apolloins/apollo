
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.apolloins.ca',
  integrations: [tailwind()],
  server: {
    host: "0.0.0.0",
  },
  vite: {
    server: {
      allowedHosts: ['appolo.smartcubes.uk', 'apolloins.ca']
    }
  }
});
