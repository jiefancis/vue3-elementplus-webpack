/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-14 15:42:17
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-14 15:42:18
 */
var reactiveMap = new WeakMap()

function reactive(o){
  if(o && typeof o === 'object') {
    return createReactive(o)
  } else {
    return o
  }
}
function isObject(o) {
  return (o !== null) && (typeof o === 'object')
}
function markReactive(o) {
  if(isObject(o)) {
    o.__IS_REACTIVE = true
  }
}
function isReactive(o) {
  return o.__IS_REACTIVE
}
function createReactive(o) {
  let existingProxy = reactiveMap.get(o)
  if(existingProxy) {
    console.log('existingProxy', existingProxy)
    return existingProxy
  }
  let proxy = new Proxy(o, {
    get: proxyGetter(),
    set: proxySetter()
  })
  reactiveMap.set(o, proxy)
  return proxy
}
var plain = {a:1,b:{b:2,c:{c:3}}}
var p = reactive(plain)


// handlers
function proxyGetter() {
  return function(target, key, receiver) {
    let value = Reflect.get(target, key)
    console.log('create--get', key, value)
    if(isObject(value)) {
      console.log('value.__IS_REACTIVE', value.__IS_REACTIVE)
      // markReactive(value)
      return reactive(value)
    }
    return value
  }
}
function proxySetter() {
  return function(target, key, value, receiver) {
    let oldValue = Reflect.get(target,key)
    console.log(value,'set--', oldValue,target, key)
    if(isObject(value)) {
      // reactive(value)
      Reflect.set(target, key, reactive(value))
    } else {
      if(oldValue !== value) {
        console.log('not equal', oldValue !== value)
        Reflect.set(target, key, value)
      }
    }
    return true
  }
}
