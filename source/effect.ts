/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-15 15:49:23
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-15 16:46:29
 */
// import
import { createDep } from './dep'

// @ts

let activeEffect: any = null
let targetMap: any = new WeakMap()
export class reactiveEffect{
  fn: any
  constructor(fn: Function) {
    this.fn = fn
  }
  run() {
    activeEffect = this
    return this.fn()
  }
}


export function track(target, key) {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  let deps = depsMap.get(key)
  if (!deps) {
    deps = createDep()
    depsMap.set(key, deps)
  }
  trackEffect(deps)
}
export function trackEffect(deps) {
  deps.add(activeEffect)
}

export function trigger(target, key, value) {
  let depsMap = targetMap.get(target)
  if (depsMap) {
    let deps = depsMap.get(key)
    if (deps) {
      deps.forEach(dep => dep.run())
    }
  }
}
