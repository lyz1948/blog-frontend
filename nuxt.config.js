// const CONFIG = require('./config')

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/yk.ico' },
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_1321745_kggv2omezkf.css',
      },
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css?family=Source+Sans+Pro|Yantramanav&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['ant-design-vue/dist/antd.css', 'swiper/css/swiper.min.css', '@/assets/styles/index.styl'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/antd-ui', { src: '~plugins/ga.js', ssr: false }],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // '@nuxtjs/eslint-module'
    // 配置选项
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60,
      },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },
  proxy: {
    '/api/': {
      target: 'https://www.ykpine.com/api/',
      pathRewrite: {
        '^/api/': '',
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    postcss: {
      // 添加插件名称作为键，参数作为值
      // 使用npm或yarn安装它们
      plugins: {
        // 通过传递 false 来禁用插件
        'postcss-url': false,
        'postcss-nested': {},
        // 'postcss-responsive-type': {},
        // 'postcss-hexrgba': {}
      },
      preset: {
        // 更改postcss-preset-env 设置
        autoprefixer: {
          grid: true,
        },
      },
    },
  },
  server: {
    port: 5380,
    host: '0.0.0.0',
  },
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? 'ykpine' : '/',
  },
}
