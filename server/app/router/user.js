/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-08 20:57:54
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-09 19:40:24
 */
module.exports = (app) => {
  const { router, controller } = app;
  // router.get('/test', controller.user.test)
  router.resources('user', '/api/user', controller.user)
  // router.post('/user/signin', controller.user.signin)
  // router.post('/user/signup', controller.user.signup)
}
