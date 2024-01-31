// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  ssr: true,
  spaLoadingTemplate: false,
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module', 'nuxt-simple-sitemap', '@vueuse/nuxt'],
  app: {
    pageTransition: {
      name: 'page', mode: 'out-in'
    },
    layoutTransition: {
      name: 'page', mode: 'out-in'
    }
  },
  css: [
    '~/assets/css/tailwind.css'
  ],
  components: {
    global: true,
    dirs: [
      '~/components'
    ]
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  eslint: {
    /* module options */
    lintOnStart: false
  },
  tailwindcss: {
    jit: true,
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 0 }],
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    config: {},
    viewer: false,
  }
})
