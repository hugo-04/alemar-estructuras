// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import vue from '@astrojs/vue';
import preact from '@astrojs/preact';

export default defineConfig({
  integrations: [
    tailwind(),
    icon({
        // @ts-ignore
      include: ['mdi']
    }),
    vue(),
    preact(),
  ],
  build: {
    assets: 'assets'
  },
  output: 'static',
  trailingSlash: 'never'
});