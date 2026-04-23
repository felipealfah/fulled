// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://fulled.com.br',

  integrations: [
    react(),
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => {
        return !page.includes('/admin') && !page.includes('/private');
      },
    }),
    compress({
      CSS: true,
      HTML: {
        removeAttributeQuotes: false,
      },
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
  ],

  output: 'static',

  vite: {
    resolve: {
      alias: {
        '@data': '/src/data',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@utils': '/src/utils',
        '@styles': '/src/styles',
      },
    },
    build: {
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
          },
        },
      },
      cssCodeSplit: true,
      sourcemap: false,
      assetsInlineLimit: 4096,
    },
  },
});
