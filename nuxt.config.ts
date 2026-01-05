// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
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
      meta: [{ name: 'description', content: 'The official site for Kizuren.dev' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  ui: {
    theme: {
      colors: ['primary', 'pixelgreen', 'secondary', 'info', 'success', 'warning', 'error'],
    },
  },

  compatibilityDate: '2025-05-29',
});
