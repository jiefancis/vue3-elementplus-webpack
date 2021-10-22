/*
 * @Descripttion: 请求响应拦截
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-09 15:30:57
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 15:42:20
 */
import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { refreshToken } from '@/api/common'
import { ElMessage } from 'element-plus'

const { VUE_APP_API_PREFIX } = process.env

type Server = AxiosInstance;
const server: Server = Axios.create({
  baseURL: VUE_APP_API_PREFIX,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

server.interceptors.request.use<AxiosRequestConfig>(
  (config) => {
    console.log('请求拦截', config, typeof config.data)

    const { url, headers } = config

    if (url !== '/fmUser/login') {
      headers.Authorization = sessionStorage.getItem('token')
    } else {
      headers.Authorization = null
    }

    return config
  },
  (err) => {
    console.log('请求拦截--err', err)
    Promise.reject(err)
  }
)

interface IsRetryRequest {
  isRetryRequest: boolean;
}
type RefreshTokenConfig = AxiosRequestConfig & IsRetryRequest;
server.interceptors.response.use<AxiosResponse>(
  (res) => {
    // 身份验证失效，刷新token
    resCaseHandle(res)
    return res.data
  },
  (err) => {
    Promise.reject(err)
  }
)

function resCaseHandle (res) {
  const { code, msg } = res?.data || {}
  if ([401, 4031].includes(code)) {
    const data = {
      userNo: localStorage.getItem('ms_userNo'),
      platForm: 'Web',
      refreshToken: sessionStorage.getItem('refresh')
    }
    return refreshToken(data)
      .then((res) => {
        const data = res.data
        if (data.code === 200) {
          sessionStorage.setItem('token', data.obj)
          const config = res.config as RefreshTokenConfig
          config.isRetryRequest = true
          config.headers.Authorization = data.obj
          return server(config)
        } else {
          ElMessage.error('登录已失效，即将跳转登录界面')
          setTimeout(function () {
            toLogin()
          }, 2000)
        }
      })
      .catch(() => {
        ElMessage.error('登录已失效，即将跳转登录界面')
        setTimeout(function () {
          toLogin()
        }, 2000)
      })
  } else if ([430, 431].includes(code)) {
    ElMessage.error(msg)
    setTimeout(function () {
      toLogin()
    }, 2000)
  } else {
    if (res.data.msg) {
      ElMessage.error(res.data.msg)
    }
  }
}
// 退出登录
function toLogin () {
  localStorage.clear()
  sessionStorage.clear()
  location.reload()
}
export default server
