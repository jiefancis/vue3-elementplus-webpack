/*
 * @Descripttion: 国际化自动化注册
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-18 17:20:36
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 15:40:35
 */
const modules = {
  zh: {},
  en: {}
}
const context = require.context('@/i18n', true, /\.js$/)
const en = context.keys().filter((filePage) => filePage.includes('en'))
const zh = context.keys().filter((filePage) => filePage.includes('zh'))

en.filter((filePage) => !filePage.includes('index')).forEach((filePath) => {
  const content = context(filePath).default
  const fileName = filePath.split(/\//g).pop().split('.')[0]
  modules.en[fileName] = content
})

zh.filter((filePage) => !filePage.includes('index')).forEach((filePath) => {
  const content = context(filePath).default
  const fileName = filePath.split(/\//g).pop().split('.')[0]
  modules.zh[fileName] = content
})

export default modules
