<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-26 18:39:37
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-17 18:11:09
-->
<template>
  <div class="m-button" @click="handleClick">
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
    },
    type: {
      type: String,
      default: '' // primary info success error text
    }
  },
  // emits: {
  //   click: payload => {
  //     console.log('click -- button', payload)
  //     return false
  //   }
  // },
  setup(props, ctx) {

    function handleClick(...args) {
      console.log('handleClick')
      ctx.emit('click', args)
    }
    return {
      handleClick
    }
  }
})
</script>
