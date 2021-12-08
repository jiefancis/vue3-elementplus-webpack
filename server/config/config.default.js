/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-07 16:35:12
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-08 20:24:11
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1638866107269_8774';

  // add your middleware config here
  config.middleware = ['log']
  config.log = {
    threshold: 1024
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // config.cors = {
  //   origin: '*'
  // }
  // domainWhiteList
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['http://localhost:8080']
  };
  config.cors = {
    origin:'*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  config.multipart = {
    mode: 'file'
  };
  config.jwtSecret="abcd"
  return {
    ...config,
    ...userConfig,
  };
};
