import Cookies from 'js-cookie'
// import {
//   fmUserLogin,
//   fmUserChangeUserPwd,
//   getTokenByCode,
//   loginInfo,
//   getSsoUrl,
//   getClients,
//   tokenLogin,
//   loginOutForSSO,
//   publicKey,
//   changeWarehouse,
//   initPageHome,
//   getMessageNotification
// } from '@/view/api/ajax'
// import SideMenuUtils from '@/utils/sideMenuUtils'
// import MenuUtils from '@/utils/menuUtils'
// import { Message } from 'element-ui'
import {
  getTokenByCode,
  getClients
} from '@/api/common'
// @ts-check
import {
  GetTokenByCode,
  MenuItem
} from '@/utils/types/store/login.d'

let sideMenus = []
const routers = []
const fmMenus: Array<MenuItem> = []
//
function loginData (data) {
  window.sessionStorage.setItem('menus', JSON.stringify(data))
  // MenuUtils(routers, data)
  window.sessionStorage.setItem('sideMenus', JSON.stringify(sideMenus))
}
//
function filterAsyncRouter (routes) {
  const sysMenus = [
    {
      menuId: 1,
      parentId: -1,
      menuNameNick: 'page/Dashboard',
      menuName: 'Dashboard首页',
      hasChild: 'N',
      menuDepth: 2,
      childMenus: []
    }
  ]

  if (routes.menus && routes.menus.childMenus !== null) {
    routes.menus.childMenus.forEach(v => {
      sysMenus.push(v)
    })
  }
  const menu: MenuItem = {
    path: '/',
    menuNameNick: 'layout/Home',
    menuName: '首页',
    hasChild: 'Y',
    isRoot: true,
    childMenus: []
  }
  menu.childMenus = []
  for (let i = 0; i < sysMenus.length; i++) {
    if (sysMenus[i].menuDepth === 2) {
      menu.childMenus.push(sysMenus[i])
    }
  }
  // SideMenuUtils(sideMenus, menu.childMenus)
  fmMenus.push(menu)
  loginData(fmMenus)
}
/**
 * store
 */
const login = {
  namespaced: true,
  state: {
    permRouters: [], // 动态路由
    clientRes: null
  },
  mutations: {
    UPDATE_CLIENTS (state, payload) {
      state.clientRes = payload
    }
  },
  actions: {
    async getTokenByCode ({ commit }, data) {
      const res = await getTokenByCode(data) as any
      if (res.code === 200) {
        const { obj } = res
        const { refreshToken, token, user, warehouseName } = obj
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('refresh', refreshToken)
        sessionStorage.setItem('warehouseName', warehouseName)
        localStorage.setItem('ms_username', user.userName)
        localStorage.setItem('ms_userNo', user.userNo)

        filterAsyncRouter(obj)
      }
      commit('GET_TOKEN_BY_CODE', res)
    },

    async getClients ({ commit }) {
      const res = await getClients()
      commit('UPDATE_CLIENTS', res)
    }
  }
}
// const login = {
//   namespaced: true,
//   state: {
//     addRouters: [],
//     clients: [],
//     checkedData: null,
//     permission_routes: null,
//     tokenByCodeResp: null,
//     ssoUrlResp: null,
//     clientResp: null,
//     addMenuDataResp: null,
//     tokenLoginResp: null,
//     publicKeyResp: null,
//     warehouseId: null,
//     warehouseList: null,
//     homeResp: null,
//     query: {
//       page: 0,
//       limit: 4
//     },
//     messageNotification: [],
//     msgNumTotal: 0
//   },
//   mutations: {
//     FM_USER_LOGIN_REQUEST(state, data) {
//       const routes = []
//       MenuUtils(routes, fmMenus)
//       state.addRouters = routes
//       //
//       state.clients = data.clients
//       state.permission_routes = sideMenus
//       sessionStorage.setItem('clients', JSON.stringify(data.clients))
//     },
//     SET_LANGUAGE: (state, language) => {
//       state.language = language
//       Cookies.set('language', language)
//     },
//     FM_USER_CHANGE_USER_PWD_REQUEST: (state, obj) => {
//       state.checkedData = obj
//     },
//     GET_TOKEN_BY_CODE(state, data) {
//       state.tokenByCodeResp = data
//       const routes = []
//       MenuUtils(routes, fmMenus)
//       state.addRouters = routes
//       state.permission_routes = sideMenus
//       state.warehouseId = data?.obj?.warehouseId
//       const arr = []
//       const warehouseList = data?.obj?.warehouseList ?? []
//       warehouseList.forEach(item => {
//         //
//         item.key = item.whName
//         item.value = item.whId
//         arr.push(item)
//       })
//       //
//       sessionStorage.setItem('warehouseId', data?.obj?.warehouseId)
//       sessionStorage.setItem('warehouseList', JSON.stringify(arr))
//       state.warehouseList = arr
//     },
//     //
//     GET_TOKEN_BY_List(state, data) {
//       const routes = []
//       MenuUtils(routes, fmMenus)
//       state.addRouters = routes
//       state.permission_routes = sideMenus
//       state.warehouseId = data.obj.warehouseId
//       const arr = []
//       //
//       const routesOne = []
//       MenuUtils(routesOne, fmMenus)
//       state.addRouters = routesOne
//       //
//       const warehouseList = data?.obj?.warehouseList ?? []
//       warehouseList.forEach(item => {
//         item.key = item.whName
//         item.value = item.whId
//         arr.push(item)
//       })
//       //
//       sessionStorage.setItem('warehouseList', JSON.stringify(arr))
//       state.warehouseList = arr
//     },
//     ADD_MENU_DATA(state, data) {
//       if (data.res.code === 200) {
//         filterAsyncRouter(data.res.obj)
//         state.permission_routes = sideMenus
//         const routes = []
//         MenuUtils(routes, fmMenus)
//         data.data.router.addRoutes(routes)
//       }
//       state.addMenuDataResp = data.res
//     },
//     GET_SSO_URL(state, data) {
//       state.ssoUrlResp = data
//     },
//     GET_CLIENTS(state, data) {
//       state.clientResp = data
//     },
//     TOKEN_LOGIN(state, data) {
//       state.tokenLoginResp = data.res
//       const routes = []
//       MenuUtils(routes, fmMenus)
//       state.addRouters = routes
//       state.permission_routes = sideMenus
//       // data.data.router.addRoutes(routes);
//     },
//     GET_PUBLIC_KEY(state, data) {
//       state.publicKeyResp = data
//     },
//     INIT_PAGE_HOME(state, data) {
//       state.homeResp = data
//     }
//   },
//   actions: {
//     // 登录请求
//     async fmUserLoginRequest({ dispatch, commit }, data) {
//       const res = await fmUserLogin(data)
//       if (res.code === 200) {
//         const { code, obj } = res
//         const { refreshToken, token } = obj
//         // localStorage.setItem("token", token);
//         // localStorage.setItem("refresh", refreshToken);
//         sessionStorage.setItem('token', token)
//         sessionStorage.setItem('refresh', refreshToken)
//         localStorage.setItem('ms_username', obj.user.userName)
//         localStorage.setItem('ms_userNo', obj.user.userNo)
//         filterAsyncRouter(obj)
//         commit('FM_USER_LOGIN_REQUEST', obj)
//         // dispatch('kdOrganization/findAll',{},{root:true});
//         // dispatch('kdSortingPlan/findAll',{},{root:true});
//       }
//     },
//     //
//     setLanguage({ commit }, language) {
//       commit('SET_LANGUAGE', language)
//     },
//     async fmUserChangeUserPwdRequest({ commit }, obj) {
//       const resp = await fmUserChangeUserPwd(obj)
//       commit('FM_USER_CHANGE_USER_PWD_REQUEST', resp)
//     },
//     async getTokenByCode({ commit }, data) {
//       const res = await getTokenByCode(data)
//       if (res.code === 200) {
//         const { code, obj } = res
//         const { refreshToken, token } = obj
//         // localStorage.setItem("token", token);
//         // localStorage.setItem("refresh", refreshToken);
//         sessionStorage.setItem('token', token)
//         sessionStorage.setItem('refresh', refreshToken)
//         localStorage.setItem('ms_username', obj.user.userName)
//         localStorage.setItem('ms_userNo', obj.user.userNo)
//         sessionStorage.setItem('warehouseName', obj.warehouseName)
//         console.log(obj)
//         filterAsyncRouter(obj)
//       }
//       commit('GET_TOKEN_BY_CODE', res)
//     },
//     async addMenuData({ commit }, data) {
//       const res = await loginInfo(data)
//       commit('ADD_MENU_DATA', { res, data })
//     },
//     async getSsoUrl({ commit }, data) {
//       const res = await getSsoUrl(data)
//       commit('GET_SSO_URL', res)
//     },
//     async getClients({ commit }, data) {
//       const res = await getClients(data)
//       commit('GET_CLIENTS', res)
//     },
//     async tokenLogin({ commit }, data) {
//       const res = await tokenLogin(data)
//       if (res.code === 200) {
//         const { code, obj } = res
//         localStorage.setItem('ms_username', obj.user.userName)
//         localStorage.setItem('ms_userNo', obj.user.userNo)
//         filterAsyncRouter(obj)
//       }
//       commit('TOKEN_LOGIN', { res, data })
//     },
//     async getPubicKey({ commit }, obj) {
//       const resp = await publicKey(obj)
//       commit('GET_PUBLIC_KEY', resp)
//     },
//     async changeWarehouse({ commit }, obj) {
//       sideMenus = []
//       localStorage.removeItem('sideMenus')
//       localStorage.removeItem('menus')
//       localStorage.removeItem('warehouseList')
//       const resp = await changeWarehouse(obj)
//       //
//       if (resp.code === 200) {
//         const { code, obj } = resp
//         const { refreshToken, token } = obj
//         // localStorage.setItem("token", token);
//         // localStorage.setItem("refresh", refreshToken);

//         sessionStorage.setItem('token', token)
//         sessionStorage.setItem('refresh', refreshToken)
//         localStorage.setItem('ms_username', obj.user.userName)
//         localStorage.setItem('ms_userNo', obj.user.userNo)
//         localStorage.setItem('warehouseName', obj.warehouseName)
//         filterAsyncRouter(obj)
//       }
//       commit('GET_TOKEN_BY_List', resp)
//     },
//     //
//     async getTokenBylist({ commit }, data) {
//       if (res.code === 200) {
//         const { code, obj } = res
//         const { refreshToken, token } = obj
//         sideMenus = []
//         localStorage.setItem('token', token)
//         localStorage.setItem('refresh', refreshToken)
//         localStorage.setItem('ms_username', obj.user.userName)
//         localStorage.setItem('ms_userNo', obj.user.userNo)
//         localStorage.setItem('warehouseName', obj.warehouseName)
//         console.log(obj)
//         filterAsyncRouter(obj)
//       }
//       // commit('GET_TOKEN_BY_List',res)
//     },
//     //
//     async initPageHome({ commit }) {
//       const resp = await initPageHome({})
//       console.log(resp)
//       commit('INIT_PAGE_HOME', resp)
//     },
//     // 获取消息通知
//     async getMessage({ state }, obj) {
//       state.query.page = state.query.page + 1
//       const res = await getMessageNotification(state.query)
//       if (res.code === 200) {
//         for (let x = 0; x < res.obj.length; x++) {
//           res.obj[x].warningRuleEndTime = new Date(res.obj[x].warningRuleEndTime).getTime()
//         }
//         if (state.query.page == 1) {
//           state.messageNotification = res.obj
//         } else {
//           const allMessageNotification = state.messageNotification.concat(res.obj)
//           state.messageNotification = allMessageNotification
//         }
//         state.msgNumTotal = res.total
//       } else {
//         if (res.msg) {
//           Message.error(res.msg)
//         } else if (res.data) {
//           Message.error(res.data.msg)
//         }
//       }
//     }
//   }
// }
export default login
