'use strict'
const path = require('path')
const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = '主动升级' // page title
const port = 23333 // dev port
const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  vant: 'vant',
  axios: 'axios'
}
// cdn
const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: [
      'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.4/polyfill.js',
      'https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js'
    ]
  },
  // 联调环境
  test: {
    css: [],
    js: [
      'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.4/polyfill.js',
      'https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js'
    ]
  },
  // 生产环境
  build: {
    css: ['https://cdn.jsdelivr.net/npm/vant@beta/lib/index.css'],
    js: [
      'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.4/polyfill.js',
      'https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.6/vue-router.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/vuex/3.1.1/vuex.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js',
      'https://cdn.jsdelivr.net/npm/vant@beta/lib/vant.min.js',
      'https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js'
    ]
  }
}
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    }
  },

  configureWebpack: config => {
    // 为生产环境修改配置...
    if (process.env.NODE_ENV === 'production') {
      // externals里的模块不打包
      Object.assign(config, {
        name: name,
        externals: externals
      })
    }
    // 为开发环境修改配置...
    if (process.env.NODE_ENV === 'development') {
      //
    }
    // 自动注入路由
    const pluginsPro = [
      new VueAutoRoutingPlugin({
        // Path to the directory that contains your page components.
        pages: 'src/pages',

        // A string that will be added to importing component path (default @/pages/).
        importPrefix: '@/pages/'
      })
    ]
    config.plugins = [...config.plugins, ...pluginsPro]
  },
  chainWebpack(config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    // alias
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('pages', resolve('src/pages'))
      .set('components', resolve('src/components'))
    /**
     * 添加CDN参数到htmlWebpackPlugin配置中， 详见public/index.html 修改
     */
    config.plugin('html').tap(args => {
      if (process.env.NODE_ENV === 'production') {
        args[0].cdn = cdn.build
      }
      if (process.env.NODE_ENV === 'test') {
        args[0].cdn = cdn.test
      }
      if (process.env.NODE_ENV === 'development') {
        args[0].cdn = cdn.dev
      }
      return args
    })

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 100000000 }))

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development', config => config.devtool('cheap-source-map'))
    config
    // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'test', config => config.devtool('cheap-source-map'))

    config.when(process.env.NODE_ENV !== 'development', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }
        ])
        .end()
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          // elementUI: {
          //   name: 'chunk-elementUI', // split elementUI into a single package
          //   priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
          //   test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          // },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      })
      config.optimization.runtimeChunk('single')
    })
  }
}
