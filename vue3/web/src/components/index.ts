/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-22 15:13:25
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-22 15:24:13
 */
import { App, Component } from 'vue'

interface CustomComponent{
  name: string,
  cpt: Component
}
const components: CustomComponent[] = []
const context = require.context('@/components', true, /\.vue$/)
context.keys().forEach((filePath: any) => {
  const cpt = context(filePath)
  const cptName = filePath.split(/\//g).pop()[0].split('.')[0]
  components.push({ name: cptName, cpt })
})
console.log('组件注册', components)

export default {
  install (app: App): void {
    components.forEach(item => {
      app.component(item.name, item.cpt)
    })
  }
}
