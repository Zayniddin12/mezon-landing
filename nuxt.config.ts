// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      htmlAttrs: {
        lang: 'uz',
      },
      title: 'Mezon Platform',
      description:
        "Ilovamiz yordamida har bir ishchining samaradorligini kuzatib boring, hosil yig'ish jarayonini optimallashtiring va resurslaringizni yanada samarali boshqaring.",
      meta: [
        {
          property: 'og:title',
          content: 'Mezon Platform',
        },
        {
          property: 'og:description',
          content:
            "Ilovamiz yordamida har bir ishchining samaradorligini kuzatib boring, hosil yig'ish jarayonini optimallashtiring va resurslaringizni yanada samarali boshqaring.",
        },
        {
          property: 'og:image',
          content: '/defaultImg.png',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `/favicon.ico`,
        },
      ],
    },
  },

  css: [
    '~/assets/styles/tailwind.css',
    '~/assets/styles/main.css',
    '~/assets/styles/_toastification.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore', // import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
    'nuxt-svgo',
    '@nuxtjs/i18n',
  ],

  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix',
    locales: [
      { code: 'uz', file: 'uz.json' },
      { code: 'ru', file: 'ru.json' },
      { code: 'en', file: 'en.json' },
    ],
    defaultLocale: 'uz',
  },

  svgo: {
    autoImportPath: './assets/icons/',
  },

  nitro: {
    serveStatic: true,
  },

  devServerHandlers: [],

  runtimeConfig: {
    public: {
      baseURL: 'localhost',
    },
  },

  devServer: {
    port: 3000,
  },

  compatibilityDate: '2024-07-03',

  build: {
    transpile: ['vue-toastification', 'vue-kinesis'],
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  yandexMaps: {
    apikey: process.env.YANDEX_API_KEY, // TODO: Add yandex map api key
  },
})
