/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-19 20:35:52
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-19 20:59:28
 */
var cacheKey = new Date().toISOString()

var cacheWhiteList = [cacheKey]
var cacheFileList = [
  '/index.html',
  'app.js',
  'app.css'
]

// 监听install事件，service worker注册
self.addEventListener('install', function(event) {
  console.log('serviceWorker注册成功')
  // 等待所有资源缓存完成时，才可以进行下一步
  event.waitUntil(
    caches.open(cacheKey).then(function(cache) {
      console.log('caches.open')
      // 需要缓存的文件 URL 列表
      return cache.addAll(cacheFileList)
    })
  )
})

window.navigator.serviceWorker.addEventListener('message', function(...args) {
  console.log('onmessage', args)
})
