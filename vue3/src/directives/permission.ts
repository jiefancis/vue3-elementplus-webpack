/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-09 14:59:47
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-26 14:47:09
 */
import { App } from 'vue'
export default {
  install (app: App) {
    app.directive('permission', {
      created (el, binding, vnode, preVnode) {
        // console.log('permission-created', el, binding, vnode, preVnode)
      }
      // beforeMount (...arg) {
      //   console.log('permission-beforeMount', arg)
      // },
      // mounted (el, binding, vnode, preVnode) {
      //   console.log('permission-mounted', el)
      // },
      // beforeUpdate (...arg) {
      //   console.log('permission-beforeUpdate', arg)
      // },
      // updated (...arg) {
      //   console.log('permission-updated', arg)
      // },
      // beforeUnmount (...arg) {
      //   console.log('permission-beforeUnmount', arg)
      // },
      // unmounted (...arg) {
      //   console.log('permission-unmounted', arg)
      // }
    })
  }
}
