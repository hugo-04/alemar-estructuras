// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [
    tailwind(),
    icon({
        // @ts-ignore
      include: ['mdi']
    }),
    vue(),
  ]
});