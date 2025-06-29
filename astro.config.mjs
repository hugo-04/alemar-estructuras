// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import vue from '@astrojs/vue';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    icon({
      // @ts-ignore
      include: ['mdi']
    }),
    vue(),
  ]
});