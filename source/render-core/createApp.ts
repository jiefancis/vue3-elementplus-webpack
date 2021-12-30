/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-23 16:52:29
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-29 14:53:53
 */
import { createVNode } from './vnode'
export function createAppAPI(render) {
  return function createApp(rootComponent) {
    const app = {
      root: rootComponent,
      mount(rootContainer) {
        const vnode = createVNode(rootComponent)
        render(vnode, rootContainer)
      }
    }
    return app
  }
}
