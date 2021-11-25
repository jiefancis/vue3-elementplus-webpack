/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-08-18 18:27:56
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-19 15:08:58
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


function autoConfig() {
  const context: any = require.context('@/page/uiEngine', true, /\.vue$/)
  const components: Array<Record<string, any>> = []
  context.keys().forEach(function(key) {
    const module = {}
    const Module = context(key)
    console.log(module, 'keykeykey', key)
    let name = key.split(/[.\/]/)
    name = name[name.length - 2]
    module[name] = Module
    components.push(module)
  })
  return components
}


const main = [
  {
    path: '/formDesign',
    component: () => import('@/page/formDesign/index.vue')
  },
  {
    path: '/process',
    component: () => import('@/page/process/index.vue')
  },
  {
    path: '/',
    name: 'layout',
    redirect: '/formDesign',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'x6',
        component: () => import('@/page/antdV6/index.vue')
      },
      {
        path: 'components',
        name: 'components',
        component: () => import('@/page/components/index.vue'),
        meta: { title: 'components'}
      },
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
      },
      {
        path: 'virsual-list',
        name: 'virtualList',
        component: () => import('@/page/virtualList/index.vue'),
        meta: { title: '虚拟列表' }
      },
      {
        path: 'uiEngine',
        name: 'uiEngine',
        component: () => import('@/page/uiEngine/layout/layout.vue'),
        meta: { title: 'uiEngine' }
      },
      {
        path: 'micropage/:pathMatch(.*)*',
        name: 'micropage',
        component: () => import('@/page/micropage/index.vue'),
        meta: { title: '微应用挂载' }
      },
    ]
  }
]

const routes = [...global, ...main, ...dynamic]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach(() => {
  console.log('router', router, useRoute())
})

export default router
