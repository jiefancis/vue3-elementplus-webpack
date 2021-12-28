/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-20 15:06:17
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-28 15:50:11
 */
import { createDep } from './dep'
import { trackEffects, triggerEffects } from './effect'
export function ref(val) {
  return createRef(val)
}
export function createRef(val) {
  return new Refimpl(val)
}

export class Refimpl {
  dep: any[]
  _value: any
  constructor(val) {
    this._value = val
  }
  get value() {
    trackRefValue(this)
    return this._value
  }
  set value(newValue) {
    triggerRefValue(this,newValue)
    this._value = newValue
  }
}

export function trackRefValue(ref) {
  if(!ref.dep) {
    ref.dep = createDep()
  }
  trackEffects(ref.dep)
}
export function triggerRefValue(ref,newValue) {
  triggerEffects(ref.dep)
}



class ObjectRefImpl{
  _object: Record<string, any>
  _key: string
  constructor(object, key) {
    this._object = object
    this._key = key
  }
  get value() {
    return this._object[this._key]
  }
  set value(newVal) {
    this._object[this._key] = newVal
  }
}
/**
 * proxy对象中某一个属性解构，当调用 toREf(proxy, key).value触发proxy getter收集依赖
 * @param object proxy对象
 * @param key
 * @returns
 */
export function toRef(object, key) {
  return new ObjectRefImpl(object, key)
}
