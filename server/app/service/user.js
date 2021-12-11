/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-09 10:14:59
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-11 17:53:43
 */
const BaseService = require('./base')
module.exports = class UserService extends BaseService{
  constructor(...args) {
    super(...args)
    this.entity = 'User'
  }
  async findUserRole(uname) {
    const { app } = this
    console.log('model.roleUser', app.model.roleUser, app.model.RoleUser)
    let result = await app.model.RoleUser.findAll({ where: { uname }})
    return result
  }
}
