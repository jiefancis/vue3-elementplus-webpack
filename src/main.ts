/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-08-18 18:26:58
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-31 16:52:52
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

app.config.globalProperties.performance = true

// if(navigator.serviceWorker) {
//   window.addEventListener('DOMContentLoaded', function(){
//     navigator.serviceWorker.register('./sw.js').then(function(...args){
//       console.log('注册成功状态', args)
//       function heart() {
//         navigator.serviceWorker.controller?.postMessage('心跳机制')
//         // setTimeout(heart, 1000)
//       }
//       heart()

//     })
//   })
// }

// function autoConfig() {
//   const context: any = require.context('@/page/uiEngine', true, /\.vue$/)
//   console.log('contextcontextcontext', context, context.keys())
//   const components: Record<string, any> = {}
//   context.keys().forEach(function(key) {
//     console.log('keykeykey', key)
//   })
// }
// autoConfig()

// let microapps = [
//   {
//     name: 'app1',
//     entry: 'http://localhost:8081',
//     container: '#microContainer',
//     activeRule: '/app1/'
//   },
//   {
//     name: 'app2',
//     entry: '//localhost:8082', // const loadEntry = process.env.NODE_ENV === 'production' ? 'http://192.168.10.252:8098/polling-sign/' : '//localhost:8080'
//     container: '#microContainer',
//     activeRule: '/app2/'
//   },
//   {
//     name: 'common',
//     entry: 'http://localhost:8090',
//     container: '#microContainer',
//     activeRule: '/common/'
//   }
// ]
// registerMicroApps(microapps)
// // 启动 qiankun
// start()

var o = {
  a: 1,
  b: {
    c: '2'
  }
}
type typeO = typeof o
var O: typeO = {
  a: '1',
  b: 2
}

type p = Partial<typeO>
function getVal<T, P extends keyof T>(obj: T, key: P): T[P] {
  return obj[key]
}
getVal(o, 'c')


// wcs demo
// 一个拐角，两条路线
// [7,4] --> [4,4] --> [4,9]

// [7,4] --> [7,9] --> [4,9]

var list = [
  [0,0,0,1],
  [0,0,0,2],
  [0,0,0,3],
  [0,0,0,4,5,6,7,8,9],
  [0,0,0,5],
  [0,0,0,6],
  [0,0,0,7],
  [],
  [],
  []
]


function ensurePath(p1, p2) {
  let xPath = [], yPath = [];
  if(p1[0] === p2[0]) {
    let x1 = p1[1], x2 = p2[1],y = p1[0], gt =x1, lt = x2;
    if(x1 < x2) {
      gt = x2
      lt = x1
    }
    let dx = gt - lt, point = null
    while(dx) {
      point = list[lt+dx][y]
      if(![0, null, undefined].includes(point)) {
        xPath.push(point)
      }
      dx--
    }

  } else if(p1[1] === p2[1]) {
      let y1 = p1[0], y2 = p2[0], x = p1[1], gt = p1[0], lt = p2[0];
      if(y1 < y2) {
        gt = y2
        lt = y1
      }
      let dx = gt - lt, point = null
      while(dx) {
        point = list[x][lt+dx]
        if(![0, null, undefined].includes(point)) {
          yPath.push(point)
        }
        dx--
      }
    }
    return [xPath, yPath]
}
var p1 = [6,3] ,p2 = [3,], list = [
  [0,0,0,1],
  [0,0,0,2],
  [0,0,0,3],
  [0,0,0,4,5,6,7,8,9],
  [0,0,0,5],
  [0,0,0,6],
  [0,0,0,7],
  [],
  [],
  []
]
ensurePath([6,3], [3,3])
ensurePath([3,3], [3,8])
