import { resolve } from 'node:path'

const nuxtClientEntry = resolve('node_modules/nuxt/dist/app/entry.js')
const nuxtServerEntry = resolve('node_modules/nuxt/dist/app/entry-spa.js')

export default defineNuxtConfig({
  compatibilityDate: '2026-06-24',
  ssr: false,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
          defer: true,
        },
        {
          src: 'https://code.iconify.design/2/2.0.3/iconify.min.js',
          defer: true,
        },
      ],
    },
  },

  css: ['~/assets/css/custom.css', '~/assets/css/index.css'],

  vite: {
    build: {
      rollupOptions: {
        input: {
          entry: nuxtClientEntry,
          server: nuxtServerEntry,
        },
      },
    },
  },

  nitro: {
    preset: 'static',
  },
})
