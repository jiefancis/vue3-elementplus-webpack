/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-18 17:20:36
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-18 17:24:38
 */
const modules = {
  zh: {},
  en: {}
}
const context = require.context('@/i18n', true, /\.js$/)
const en = context.keys().filter(filePage => filePage.includes('en'))
const zh = context.keys().filter(filePage => filePage.includes('zh'))

en.filter(filePage => !filePage.includes('index')).forEach(filePath => {
  const content = context(filePath).default
  const fileName = filePath.split(/\//g).pop().split('.')[0]
  // console.log(fileName, 'lang--content', content)
  modules.en[fileName] = content
})
zh.filter(filePage => !filePage.includes('index')).forEach(filePath => {
  const content = context(filePath).default
  const fileName = filePath.split(/\//g).pop().split('.')[0]
  // console.log(fileName, 'lang--content', content)
  modules.zh[fileName] = content
})
console.log('hooks---useI18n', modules)

export default modules
