/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-09 18:30:05
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-15 18:43:46
 */
const BaseService = require('./base')
module.exports = class RoleService extends BaseService{
  constructor(...args) {
    super(...args)
    this.entity = 'Role'
  }
  async destroyBy(rname, pnames) {
    const { app, ctx } = this
    const t = await app.model.transaction()

    // let result = await app.model.RolePermission.create({rname: 'user', pname: '1'})
    // console.log('destroyBy', result)
    // return result
    try {
      // app.model 就是 Sequelize 的 instance 目前
      const order = await app.model.RolePermission.destroy({ where: { rname }, transaction: t})
      // console.log('bulkCreatebulkCreate', pnames)

      const datas = pnames.map(pname => { return { rname, pname }})
      // 批量创建
      await app.model.RolePermission.bulkCreate(datas, { transaction: t })
      // for(let pname of pnames) {
      //   await app.model.RolePermission.create({ rname, pname }, { transaction: t })
      // }
      // pnames.forEach(async pname => {
      //   await app.model.RolePermission.create({ rname, pname }, { transaction: t })
      // })
      t.commit()
      return true
    } catch(err) {
      await t.rollback()
      return false
    }
  }
  async findAllRnames() {
    const { app } = this
    // const result = await app.model.query('SELECT rname from rolePermission')
    const result = await app.model.RolePermission.findAll({ attributes: ['rname']})
    return result
  }
}
