export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "md5",
    htmlAttrs: {
      lang: "en",

      script: [
        /*         {
          src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
        }, */
      ],
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    script: [
      {
        src: "https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.js",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "nuxt-gmaps",
      {
        key: "AIzaSyAxIH39-UUfqXPFcKgNyeMRFfz6MW7lZvE",
      },
    ],
    "nuxt-breakpoints",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
