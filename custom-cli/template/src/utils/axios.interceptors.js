/*
 * @Descripttion: 
 * @version: 
 * @Author: sea
 * @Date: 2021-07-27 14:51:36
 * @LastEditors: sea
 * @LastEditTime: 2021-07-27 15:00:52
 */
// if(process.env.NODE_ENV !== 'production') {
//     console.log('qwertyuiyhgfdsfgdsz')
//     require('../../public/env.js')
// }
import axios from 'axios'

console.log("window?.ZHQC_ENV?.ASSETS", window?.ZHQC_ENV?.ASSETS)

const server = axios.create({
    baseURL: window?.ZHQC_ENV?.ASSETS
})

server.interceptors.request.use(config => {
    console.log('config',config)
    return config
})


export default server;