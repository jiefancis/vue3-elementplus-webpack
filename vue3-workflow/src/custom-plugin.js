/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-19 13:45:05
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-19 14:17:47
 */
class CustomPlugin {
  constructor()　{
    this.flag = false
  }
  apply(compiler) {
    if(!this.flag) {
      console.log('customPlugin', arguments)
    }
    compiler.hooks.done.tap(
      'CustomPlugin',
      (compilation, callback) => {
        if(!this.flag) {
          this.flag = true
          console.log('示例插件', compilation.getAssets())
        }
        callback()
      }
    )
  }
}

module.exports = CustomPlugin
