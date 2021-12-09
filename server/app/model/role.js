/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-09 17:36:12
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-09 19:24:36
 */
module.exports = app => {
  const {INTEGER, STRING, BOOLEAN, DATE} = app.Sequelize
  const role = app.model.define('role', {
    id: { type: STRING, primaryKey: true, autoIncrement: true},
    name: STRING,
    code: STRING
  }, {
    timestamps: false,
    freezeTableName: true
  })
  return role
}
