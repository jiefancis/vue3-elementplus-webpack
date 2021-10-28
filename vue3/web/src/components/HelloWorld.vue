<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-08-18 18:26:58
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-19 11:11:56
-->
<template>
<div>
  <input v-model="a" v-permission:[a].custom="true"/>
  <c-table :tableData="cTableData" @dispatchEvent="dispatchEvent"/>

</div>

</template>

<script lang="ts">
import { App } from 'vue'
import Ctable from './table.vue'
import {
  queryTableList
} from '../api/home'
import useStatus from '../hooks/useStatus'

// import amis from "./amisRender.vue";
import {
  toRefs,
  ref,
  defineComponent,
  reactive,
  watchEffect,
  watch,
  getCurrentInstance,
  ComponentInternalInstance,
  ComponentPublicInstance,
  withDirectives,
  resolveDirective,
  onMounted
} from 'vue'

import {
  useRouter,
  useRoute
} from 'vue-router'

import {
  useStore,
  mapState
} from 'vuex'

export default defineComponent({
  components: {
    'c-table': Ctable
  },
  setup (props, ctx) {
    const mapStates = mapState('home', [
      'tab'
    ])
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const instance: any = getCurrentInstance()
    console.log('process.env', instance)
    console.log(router, 'hello -page', store, mapStates, route)
    const state = reactive({ a: 1 })
    const stopWatchEffect = watchEffect((onInvalidate) => {
      onInvalidate(() => {
        console.log('即将重新运行时')
      })
      console.log(onInvalidate, 'watchEffect', state.a)
    })
    stopWatchEffect()
    setTimeout(() => {
      instance.ctx.add()
    }, 1000)

    function add () {
      console.log('state ++ 1')
      state.a++
    }

    function dispatchEvent (name: string, data) {
      console.log(instance.ctx, 'dispatchEvent----', instance.ctx[name])
      if (instance.ctx[name]) {
        instance.ctx[name](data)
      }
    }
    const { status, updateStatus } = useStatus()

    // setTimeout(() => {
    //   updateStatus(2)
    // }, 2000)

    onMounted(async () => {
      // const res = await queryTableList()
      const modelDirective = resolveDirective('permission')
      console.log(modelDirective, 'mounted -- page')
    })
    watch(
      () => state.a,
      (val, prevVal) => {
        console.log('val, preval', val, 12, prevVal)
      }
    )
    return {
      add,
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
