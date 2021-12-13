/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-09 18:14:40
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-13 15:30:23
 */
const BaseController = require('./base')
module.exports = class RoleController extends BaseController{
  constructor(...args) {
    super(...args)
    this.entity = 'role'
  }
  async setPermission() {
    const { app, ctx, service } = this
    const { rname, pnames } = ctx.request.body
    console.log('setPermission-controller', rname, pnames, typeof pnames)
    let result = await service.role.destroyBy(rname, pnames.split(','))
    if(result) {
      ctx.status = 200
      ctx.body = {
        code: 0,
        message: result
      }
    } else {
      ctx.status = 500
      ctx.body = {
        code: 500,
        message: result
      }
    }
  }
  async findAllRnames() {
    const { app, service } = this
    const result = await service.role.findAllRnames()
    this.ctx.status = 200
    this.ctx.body = {
      code: 0,
      data: result
    }
  }
}

