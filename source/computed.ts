/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-15 13:53:58
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-15 16:57:41
 */
import { reactiveEffect } from './effect'

export class ComputedImpl{
  _value = undefined
  setter = undefined
  getter = undefined
  effect: any
  constructor(
    getter,
    setter,
    options?: any
  ) {
    this.getter = getter
    this.setter = setter
    this.effect = new reactiveEffect(getter)
  }

  get value() {
    return this._value = this.effect.run()
  }
  set value(newVal) {
    this.setter(newVal)
  }
}
function isFunction(f) {
  return typeof f === 'function'
}
export function computed(getterOptions) {
  let getter, setter;
  if(isFunction(getterOptions)) {
    getter = getterOptions
    setter = function noop(){}
  } else {
    getter = getterOptions.get
    setter = getterOptions.set
  }
  return new ComputedImpl(getter, setter)
}


var state = {
  a: 1,
  b: 2
}
var count = computed(() => {
  return state.a + state.b
})


