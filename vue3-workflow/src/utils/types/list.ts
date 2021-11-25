/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-11 13:52:57
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 11:07:00
 */
export interface SearchFormModel {
  user: string
  area: string
  type: string
  resource: string
}

type SNU = string | undefined | null

interface tableData {
  msgTime: number
  msgType: number | string
  department: SNU
  content: SNU
  embedNumber: SNU
  scheduleVal: SNU
}

export interface State {
  labelPosition: SNU
  searchFormModel: SearchFormModel
  tableData: Array<tableData>
}
