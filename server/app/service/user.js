/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-09 10:14:59
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-09 19:30:15
 */
const BaseService = require('./base')
module.exports = class UserService extends BaseService{
  constructor(...args) {
    super(...args)
    this.entity = 'User'
  }
}
