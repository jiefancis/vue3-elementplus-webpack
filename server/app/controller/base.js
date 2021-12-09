/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-09 10:13:15
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-09 18:29:02
 */
const Controller = require('egg').Controller
module.exports = class BaseContrller extends Controller{
  async index() {
    const { ctx, service } = this;
    let result = await service[this.entity].index()
    ctx.status = 200
    ctx.body = {
      code: 0,
      data: result
    }
  }
  async create() {
    const { ctx, service } = this;
    const body = ctx.request.body
    let result = await service[this.entity].create(body)
    ctx.status = 200
    ctx.body = {
      code: 0,
      data: result
    }
  }
  async update() {
    const { ctx, service } = this;
    const body = ctx.request.body
    const id = ctx.params.id
    body.id = id
    console.log('controller', body)
    let result = await service[this.entity].update(body)
    ctx.status = 200
    ctx.body = {
      code: 0,
      data: result
    }
  }
  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id
    let result = await service[this.entity].destroy(id)
    ctx.status = 200
    ctx.body = {
      code: 0,
      data: result
    }
  }
}
