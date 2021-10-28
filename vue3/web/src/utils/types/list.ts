/*
 * @Descripttion: 
 * @version: 
 * @Author: wangjie
 * @Date: 2021-09-11 13:52:57
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-11 14:46:08
 */
export interface SearchFormModel{
    user: String,
    area: String,
    type: String,
    resource: String
}

type SNU = String | undefined | null

interface tableData{
    msgTime: Number,
    msgType: Number | String,
    department: SNU,
    content: SNU,
    embedNumber: SNU,
    scheduleVal: SNU
}


export interface State{
    labelPosition: SNU,
    searchFormModel: SearchFormModel,
    tableData: Array<tableData>,
    
}