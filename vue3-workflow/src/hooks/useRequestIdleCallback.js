/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-10-28 16:19:21
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-28 16:29:13
 */
export default function useRequestIdleCallback(cb) {

  /**
   * didTimeout boolean  true：callback正在被执行。
   * timeRemaining 当前闲置周期的预估剩余毫秒数，0表示已结束
   */
  let id = window.requestIdleCallback((IdleDeadline) => {
    cb(idleDeadline)
  })
  function cancelIdleCallback() {
    window.cancelIdleCallback(id)
  }
  return {
    cancelIdleCallback
  }
}