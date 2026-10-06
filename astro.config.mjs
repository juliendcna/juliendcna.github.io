import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dacunha.ovh',
  trailingSlash: 'ignore',
  scopedStyleStrategy: 'class',
  build: {
    inlineStylesheets: 'never',
  },
  vite: {
    // ship component scripts as cacheable files instead of inlining them into every page
    // one stylesheet for the whole site: a single render-blocking request instead of two
    build: { assetsInlineLimit: 0, cssCodeSplit: false },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr',
          es: 'es',
        },
      },
    }),
  ],
});
