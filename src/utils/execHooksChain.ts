/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-10-27 16:55:47
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-27 16:55:47
 */


function execHoosChain(list) {
  return list.reduce((hook, chain) => hook().then(chain), Promise.resolve())
}


var logs = ['1', '2', '3']
function makePromise(logs) {
  return logs.map((info,index) => {
    return new Promise((resolve , reject) => {
      setTimeout(() => {
        console.log(info, Date.now())
        resolve(info)
      }, (index +1) * 1000)
    })
  })
}
let chains =makePromise(logs)
function execHooksChain(chains) {
  return chains.reduce((chain, hook) => chain.then(hook), Promise.resolve())
}