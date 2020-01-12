require(`dotenv`).config()

export default {
  mode: `spa`,
  /*
   ** Headers of the page
   */
  head: {
    title: `FileNow.me`,
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
  /*
   ** Customize the progress-bar color
   */
  loading: { color: `#7D8FE8` },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    `@nuxtjs/eslint-module`,
    `@nuxtjs/stylelint-module`,
    `@nuxtjs/tailwindcss`,
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [`@nuxtjs/pwa`, `@nuxtjs/dotenv`],
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
