/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-30 18:00:46
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-30 18:41:20
 */
export function catchAssets() {
  window.addEventListener('error', catchErrorEvent, true)
}

function catchErrorEvent(e) {
  const {
    baseURI,
    currentSrc,
    nodeName,
    outerHTML,
    tagName
  } = e.target

  const uploadData = {
    type: e.type,
    baseURI,
    currentSrc,
    nodeName,
    outerHTML,
    tagName
  }

  console.log(uploadData, 'eeeee', e)
}
