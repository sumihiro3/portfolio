import colors from "vuetify/es5/util/colors";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: "og: http://ogp.me/ns#"
    },
    titleTemplate: "%s | Sumihiro Kagawa's Portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Sumihiro Kagawa's Portfolio"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Sumihiro Kagawa's Portfolio"
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://sumihiro3.netlify.com"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Sumihiro Kagawa's Portfolio"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Sumihiro Kagawa's Portfolio"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://sumihiro3.netlify.com/images/ogp.png"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@sumihiro3"
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@sumihiro3"
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://sumihiro3.netlify.com/images/ogp.png"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
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
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.lightBlue.darken4,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  generate: {
    fallback: true
  },
  /*
   ** Build configuration
   */
  build: {
    filenames: {
      app: ({ isDev }) => (isDev ? "[name].[hash].js" : "[chunkhash].js"),
      chunk: ({ isDev }) => (isDev ? "[name].[hash].js" : "[chunkhash].js")
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
