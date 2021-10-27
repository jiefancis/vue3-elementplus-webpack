/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-10-27 17:49:39
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-27 18:37:18
 */

// const { getMicroAppStateActions } = require("qiankun/es/globalState")

/**
 *
 * @param {*} state
 * @return onGlobalStateChange(callback)
 */
// let globalState : Record<string, any>  = {}
// let deps: Record<string, function> = {}
let globalState = {}
let deps = {}
function initGlobalStateChange(state) {
  let prevGlobalState = deepClone(globalState)
  globalState = deepClone(state)
  emitGlobal(globalState, prevGlobalState)
  return getMicroAppStateActions(`global-${+Date.now()}`)
}

function emitGlobal(state, prevState) {
  Object.keys(deps).forEach(id => {
    if(deps[id] instanceof Function) {
      deps[i](state, prevState)
    }
  })
}

function getMicroAppStateActions(id, isMaster){
  return {
    onGlobalStateChange(callback) {
      deps[id] = callback
    },
    setGlobalState(state) {
      const prevGlobal = deepClone(globalState)
      if(isMaster) {
        Object.keys(state).forEach(key => {
          Object.assign(globalState, {[key]: state[key]})
        })
      }
      emitGlobal(deepClone(globalState), prevGlobal)
    }
  }

}