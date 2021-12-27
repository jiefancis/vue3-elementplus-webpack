/*
 * @Descripttion: 
 * @version: 
 * @Author: wangjie
 * @Date: 2021-12-23 10:23:43
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-23 10:25:26
 */
const { fork } = require('child_process')
const forked = fork('child.js')
forked.on('message', (msg) => {
  console.log('message from child',msg)
})

forked.send({ hello: 'hello'})