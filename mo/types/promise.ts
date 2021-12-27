/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-27 14:26:32
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-27 14:53:47
 */
export interface uploadParams{
  stack: string,
  message: string,
  lineNo: number | string,
  columnNo: number | string,
  type: unknown
  navigator: Navigator
}
export interface Navigator{
  appCodeNAme: string,
  appName: string,
  appVersion: string,
  anguage: string,
  userAgent: string
  language: string
}
