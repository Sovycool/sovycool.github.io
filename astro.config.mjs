// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: { plugins: [tailwind()] },
  site: 'https://sovycool.github.io',
  base: '/', // très important pour les assets/routes sur Pages
});
