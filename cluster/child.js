/*
 * @Descripttion: 
 * @version: 
 * @Author: wangjie
 * @Date: 2021-12-23 10:22:26
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-23 10:23:37
 */
process.on('message', function(msg) {
  console.log('message from parent', msg)
})
let counter = 10
setInterval(() => {
  process.send({ counter: counter++})
}, 1000)