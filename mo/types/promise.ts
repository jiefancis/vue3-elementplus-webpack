/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-27 14:26:32
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-30 17:59:04
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
  userAgent: string
  language: string
}
