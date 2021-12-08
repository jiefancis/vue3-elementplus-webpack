/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-07 16:35:12
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-08 20:59:15
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/file/upload', controller.home.upload)
  router.get('/signin', controller.user.signin)
  router.get('/signup', controller.user.signup)
  require('./router/user.js')(app)
};
