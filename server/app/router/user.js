/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-08 20:57:54
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-08 20:57:55
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/test', controller.user.test)
}
