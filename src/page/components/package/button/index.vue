<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-26 18:39:37
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-27 15:33:49
-->
<template>
  <div class="m-button">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'mButton',
  props: {
    label: {
      type: String,
      default: 'button'
    }
  },
  // emits: {
  //   click: payload => {
  //     console.log('click -- button', payload)
  //     return false
  //   }
  // },
  setup(props, ctx) {

  }
})
</script>
