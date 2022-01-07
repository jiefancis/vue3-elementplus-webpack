/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2022-01-07 13:40:28
 * @LastEditors: wangjie
 * @LastEditTime: 2022-01-07 14:03:53
 *
 */
/**
function createApp(...args) {
  return ensureRender().createApp(...args)
}
function ensureRender() {
  return render || (render = createRender(renderOptions))
}
function createRender(options) {
  return {
    render,
    createApp: createAppAPI(render)
  }
}
 */
import { createVNode } from './vnode'

export function createContext() {
  return  {
    app: null,
    directive: {},
    component: {},
    provide: new WeakMap(),
    config: {
      errorHandler: null
    },
  }
}
export function createAppAPI(render: Function) {
  return function createApp(rootComponent) {
    const context = createContext()
    const installedPlugins = new Set()
    const app = {
      get config(){
        return context.config
      },
      directive(name, directive) {
        context.directive[name] = directive
      },
      use(plugin, options?:any) {
        if (！installedPlugins.has(plugin)) {
          installedPlugins.add(plugin)
          plugin.install(app, options)
        }
      },
      provide(key, value) {
        context.provide[key] = value
      },
      component(name, component) {
        context[name] = component
      },
      mount(rootComponent) {
        const vnode = createVNode(rootComponent)
        render(vnode, rootComponent)
      }
    }
    return app
  }
}
