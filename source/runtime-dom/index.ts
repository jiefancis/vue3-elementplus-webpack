/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-23 16:24:30
 * @LastEditors: wangjie
 * @LastEditTime: 2022-01-07 11:11:59
 */
import { createRender } from '../render-core'
import * as  nodeOps from './nodeOps'
import { extend } from '../shared'


let render = null
const renderOptions = extend({}, nodeOps)
// 延迟渲染器，延迟渲染
function ensureRender() {
  return (render || (render = createRender(renderOptions)))
}
export function createApp(root) {
  return ensureRender().createAapp(root)
}
