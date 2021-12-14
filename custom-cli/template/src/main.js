/*
 * @Descripttion: 
 * @version: 
 * @Author: sea
 * @Date: 2021-07-23 14:32:15
 * @LastEditors: wangjie
 * @LastEditTime: 2021-08-16 17:00:59
 */

import Vue from 'vue'
import App from './App.vue'

Vue.use(button)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
