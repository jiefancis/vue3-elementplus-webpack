/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-15 13:53:58
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-15 15:49:17
 */


function isFunction(f) {
  return typeof f === 'function'
}
function computed(getterOptions) {
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

class ComputedImpl{
  _value = undefined
  constructor(
    getter,
    setter,
    options
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
var state = {
  a: 1,
  b: 2
}
var count = computed(() => {
  return state.a + state.b
})


