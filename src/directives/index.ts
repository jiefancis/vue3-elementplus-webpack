/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-09 15:19:13
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 11:24:09
 */
import permission from './permission'
import { App } from 'vue'

export default {
  install (app: App) {
    app.use(permission)
  }
}
