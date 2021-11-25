<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-10 11:23:55
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-11 13:39:05
-->
<template>
  <div class="m-checkbox">
    <input type="checkbox" :checked="checked" @change="toggleChecked"/>
    <label>label</label>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
// @ts-check
interface Props {
  checked?: Boolean,
  value?: number | string
}
interface Emits{
  'update:checked'?: (checked: boolean) => void
}
export default defineComponent({
  props: {
    checked: Boolean
  },
  setup (props, ctx) {
    let checked = ref<boolean>(!!props.checked)
    function toggleChecked() {
      checked.value = !checked.value
      if (props.hasOwnProperty('checked')) {
        ctx.emit('update.checked', checked.value)
      } else if(props.hasOwnProperty('value')) {
        ctx.emit('')
      }
    }
    return {
      checked,
      toggleChecked
    }
  }
})
</script>
