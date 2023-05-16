require(`dotenv`).config()

export default {
  mode: `spa`,
  /*
   ** Headers of the page
   */
  head: {
    title: `FileNow.me`,
    // script: [{ src: `http://localhost:8098` }],
    meta: [
      { charset: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      {
        hid: `description`,
        name: `description`,
        content: `Website for helping you get to those important legal sites you can't remember the address for.`,
      },
    ],
    link: [{ rel: `icon`, type: `image/x-icon`, href: `/favicon.png` }],
  },
  pwa: {
    meta: {
      appleStatusBarStyle: `black-translucent`,
      themeColor: `#202F64`,
      ogHost: `https://filenow.me`,
      ogSiteName: `FileNow.me`,
      ogType: `website`,
      ogTitle: `FileNow.me`,
      ogDescription: `Website for helping you get to those important legal sites you can't remember the address for.`,
      nativeUi: true,
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: `#202F64` },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [`~/plugins/VueCookies`, `~/plugins/VueGoogleAnalyticsTag`],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    `@nuxtjs/eslint-module`,
    `@nuxtjs/stylelint-module`,
    `@nuxtjs/tailwindcss`,
    `@nuxtjs/google-analytics`,
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [`@nuxtjs/pwa`, `@nuxtjs/dotenv`, `@nuxtjs/axios`],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
