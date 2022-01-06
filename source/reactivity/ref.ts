/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-20 15:06:17
 * @LastEditors: wangjie
 * @LastEditTime: 2022-01-06 10:07:49
 */
import { createDep } from './dep'
import { trackEffects, triggerEffects } from './effect'
export function ref(val) {
  return createRef(val)
}
export function createRef(val) {
  return isRef(val) ? val : new Refimpl(val)
}
export class Refimpl {
  dep: any[] = []
  _value: any
  __v_isRef: boolean = true
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

// reactive创建的proxy响应式对象解构仍保持响应式
export function toRefs(object) {
  const ret = Array.isArray(object) ? new Array(object.length) : {}
  for(const key in object) {
    ret[key] = toRef(object, key)
  }
  return ret
}
// impl实现类，实现接口
class ObjectRefImpl{
  _object: Record<string, any>
  _key: string
  __v_isRef: boolean
  constructor(object, key) {
    this._object = object
    this._key = key
    this.__v_isRef = true
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
  const val = object[key]
  return isRef(val) ? val : new ObjectRefImpl(object, key)
}
export function isRef(val) {
  return val && val.__v_isRef
}
export function unRef(val) {
  return isRef(val) ? val.value : val
}
