/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-28 15:40:50
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-28 15:48:57
 */
import { toRef } from '../reactivity/ref'
export function storeToRefs(store) {
  let ret = {}
  Object.entries(store).forEach(([key,value]) => {
    ret[key] = toRef(store,key)
  })
  return ret
}
