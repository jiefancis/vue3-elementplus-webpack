/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-08-18 18:26:58
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-26 16:28:58
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

const app = createApp(App)
app.use(directives)
app.use(ElementPlus)
app.use(lang)
app.use(Components)
app.use(router)
app.use(store)
app.mount('#app')
