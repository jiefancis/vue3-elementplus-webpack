<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-18 11:23:53
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-24 16:43:24
-->
<!--<template>
  <div @click.self='inc'>
    <span>{{count}}</span>
    <el-input v-model.trim="count"/>
    <div>
      <slot><h1>this is default</h1></slot>
      <slot name="bar"><h1>this is bar</h1></slot>
    </div>
  </div>
</template>-->
<script lang="jsx">
import {
  defineComponent,
  withModifiers,
  ref,
  onMounted
} from 'vue'

export default defineComponent({
  setup (props, { slots }) {
    const count = ref(0)
    const inc = (...arg) => {
      console.log('inc', arg)
      count.value++
    }
    onMounted(() => {
      console.log('onMounted--test', slots)
    })
    return () => (
      <div onClick={ withModifiers(inc, ['self']) }>
        <span>{count.value}</span>
        <el-input v-model={[count.value, ['trim']]}/>
        <div>
          <h1>{ slots?.default ? slots.default?.({ a: 1 }) : 'foo' } </h1>
          <h1>{ slots?.bar?.()}</h1>
        </div>
      </div>
    )
  }
})
</script>
