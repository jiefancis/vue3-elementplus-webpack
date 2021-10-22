/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-08-18 18:27:56
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 15:57:33
 */
import { createRouter, createWebHistory } from 'vue-router'
import useRequireContext from '@/hooks/useRequireContext'

const dynamic: any = useRequireContext()

const global = [
  { path: '/401', component: () => import('@/page/global/401.vue') },
  { path: '/404', component: () => import('@/page/global/404.vue') },
  { path: '/login', component: () => import('@/page/global/login.vue') }
]

const main = [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'reduce',
        name: 'reduce',
        component: () => import('@/page/list/index.vue'),
        meta: { title: '减法' }
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('@/page/searchForm/index.vue'),
        meta: { title: '首页' }
      },
      {
        path: 'add',
        name: 'add',
        component: () => import('@/page/setup/index.vue'),
        meta: { title: '加法' }
      },
      {
        path: 'debug',
        name: 'debug',
        component: () => import('@/page/debug/index.vue'),
        meta: { title: '找bug' }
      },
      {
        path: 'infos',
        name: 'infos',
        component: () => import('@/page/infos/index.vue'),
        meta: { title: '个人信息' }
      }
    ]
  }
]

const routes = [...global, ...main, ...dynamic]

const router = createRouter({
  history: createWebHistory('/base/'),
  routes
})

export default router
