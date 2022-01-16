export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MIS-LBU Proto',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https//go.nuxjs.dev/auth
    '@nuxtjs/auth-next',
    // https://sentry.nuxtjs.org
    '@nuxtjs/sentry',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Auth module configuration: https://auth.nuxtjs.org/providers/auth0
  auth: {
    strategies: {
      auth0: {
        domain: 'esbpcs.au.auth0.com',
        clientId: 'IYDle5tjv3nWNHnxK4IPubrLKQZqk06w',
        logoutRedirectUri: 'http://localhost:3000',
      },
    },
  },

  // Sentry module configuration: https://sentry.nuxtjs.org/guide/usage
  sentry: {
    dsn: 'https://975149ce624c4aeaba24e7796641caa0@o292739.ingest.sentry.io/1536665', // Enter your project's DSN here
    // Additional Module Options go here
    // https://sentry.nuxtjs.org/sentry/options
    config: {
      // Add native Sentry config here
      // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
