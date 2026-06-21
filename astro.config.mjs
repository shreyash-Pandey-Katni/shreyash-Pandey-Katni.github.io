import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shreyash.co.in',
  outDir: './dist',
  publicDir: './public',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'kn', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
});
