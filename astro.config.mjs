// @ts-check
import { defineConfig } from 'astro/config';
import favicons from 'astro-favicons';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [favicons(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  prefetch: true,
});
