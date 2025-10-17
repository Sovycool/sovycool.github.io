// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  vite: { plugins: [tailwind()] },
  site: 'https://sovycool.github.io',
  base: '/portfolio', // très important pour les assets/routes sur Pages
});
