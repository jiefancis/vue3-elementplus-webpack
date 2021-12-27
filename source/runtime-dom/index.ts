/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-23 16:24:30
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-27 11:14:00
 */
import { createRender } from '../render-core'
function createElement(type) {
  return document.createElement(type)
}
function createText(text) {
  return document.createTextNode(text)
}
function setText(node, text) {
  node.nodeValue = text
}
function setElementText(el, text) {
  el.textContent = text
}

function insert(child, parent, anchor = null) {
  parent.insertBefore(child, anchor)
}
function remove(child) {
  let parent = child.parentNode
  parent && parent.removeChild(child)
}


let render = null
// 延迟渲染器，延迟渲染
function ensureRender() {
  return (render || (render = createRender({
    createElement,
    createText,
    setText,
    setElementText,
    insert,
    remove
  })))
}
export function createApp(root) {
  return ensureRender().createAapp(root)
}
