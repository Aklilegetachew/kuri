export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kuriftu-aman',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/kuriftufavicon.svg' },
      { rel: 'stylesheet', type: "text/css", href: 'https://unpkg.com/swiper/swiper-bundle.min.css' },
    ],
    script: [
      { src: 'https://unpkg.com/swiper/swiper-bundle.min.js', defer: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', defer: true },
      // { src: 'https://player.vimeo.com/api/player.js', defer: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/style.scss',
    '~/assets/css/t-datepicker.min.css',
    '~/assets/css/themes/t-datepicker-green.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/gsap.js', mode: 'client' },
    { src: '~/plugins/t-datepicker.min.js', mode: 'client' },
    { src: '~/plugins/vue-stack-grid.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
