/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-08-18 18:27:56
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-26 18:53:44
 */
import { createRouter, createWebHistory, useRoute } from 'vue-router'
import useRequireContext from '@/hooks/useRequireContext'

const dynamic: any = useRequireContext()

const global = [
  { path: '/401', component: () => import('@/page/global/401.vue') },
  { path: '/404', component: () => import('@/page/global/404.vue') },
  { path: '/login', component: () => import('@/page/global/login.vue') },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/layout/index.vue') }
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
        path: 'page_pollingSign_signRecord_signRecord',
        name: 'infos',
        component: () => import('@/page/infos/index.vue'),
        meta: { title: '个人信息' }
      }
    ]
  }
]

const routes = [...global, ...main, ...dynamic]

const router = createRouter({
  history: createWebHistory('/vue3/'),
  routes
})

router.afterEach(() => {
  console.log('router', router, useRoute())
})

export default router