// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ],

  css: [
    "~/assets/main.css"
  ],
  
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
  },
  
  app: {
    head: {
      title: 'MarcUs7i.Net',
      meta: [
        { name: 'description', content: 'The official site for MarcUs7i.Net' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  compatibilityDate: '2025-03-22',
})