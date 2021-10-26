<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-17 17:04:49
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-25 17:05:28
-->
<template>
  <div>401页面12</div>
</template>
<script lang="ts">
import { defineComponent , PropType } from 'vue'

interface Props {
  b: Record<string, any>
}
interface Emits {
  (event: 'update:isShow', bool: boolean): void
}
export default defineComponent<Props, Emits>({
  setup(props, ctx) {
    console.log(ctx,props, 'props', ctx.emit('update:isShow'))
  }
})
// export default defineComponent({
//   // props: {
//   //   a: {
//   //     type: Number,
//   //     default: 2
//   //   }
//   // },

//   // props: ['a'],
//   props: {
//     b: {
//       type: Object as PropType<{ n: 1 }>,
//       default: () => ({a:1})
//     }
//   },
//   emits: ['update:isShow'],
//   setup(props, ctx) {
//     console.log(ctx,props,props.b, 'props', ctx.emit('update:isShow'))
//   }
// })
</script>
