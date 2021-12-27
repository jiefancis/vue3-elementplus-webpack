/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-23 17:05:10
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-23 17:05:11
 */
export function createVNode(type) {
  const vnode = {
    el: null,
    type
  }
  return vnode
}
