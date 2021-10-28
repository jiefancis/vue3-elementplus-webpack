<template>
  <div>
    <!-- <zhqc-transit></zhqc-transit> -->
    登录页面
  </div>
</template>

<script lang="ts" setup>
import {
  // computed,
  onMounted
} from 'vue'
// import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

// const router = useRouter()
const store = useStore()
// const addRouters = computed(() => store.state.login.addRouters)
store.dispatch('tagsView/toggleSideBar')

onMounted(() => {
  // function toLogin () {
  //   const queryParam = window.location.search
  //   if (queryParam && queryParam !== '') {
  //     const query = decodeURI(window.location.search.substring(1));
  //     const vars = query.split('&')
  //     let code
  //     for (let i = 0; i < vars.length; i++) {
  //       const pair = vars[i].split('=')
  //       if (pair[0] === 'code') {
  //         code = pair[1]
  //         break
  //       }
  //     }
  //     if (code) {
  //       store.dispatch('login/getTokenByCode', { code: code })
  //         .then(() => {
  //           const resp = store.state.login.tokenByCodeResp
  //           if (resp) {
  //             if (resp.code === 200) {
  //               addRouters.value.forEach(route => router.addRoute(route))
  //               // router.addRoutes(addRouters)
  //               router.push('/')
  //             } else if (resp.code === 401) {
  //               window.location.href = window.location.origin
  //             } else {
  //               window.location.href = window.localStorage.getItem('ssoUrl') || ''
  //             }
  //           }
  //         });
  //     }
  //   }
  // }
})
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #036fe8;
  .login-form {
    position: relative;
    width: 420px;
    max-width: 100%;
    padding: 50px 35px 0;
    margin: 0 auto;
    margin-top: 13%;
    /*overflow: hidden;*/
    background: #fff;
    border-radius: 10px;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    position: absolute;
    top: 3px;
    z-index: 1000;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 32px;
      margin: 0px auto 18px auto;
      text-align: center;
      font-weight: bold;
      color: #409eff;
    }
    .set-language {
      position: absolute;
      top: 3px;
      font-size: 18px;
      right: 0px;
      cursor: pointer;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
}
</style>
