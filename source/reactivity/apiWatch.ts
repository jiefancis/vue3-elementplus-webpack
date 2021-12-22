/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-20 13:38:24
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-20 18:18:03
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
  const scheduler = () => {
    if(cb) {
      let newValue = effect.run()
      cb(newValue, oldValue)
      oldValue = newValue
    }
  }

  const effect = new reactiveEffect(source, scheduler)
  if(cb) {
    oldValue = effect.run()
  } else {
    effect.run()
  }
  return () => {
    console.log('stop watch')
  }
}
