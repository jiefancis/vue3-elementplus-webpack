<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-08-18 18:26:58
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-27 14:41:59
-->
<template>
  <router-view/>
</template>

<script lang="ts">
import {
  defineComponent,
  defineAsyncComponent,
  onBeforeMount
} from 'vue'

import { useStore, mapState, mapActions } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {},
  setup () {
    const router = useRouter()
    const store = useStore()
    console.log('动态路由', router)
    onBeforeMount(() => {
      // const queryParam = window.location.search
      // if (queryParam && queryParam !== '') {
      //   console.log(queryParam)
      //   if (sessionStorage.getItem('token')) {
      //     tokenLogin()
      //   }
      // } else {
      //   let loginUrl = window.localStorage.getItem('loginUrl')
      //   let ssoUrl = window.localStorage.getItem('ssoUrl')
      //   if (!ssoUrl || !loginUrl) {
      //     store.dispatch('login/getSsoUrl').then(() => {
      //       const resp = store.state.login.ssoUrlResp
      //       console.log('resp', resp)
      //       if (resp.code === 200) {
      //         ssoUrl = resp.obj.ssoUrl
      //         loginUrl = resp.obj.ssoLoginUrl
      //         ssoUrl && window.localStorage.setItem('ssoUrl', ssoUrl)
      //         loginUrl && window.localStorage.setItem('loginUrl', loginUrl)
      //         const token = window.sessionStorage.getItem('token')
      //         if (token) {
      //           tokenLogin(ssoUrl, token)
      //         } else {
      //           window.location.href = loginUrl as string
      //         }
      //       }
      //     })
      //   } else {
      //     const token = window.sessionStorage.getItem('token')
      //     if (token) {
      //       tokenLogin(ssoUrl, token)
      //     } else {
      //       window.location.href = loginUrl
      //     }
      //   }
      // }
      // function tokenLogin (ssoUrl?: string | null, token?: string) {
      //   store.dispatch('login/tokenLogin', { router: router }).then(() => {
      //     const resp = store.state.login.tokenLoginResp
      //     if (resp && resp.code === 200) {
      //       store.dispatch('login/getClients', {}).then(() => {
      //         const resp2 = store.state.login.clientResp
      //         if (resp2.code === 200) {
      //           window.sessionStorage.setItem('clients', JSON.stringify(resp2.obj))
      //         }
      //       })
      //       store.state.login.addRouters.forEach(route => router.addRoute(route))
      //       // router.addRoutes(store.state.login.addRouters)
      //       router.push('/')
      //     }
      //   })
      // }
    })
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
