/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-08-18 18:26:58
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-26 16:58:37
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import directives from './directives'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import lang from './i18n'
import Components from '@/components'
import '@/assets/css/reset.scss'

import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-alpine.css"

import naive from 'naive-ui'


import { registerMicroApps, start } from 'qiankun'

const app = createApp(App)
app.use(router)
app.use(directives)
app.use(ElementPlus)
app.use(lang)
app.use(Components)
app.use(store)
app.use(naive)
app.mount('#app')



new Promise((resolve, reject) => {
  function invokeRoute(location) {
    return () => location.pathname.startsWith('/vue3/page_pollingSign')
  }

  registerMicroApps([
    {
      name: '巡检管理',
      entry: 'http://localhost:8080/', // const loadEntry = process.env.NODE_ENV === 'production' ? 'http://192.168.10.252:8098/polling-sign/' : '//localhost:8080'
      container: '#microAppContainer',
      activeRule: invokeRoute(window.location)
    }
  ])
  // 启动 qiankun
  start()
  resolve(true)
})
