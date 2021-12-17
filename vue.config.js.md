<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-17 16:05:25
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-17 16:53:13
-->

```
// 内置
const { BannerPlugin, AutomaticPrefetchPlugin, optimize } = require('webpack')
module.exports = {
  chainWebpack: config => {

    // webpack自身并不提供，use(pluginname, pluginParams)
    config.plugin('HtmlWebpackPlugin').use('html-webpack-plugin',[  {
      title: 'jqxweigets',
      filename: 'jqx.html',
      template: 'public/index.html',
      base: 'http://localhost:7001/'
    }]).tap(args => {
      console.log('html-webpack-plugin', args)
      return args
    })
    // .use('html-webpack-plugin', [
      // {
      //   title: 'jqxweigets',
      //   filename: 'jqx.html',
      //   template: 'public/index.html',
      //   base: 'http://localhost:7001/'
      // }
    // ] ).end()

    // webpack自身提供，plugin(name)决定使用的插件名字，tap可以修改插件参数
    config.plugin('define').tap(args => {
      console.log('define', args)
      args[0]['BASE_URL'] = "'/a/'"
      // args[0]['process.env'] = "'/a/'"
      console.log('define--after', args)
      return args
    })

    console.log('AutomaticPrefetchPlugin', args)
      return args
    })

    config.plugin('SplitChunksPlugin').use(optimize.SplitChunksPlugin, [{
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      }
    }]).tap(args => {
      console.log('SplitChunksPlugin', args)
      return args
    })


    return config
  }
}
```

> use(plugin, [])
