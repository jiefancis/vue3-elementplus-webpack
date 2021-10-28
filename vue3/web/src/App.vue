<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-08-18 18:26:58
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-14 17:41:46
-->
<template>
  <router-view/>
</template>

<script lang="ts">
import {
  defineComponent,
  defineAsyncComponent
} from 'vue'

import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {},
  setup () {
    const router = useRouter()
    // router.addRoute('layout',
    //   {
    //     path: '/index',
    //     component: () => import('./page/dynamic/index.vue')
    //   })
    console.log('动态路由', router)
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
