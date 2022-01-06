<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-08-18 18:26:58
 * @LastEditors: wangjie
 * @LastEditTime: 2022-01-06 11:22:21
-->
<template>
<router-view v-slot="{ Component }">
  <transition>
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </transition>
</router-view>
  <!-- <router-view /> -->
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    (window as any).appppppppppppppppppppp2 = 'appp2'
    const router = useRouter()

    const refv = ref(1)
    const ret = computed(() => { console.log('computed ---- refv.value', refv.value); return refv.value })

    setTimeout(() => {
      refv.value = 10
      console.log('setTimeoutsetTimeout',ret.value)
    }, 2000)

    setTimeout(() => {
      refv.value = 100
      console.log('setTimeoutsetTimeout',ret.value)
    }, 5000)
    // setTimeout(() => {
    //   router.push('page_pollingSign_reportDetail_reportDetail')
    // },10000)
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
