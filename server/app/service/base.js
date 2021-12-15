/*
 * @Descripttion:
 * @version :
 * @Author: wangjie
 * @Date: 2021-12-09 10:15:09
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-15 18:57:05
 */
const Service = require('egg').Service
module.exports = class BaseService extends Service{
  async index() {
    const { app } = this;
    console.log(app.model,'this.entity', this.entity)
    let result = await app.model[this.entity].findAndCountAll()  // ({offset: 5, limit: 5})
    return result
  }
  async create(payload) {
    const { app } = this
    let result = await app.model[this.entity].create(payload)
    return result
  }
  async update(payload) {
    const { app } = this
    let result = await app.model[this.entity].update(payload, {where: {id: payload.id}})
    return result
  }
  async destroy(id) {
    const { app } = this
    let result = await app.model[this.entity].destroy({where: {id}})
    return result
  }
}
