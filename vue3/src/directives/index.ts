/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-09 15:19:13
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-13 10:48:24
 */
import permission from './permission'
import { App } from 'vue'

export default {
  install (app: App) {
    app.use(permission)
  }
}
