/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-27 16:18:10
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-28 14:39:31
 */
import { app } from './apiInject'
import { piniaSymbol } from './createPinia'
export function defineStore(id, options) {
  const { state, getters, actions } = options
  function useStore() {
    const pinia = app.inject(piniaSymbol)
    createOptionsStore(id, options, pinia)
    const store = pinia._s.get(id)
    return store
  }
  useStore.$id = id
  return useStore
}

function createOptionsStore(id, options, pinia) {
  const { state, getters, actions } = options
  const localState = typeof state === 'function' ? state() : state
  // actions set this is localState
  Object.entries(getters).forEach(([key, fn]) => {
    localState[key] = fn
    toReactive(localState, key, fn)
  })
  Object.keys(actions).forEach(key => {
    actions[key] = actions[key].bind(localState)
  })
  const store = assign(localState, actions)
  pinia._s.set(id, store)
}


// function createSetupStore(id, setup, options, pinia) {
//   const partialStore = {
//     _p: pinia,
//     $patch,
//     $id,
//     $reset
//   }
//   const store = reactive(
//     assign({}, partialStore)
//   )
//   return store
// }
