/*
 * @Descripttion: 
 * @version: 
 * @Author: wangjie
 * @Date: 2021-12-23 10:56:19
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-23 11:05:04
 */
const http = require('http')
const pid = process.pid
http.createServer((req, res) => {
  console.log('pidpidpidpid', pid)
  for(let i = 0; i < 1e7; i++)
  res.end('handled by process.', pid)
}).listen(8080, () => {
  console.log('started process', pid)
})