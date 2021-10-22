/*
 * @Descripttion: 项目公共api
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-19 15:05:21
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 11:23:23
 */
import server from '@/utils/axios'
import { AxiosResponse } from 'axios'

// constants
// const modName = process.env.VUE_APP_WMS_MODEL
const APPROOT = process.env.VUE_APP_ROOT_MODEL
const CLIENTID = 'zhqc-bms'

// @ts-check
type StringOrNull = string | null;
interface RefreshTokenData {
  userNo: StringOrNull;
  platForm: string;
  refreshToken: StringOrNull;
}

export interface RefreshReturn {
  code?: string | number;
  msg: string | null;
  data?: any;
  obj?: any;
}

/**
 * @description 刷新token
 * @param data
 * @returns
 */
export function refreshToken (
  data: RefreshTokenData
): Promise<AxiosResponse<RefreshReturn>> {
  return server.post('/oauth/refresh', data)
}

/**
 * @description: 获取sso地址
 * @return { code, obj: { ssoLoginUrl, ssoUrl }}
 */
export const getSsoUrl = () => {
  const url = `/oauth/ssoUrl/${CLIENTID}?from=http://${window.location.host}${APPROOT}/login`
  return server.get(url)
}

/**
 * @description code置换token
 * @return
 */
export const getTokenByCode = (data) => {
  const url = `/oauth/code/${data.code}/${CLIENTID}?from=http://${window.location.host}${APPROOT}/login`
  return server.get(url)
}
/**
 * @description 登录
 */
export const tokenLogin = () => {
  return server({
    url: '/oauth/loginInfo',
    method: 'get'
  })
}

/**
 * @description
 */
export const getClients = () => {
  return server.get('/fm/fmUser/clients')
}
