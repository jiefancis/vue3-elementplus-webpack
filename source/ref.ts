/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-20 15:06:17
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-20 15:13:50
 */
import { createDep } from './dep'
import { trackEffects } from './effect'
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
    this._value = newValue
  }
}

export function trackRefValue(ref) {
  if(!ref.dep) {
    ref.dep = createDep()
  }
  trackEffects(ref.dep)
}
