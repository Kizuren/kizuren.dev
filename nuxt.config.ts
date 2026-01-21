import type { SitemapUrlInput } from "@nuxtjs/sitemap";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

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

  sitemap: {
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
      { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
      { label: 'Change Frequency', select: 'sitemap:changefreq', width: '12.5%' }
    ],
    urls: async () => {
      const pages = ['/', '/projects', '/hire', '/contact'];
      const urls: SitemapUrlInput[] | PromiseLike<SitemapUrlInput[]> | { loc: string; alternatives: { hreflang: string; href: string; }[]; }[] = [];
      
      pages.forEach(page => {
        urls.push({
          loc: page,
          alternatives: [
            { hreflang: 'en', href: `https://kizuren.dev${page}` },
            { hreflang: 'ja', href: `https://xn--nck0a4k2a.xn--q9jyb4c${page}` },
            { hreflang: 'x-default', href: `https://kizuren.dev${page}` }
          ]
        });
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
