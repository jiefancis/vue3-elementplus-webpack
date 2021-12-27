/*
 * @Descripttion: 
 * @version: 
 * @Author: wangjie
 * @Date: 2021-12-23 10:50:06
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-23 11:31:16
 */
const cluster = require('cluster')
const os = require('os')
// cluster 是否在主进程上加载
console.log('cluster.workers', cluster.workers, cluster.isMaster)
if(!os.isMaster) {
  const cpus = os.cpus().length;
  console.log('forking for', cpus, 'CPUS')
  for(let i =0; i < cpus; i++) {
    // 当在主进程执行cluster.fork之后，当前的文件cluster.js将会被再次执行
    const forked = cluster.fork?.()
    forked?.on?.('message', (msg) => {
      console.log('message from ', msg)
    })
    process?.send?.({pid: process.pid})
  }
} else {
  // 根据cpu核数多次衍生我们的服务器
  require('./server.js')
}
// console.log('os.cpus', os.cpus().length, os.isMaster)




/**
 * cluster.workers 获取工作进程对象的列表
 * 
 */
// Object.values(cluster.workers).forEach(worker => { // 为每一个进程广播
//   worker.send('hello worker', worker.id)
// })

/**
 * 模拟服务器崩溃
 */
setTimeout(() =>{
  process.exit()
}, Math.random() * 10000) 

/**
 * 主进程
 */
cluster.on('exit', (worker, code, signal) => {
  if(code !== 0 && !worker.exitedAfterDisconnect) {
    console.log('工作进程' + worker.id + '崩溃了，正在开始一个新的进程'
    cluster.fork()
  }
})

/**
 * 在主进程中 cluster 表示主进程(用于监听、发送事件), process 是本身的进程，worker 表示子进程，通过 cluster.workers 获取
在子进程中 process 表示子进程(用于监听、发送事件),也可以通过 cluster.worker 表示当前子进程
cluster.worker.process 等价于 process(在子进程中)
 */