/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2022-01-07 11:08:06
 * @LastEditors: wangjie
 * @LastEditTime: 2022-01-07 11:09:11
 */
export function createElement(tagName) {
  return document.createElement(tagName)
}
export function createText(text) {
  return document.createTextNode(text)
}
export function setText(node, text) {
  node.nodeValue = text
}
export function setElementText(el, text) {
  el.textContent = text
}

export function insert(child, parent, anchor = null) {
  parent.insertBefore(child, anchor)
}
export function remove(child) {
  let parent = child.parentNode
  parent && parent.removeChild(child)
}
