/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-28 14:25:21
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-28 14:27:41
 */
export const app = {
  provideInstance: {},
  provide(key, value) {
      app.provideInstance[key] = value
  },
  inject(key, defaultValue?: any) {
      if(![null, undefined].includes(defaultValue)) {
          return defaultValue
      }
      return app.provideInstance[key]
  },
  use(o) {
      o.install(app)
  }
}
