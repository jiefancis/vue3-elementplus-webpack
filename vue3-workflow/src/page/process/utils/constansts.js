/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-15 11:39:34
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-15 14:35:45
 */
export const nodeTypes = {
  'APPLY': 'APPLY',
  'DATAADD': 'DATAADD',
  'DATAUPDATE':  'DATAUPDATE',
  'DATADEL': 'DATADEL',
  'QUERYDATA': 'QUERYDATA',
  'QUERYDATABASE': 'QUERYDATABASE',
  'FILL': 'FILL',
  'CC': 'CC',
  'NOTIFY': 'NOTIFY',
  'SMS': 'SMS',
  'FINISH': 'FINISH',
  'CODE': 'CODE',
  'CHILDFLOW': 'CHILDFLOW',
  'WEBHOOK': 'WEBHOOK'
}

export const nodeTypeNameMap = {
  'APPLY': '审批节点',
  'DATAADD': '新增数据节点',
  'DATAUPDATE':  '更新数据节点',
  'DATADEL': '删除数据节点',
  'QUERYDATA': '获取表单数据',
  'QUERYDATABASE': '获取数据库',
  'FILL': '填写节点',
  'CC': '抄送节点',
  'NOTIFY': '通知节点',
  'SMS': '短信节点',
  'FINISH': 'FINISH',
  'CODE': '自定义代码块',
  'CHILDFLOW': '子流程节点',
  'WEBHOOK': 'WEBHOOK节点'
}
