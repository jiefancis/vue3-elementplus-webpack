/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-27 16:18:10
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-27 16:22:23
 */

import { piniaSymbol } from './createPinia'
export function defineStore(id, options) {
  const useStore = function(id, options) {
    const pinie = inject(piniaSymbol)
    return createOptionsStore(id, options, pinia)
  }
  useStore.$id = id
  return useStore
}

function createOptionsStore(id, options, pinia) {
  const { state, getters, actions } = options
  const setup = function() {
    return Object.assign(state, getters, actions)
  }
  return createSetupStore(id, setup, options, pinia)
}

function createSetupStore(id, setup, options, pinia) {
  const partialStore = {
    _p: pinia,
    $patch,
    $id,
    $reset
  }
  const store = reactive(
    assign({}, partialStore)
  )
  return store
}
