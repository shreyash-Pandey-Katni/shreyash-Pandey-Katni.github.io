import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shreyash.co.in',
  outDir: './dist',
  publicDir: './public',
  integrations: [sitemap()],
});
