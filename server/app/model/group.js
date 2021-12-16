/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-16 10:46:16
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-16 11:09:06
 */
module.exports = app => {
  const { STRING } = app.Sequelize
  const group = app.model.define('group', {
    id: { type: STRING, primaryKey: true, autoIncrement: true },
    userids: STRING,
    nickname: STRING
  }, {
    timestamps: false,
    freezeTableName: true
  })
  return group
}
