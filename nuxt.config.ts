import type { SitemapUrlInput } from "@nuxtjs/sitemap";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  hooks: {
    'pages:extend'(pages) {
      for (const page of [...pages]) {
        pages.push({
          ...page,
          name: page.name ? `${page.name}-ja` : undefined,
          path: page.path === '/' ? '/ja' : `/ja${page.path}`,
        });
      }
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/sitemap',
  ],

  css: ['~/assets/main.css'],

  fonts: {
    families: [
      {
        name: 'Press Start 2P',
        weights: ['400'],
      },
    ],
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
  },

  app: {
    head: {
      title: 'Kizuren',
      meta: [
        { name: 'description', content: 'The official site for Kizuren.dev' },
        { property: 'og:site_name', content: 'Kizuren' },
        { property: 'og:type', content: 'website' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  site: {
    url: 'https://kizuren.dev',
  },

  routeRules: {
    '/_nuxt/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, immutable',
      },
    },
    '/icons/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, immutable',
      },
    },
    '/favicon*.ico': {
      headers: {
        'cache-control': 'public, max-age=31536000, immutable',
      },
    },
  },

  sitemap: {
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
      { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
      { label: 'Change Frequency', select: 'sitemap:changefreq', width: '12.5%' }
    ],
    urls: async () => {
      const pages = ['/', '/projects', '/hire', '/contact'];
      const urls: SitemapUrlInput[] = [];

      pages.forEach(page => {
        const jaPage = page === '/' ? '/ja' : `/ja${page}`;
        const alternatives = [
          { hreflang: 'en', href: `https://kizuren.dev${page}` },
          { hreflang: 'ja', href: `https://kizuren.dev${jaPage}` },
          { hreflang: 'x-default', href: `https://kizuren.dev${page}` }
        ];

        urls.push({ loc: page, alternatives });
        urls.push({ loc: jaPage, alternatives });
      });

      return urls;
    }
  },

  ui: {
    theme: {
      colors: ['primary', 'pixelgreen', 'secondary', 'info', 'success', 'warning', 'error'],
    },
  },

  compatibilityDate: '2026-01-06',
});
