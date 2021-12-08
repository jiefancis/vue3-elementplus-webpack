/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-08 20:09:10
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-08 20:24:19
 */
module.exports = (options,app) => {
  return async function log(ctx, next){
    await next()
    console.log(options,'middleware', app.config)
  }
}
