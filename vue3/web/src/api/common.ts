/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-19 15:05:21
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-24 14:30:22
 */
import server from '@/utils/axios'
import { AxiosResponse } from 'axios'
type StringOrNull = string | null
interface RefreshTokenData{
  userNo: StringOrNull,
  platForm: string,
  refreshToken: StringOrNull,
}

export interface RefreshReturn {
  code?: string | number
  msg: string | null
  data?: any
  obj?: any
}

export function refreshToken (data: RefreshTokenData): Promise<AxiosResponse<RefreshReturn>> {
  // server({
  //   method: 'post',
  //   url: '/oauth/refresh',
  //   data
  // })
  return server.post('/oauth/refresh', data)
}
