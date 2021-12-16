/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-08 20:57:54
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-16 11:21:54
 */
module.exports = (app) => {
  const { router, controller } = app;
  // router.get('/test', controller.user.test)
  router.resources('user', '/api/user', controller.user)
  router.get('/api/queryRole', controller.user.findUserRole)
  // router.post('/user/signin', controller.user.signin)
  // router.post('/user/signup', controller.user.signup)
  router.post('/api/user/sendMessage', controller.user.sendMessage)
}
