/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-17 17:06:14
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-11 16:30:57
 */
'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
const Timestamp = new Date().getTime()
const name = '鸿亚润达WMS系统' // 标题

// const port = 8231 // 端口

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // outputDir: 'enterprise',
  // outputDir: `dist-${process.env.NODE_ENV}`,
  // publicPath: process.env.VUE_APP_ROOT_MODEL,
  assetsDir: 'static',
  lintOnSave: false,
  runtimeCompiler: true,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    // port: port,
    proxy: {
      '/api': {
        target: '192.168.10.246:8331',
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
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      // filename: `static/js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
      // chunkFilename: `static/js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
      filename: `static/js/[name].${Timestamp}.js`,
      chunkFilename: `static/js/[name].${Timestamp}.js`
    }
  },
  chainWebpack (config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // set svg-sprite-loader
    config.resolve.symlinks(true)
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
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
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
