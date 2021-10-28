<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-17 17:04:49
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-18 10:08:31
-->
<template>
  <div>401页面</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

interface Props{
  a?: number
}
interface Emits{
  (event: 'update:isShow', bool: boolean): void
}
export default defineComponent<Props, Emits>({
  setup (props, ctx) {
    console.log(ctx, 'props', ctx.emit('update:isShow'))
  }
})
</script>
