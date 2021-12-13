/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-07 16:35:12
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-13 15:23:09
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/file/upload', controller.home.upload)
  require('./router/user.js')(app)
  router.resources('role', '/api/role', controller.role)
  router.resources('permission', '/api/permission', controller.permission)

  router.post('/api/role/setPermission', controller.role.setPermission)
  router.get('/api/role/findAllRnames', controller.role.findAllRnames)
};
