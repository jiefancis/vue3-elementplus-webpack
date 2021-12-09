/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-08 18:54:18
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-09 19:39:28
 */
const BaseController = require('./base')
const jwt = require('jsonwebtoken')
module.exports = class UserController extends BaseController{
  constructor(...args) {
    super(...args)
    this.entity = 'User'
  }
}
