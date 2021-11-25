/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-10-27 14:57:04
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-27 15:05:25
 */

export default function useFullscreen(idOrEl) {
  let target = null
  if(typeof idOrEl === 'string') {
    target = document.querySelector(idOrEl)
  } else if(idOrEl?.nodeType) {
    target = idOrEl
  } else {
    target = document.body
  }

  function onfullscreenchange(cb) {
    target.onfullscreenchange = cb
  }
  function openFullscreen() {
    return  target.requestFullscreen()
  }
  function exitFullscreen() {
    document.exitFullscreen()
  }

  return {
    openFullscreen,
    exitFullscreen,
    onfullscreenchange
  }
}