/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-11 17:37:05
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-11 17:42:26
 */
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize
  return app.model.define('rolePermission', {
    rname: STRING,
    pname: STRING,
    id: { type: STRING, primaryKey: true, autoIncrement: true}
  }, {
    timestamps: false,
    freezeTableName: true
  })
}
