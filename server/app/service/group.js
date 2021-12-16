/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-16 11:42:33
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-16 11:42:34
 */
const BaseService = require('./base')
module.exports = class GroupService extends BaseService{
  constructor(...args) {
    super(...args)
    this.entity = 'Group'
  }
}
