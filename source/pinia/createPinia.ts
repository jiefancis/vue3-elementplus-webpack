/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-27 16:16:07
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-27 16:18:04
 */
export const piniaSymbol = Symbol('pinia')
export function createPinia() {
  const pinia = {
    install(app) {
      app.provide(piniaSymbol, pinia),
      app.config.globalProperties.$pinia = pinia
    }
  }
}
// app.use(createPinia())

