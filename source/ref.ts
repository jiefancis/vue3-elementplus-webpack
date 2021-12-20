/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-20 15:06:17
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-20 17:02:15
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
