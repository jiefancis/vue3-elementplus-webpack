/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-27 16:16:07
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-28 14:26:59
 */
export const piniaSymbol = Symbol('pinia')
export function createPinia() {
  const pinia = {
    install(app) {
      app._a = app
      app.provide(piniaSymbol, pinia),
      app.config.globalProperties.$pinia = pinia
    },
    _a: null,
    _s: new Map()
  }
  return pinia
}
// app.use(createPinia())

