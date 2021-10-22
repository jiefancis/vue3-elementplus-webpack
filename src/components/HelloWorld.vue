<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-10-08 14:24:48
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-22 14:34:25
-->
<template>
  <div class="label">
    hello world
    <!-- <input v-model="a" v-permission:[a].custom="true" />
    <c-table :tableData="cTableData" @dispatchEvent="dispatchEvent" /> -->
  </div>
</template>

<script lang="ts">
import { App } from 'vue'
import Ctable from './table.vue'
import { queryTableList } from '../api/home'
import useStatus from '../hooks/useStatus'
import {
  toRefs,
  defineComponent,
  reactive,
  getCurrentInstance,
} from 'vue'

import { useRouter, useRoute } from 'vue-router'

import { useStore, mapState } from 'vuex'

export default defineComponent({
  components: {
    'c-table': Ctable
  },
  setup(props, ctx) {
    const instance: any = getCurrentInstance()
    const state = reactive({ a: 1 })

    function dispatchEvent(name: string, data) {
      console.log(instance.ctx, 'dispatchEvent----', instance.ctx[name])
      if (instance.ctx[name]) {
        instance.ctx[name](data)
      }
    }
    return {
      ...toRefs(state),
      dispatchEvent,
      cTableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

.label,
label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
