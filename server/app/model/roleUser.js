/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-11 17:42:43
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-11 17:42:43
 */
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize
  return app.model.define('roleUser', {
    rname: STRING,
    uname: STRING,
    id: { type: STRING, primaryKey: true, autoIncrement: true}
  }, {
    timestamps: false,
    freezeTableName: true
  })
}
