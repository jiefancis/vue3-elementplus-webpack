<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-08-18 18:26:58
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-23 18:07:40
-->
<template>
  <div id="app" @click="toPage">
    one page
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    return {
      toPage: () => router.push('/infos')
    }
  //   axios({
  //     method: 'get',
  //     url: 'http://127.0.0.2:7002/'
  //   }).then(res => {
  //     console.log('res',res)
  //   }).catch(err => {
  //     console.log('err',err)
  //   })
  }
})
</script>
<style>
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
