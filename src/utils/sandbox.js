/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-10-27 16:56:19
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-28 16:28:02
 */
class snapshotSandbox{
  constructor() {
    this.modifyProps = {}
    this.windowSnapshot = {}
    this.sandboxRunning = true
  }
  iter(target, fn) {
    for(let key in target) {
      if(target.hasOwnProperty(key)) {
        fn(key)
      }
    }
  }
  active() {
    this.windowSnapshot = {}
    this.iter(window, function(prop) {
      this.windowSnapshot[prop] = window[prop]
    })

    Object.entries(this.modifyProps).forEach(([key, value]) => {
      window[key] = value
    })
    this.sandboxRunning = true
  }
  inactive() {
    this.sandboxRunning = false
    this.iter(window, function(prop){
      if(window[prop] !== this.windowSnapshot[prop]){
        this.modifyProps[key] = window[prop]
        window[prop] = this.windowSnapshot[prop]
      }
    })
  }
}


// proxy window action to fakewindow?
/**
 * loadApps -> createSandboxContainer创建沙箱 -> importHtmlEntry.execScripts(sandbox.proxy) -> eval(with(window).bind(proxy))
 *
 * import-html-entry包
 * 前端项目打包完后，import-html-entry获取到前端项目的js，并通过
 * `;(function(window, self, globalThis){with(window){;${scriptText}\n${sourceUrl}}}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);`
 *
 * (function(window, self, globalThis) 处理window.property情况
 * with(window) 处理 property的场景
 * 方式，讲代码中所有的js运行在proxy环境下
 */
class proxySandbox{
  constructor() {
    this.fakeWindow = {}

    const proxy = new Proxy(fakeWindow, {
      set(target, key, value) {
        if(target.hasOwnProperty(key)) {
          let { writable, enumerable, configurable }= Object.getOwnPropertyDescriptor(window, p) || {}
          if(writable) {
            Object.defineProperty(target, key, {
              writable,
              enumerable,
              configurable,
              value
            })
          } else {
            target[key] = value
          }
        }
      },
      get(target, key) {
        if(key === 'self' || key === 'window') {
          return proxy
        }
        return target[key]
      }
    })

    this.proxy = proxy
  }
}


const boundValue = Function.prototype.bind.call(value, target);

function getTargetValue(target: any, value: any): any {
  /*
    仅绑定 isCallable && !isBoundedFunction && !isConstructable 的函数对象，如 window.console、window.atob 这类，不然微应用中调用时会抛出 Illegal invocation 异常
    目前没有完美的检测方式，这里通过 prototype 中是否还有可枚举的拓展方法的方式来判断
    @warning 这里不要随意替换成别的判断方式，因为可能触发一些 edge case（比如在 lodash.isFunction 在 iframe 上下文中可能由于调用了 top window 对象触发的安全异常）
   */
  if (isCallable(value) && !isBoundedFunction(value) && !isConstructable(value)) {
    const cachedBoundFunction = functionBoundedValueMap.get(value);
    if (cachedBoundFunction) {
      return cachedBoundFunction;
    }

    const boundValue = Function.prototype.bind.call(value, target);

    // some callable function has custom fields, we need to copy the enumerable props to boundValue. such as moment function.
    // use for..in rather than Object.keys.forEach for performance reason
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const key in value) {
      boundValue[key] = value[key];
    }

    // copy prototype if bound function not have but target one have
    // as prototype is non-enumerable mostly, we need to copy it from target function manually
    if (value.hasOwnProperty('prototype') && !boundValue.hasOwnProperty('prototype')) {
      // we should not use assignment operator to set boundValue prototype like `boundValue.prototype = value.prototype`
      // as the assignment will also look up prototype chain while it hasn't own prototype property,
      // when the lookup succeed, the assignment will throw an TypeError like `Cannot assign to read only property 'prototype' of function` if its descriptor configured with writable false or just have a getter accessor
      // see https://github.com/umijs/qiankun/issues/1121
      Object.defineProperty(boundValue, 'prototype', { value: value.prototype, enumerable: false, writable: true });
    }

    functionBoundedValueMap.set(value, boundValue);
    return boundValue;
  }

  return value;
}
