
export default {
  mode: "spa",
  /*
** Headers of the page
*/
  // Solution if the nuxt-app is not on the domain root.
  /* router: {
      mode: "hash",
      base: "/nuxt-pwa/"
  }, */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: process.env.npm_package_description || ""}
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "/favicon.ico"}
    ]
  },
  /*
** Customize the progress-bar color
*/
  loading: {color: "#fff"},
  /*
** Global CSS
*/
  css: [
    // Global scss
    "./assets/styles/main.scss"
  ],
  /*
** Plugins to load before mounting the App
*/
  plugins: [
  ],
  /*
** Nuxt.js dev-modules
*/
  buildModules: [
  ],
  /*
** Nuxt.js modules
*/
  modules: [
    "@nuxtjs/pwa",
    "@nuxtjs/axios"
  ],
  manifest: {
    name: "Nuxt PWA Example",
    short_name: "Nuxt PWA",
    lang: "en",
    display: "standalone",
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: "https://fonts.googleapis.com/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
      },
      {
        urlPattern: "https://api.spacexdata.com/v3/launches/upcoming",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
      }
    ]
  },
  axios: {
    // proxyHeaders: false
  },
  /*
** Build configuration
*/
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
};
