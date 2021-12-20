/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-17 17:06:14
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-20 09:23:48
 */
'use strict'
const CustomPlugin = require('./src/custom-plugin.js')
const path = require('path')
const { AutoWebPlugin } = require('web-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, dir)
}

console.log('resolve', resolve('src/custom-loader.js'))
const Timestamp = new Date().getTime()
const name = '鸿亚润达WMS系统' // 标题




// 使用本文的主角 AutoWebPlugin，自动寻找 pages 目录下的所有目录，把每一个目录看成一个单页应用
// const autoWebPlugin = new AutoWebPlugin('pages', {
//   template: './public/index.html', // HTML 模版文件所在的文件路径
//   postEntrys: ['./common.css'],// 所有页面都依赖这份通用的 CSS 样式文件
//   // 提取出所有页面公共的代码
//   commonsChunk: {
//     name: 'common',// 提取出公共代码 Chunk 的名称
//   },
// });

// console.log('autoWebPlugin.entry()', autoWebPlugin.entry())
// const port = 8231 // 端口

module.exports = {
  // publicPath: '',
  // pages: {
  //   index: {
  //     template: 'public/index.html',
  //     entry: 'src/main.ts',
  //     filename: 'index.html',
  //     title: 'index page',
  //     keywords: 'indexindexindex',
  //     description: 'index page multi page'
  //   },
  //   one: {
  //     template: 'public/index.html',
  //     entry: 'src/nested/one.ts',
  //     filename: 'one.html',
  //     title: 'one page',
  //     keywords: 'oneoneone',
  //     description: 'one page multi page'
  //   }
  // },
  // pages: {
  //   one: 'src/nested/one.ts',
  //   index: 'src/main.ts'
  // },
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // outputDir: 'enterprise',
  // outputDir: `dist-${process.env.NODE_ENV}`,
  // publicPath: process.env.VUE_APP_ROOT_MODEL,
  assetsDir: 'static',
  lintOnSave: false,
  runtimeCompiler: true,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: true,
  css: {
    sourceMap: true
  },
  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    // port: port,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7002',
        // target: `http://192.168.19.74:8080`,
        // target: `http://192.168.19.72:8080`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    disableHostCheck: true
  },
  // pages: {
  //   index: autoWebPlugin.entry()
  // },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    externals: {
      BMap: 'BMap'
    },
    // plugin: [
    //   autoWebPlugin
    // ],
    // plugins: [
    //   new CustomPlugin()
    // ],
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      // filename: `static/js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
      // chunkFilename: `static/js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
      filename: `static/js/[name].${Timestamp}.js`,
      chunkFilename: `static/js/[name].${Timestamp}.js`
    }
  },
  chainWebpack (config) {
    console.log('chainWebpack', config)
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // set svg-sprite-loader
    config.resolve.symlinks(true)
    config.module.rule('vue').use(resolve('src/custom-loader.js')).loader(resolve('src/custom-loader.js'))
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .add(resolve('src/remixIcon'))
      .add(resolve('src/colorfulIcon'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      // .use('svg-sprite-loader')
      .use(resolve('src/custom-loader.js'))
      // .loader('svg-sprite-loader')
      .loader(resolve('src/custom-loader.js'))
      .options({ symbolId: 'icon-[name]' })
      .end()
    config.module
      .rule('remixIcon')
      .test(/\.svg$/)
      .include.add(resolve('src/remixIcon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'remix-icon-[name]' })
      .end()
    config.module
      .rule('colorfulIcon')
      .test(/\.svg$/)
      .include.add(resolve('src/colorfulIcon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'colorful-icon-[name]' })
      .end()

    // config.module
    //   .rule()
    //   .test("require.resolve('snapsvg/dist/snap.svg.js')")
    //   .use('imports-loader?this=>window,fix=>module.exports=0')

    config.when(process.env.NODE_ENV === 'development', (config) =>
      config.devtool('cheap-source-map')
    )

    config.when(process.env.NODE_ENV !== 'development', (config) => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
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
            chunks: 'initial'
          },
          elementUI: {
            name: 'chunk-elementUI',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'),
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true
          }
        }
      })
      config.optimization.runtimeChunk('single')
    })
  }
}
