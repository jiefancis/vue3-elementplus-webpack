/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-17 18:01:48
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-17 18:03:22
 */
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 可选
    isAdmin?: boolean,
    // 每个路由必须声明
    requiresAuth: boolean
  }
}
