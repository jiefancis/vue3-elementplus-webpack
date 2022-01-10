/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2022-01-10 13:51:56
 * @LastEditors: wangjie
 * @LastEditTime: 2022-01-10 13:59:15
 */
module.exports = app => {
  const { NUMBER, STRING, BOOLEAN,} = app.Sequelize
  const type = app.model.define('type',
  {
    id: { type: STRING, primaryKey: true, autoIncrement: true },
    name: { type: STRING },
    parent_id: { type: STRING },
    lavel: { type: NUMBER }
  },
  {
    timestamps: false,
    freezeTableName: true
  })

  return type
}
