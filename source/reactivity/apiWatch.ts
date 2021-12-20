/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-20 13:38:24
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-20 16:37:16
 */
/**
 * create effect => effect.run => get oldValue =>  ref get value => trackRefValue => ref.dep.push(effect)
 */
import { isFunction } from './computed'
import { reactiveEffect } from './effect'
import { isRef } from './shared'
export function watch(source, cb) {
  return doWatch(source, cb)
}
export function doWatch(source, cb) {
  let getter = null
  if(isFunction(source)) {
    getter = source
  } else if(isRef(source)) {
    getter = () => source.value
  } else {
    getter = () => source.value
  }
  let oldValue = undefined
  const job = () => {
    if(cb) {
      let newValue = effect.run()
      cb(newValue, oldValue)
      oldValue = newValue
    }
  }

  const effect = new reactiveEffect(source, job)
  if(cb) {
    oldValue = effect.run()
  } else {
    effect.run()
  }
  return () => {
    console.log('stop watch')
    
  }
}
