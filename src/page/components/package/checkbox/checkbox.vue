<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-10 11:23:55
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-25 17:32:18
-->
<template>
  <div class="m-checkbox">
    <input type="checkbox" :checked="checked" @change="toggleChecked"/>
    <label>{{label}}</label>
  </div>
</template>
<script lang="ts">
import { checkboxGroupInjectionKey } from './group.vue'
import { defineComponent, ref, inject } from 'vue'
// @ts-check
// interface Props {
//   checked?: Boolean,
//   value?: number | string
// }
// interface Emits{
//   'update:checked'?: (checked: boolean) => void,
//   'update:value'?: (value: any) => any
// }
export default defineComponent({
  name: 'MCheckBox',
  props: {
    checked: Boolean,
    value: String,
    label: String
  },
  emit: ['update:value', 'update:checked'],
  setup (props, ctx) {
    const checkboxGroupInjection = inject(checkboxGroupInjectionKey) as Record<string, any>
    // console.log('checkboxGroupInjectionKey -- checkbox', checkboxGroupInjection)
    let checked = ref<boolean>(!!props.checked)
    function toggleChecked() {
      checked.value = !checked.value
      if (props.hasOwnProperty('checked')) {
        ctx.emit('update.checked', checked.value)
        // console.log('checkbox', checked.value)
        if (props.value !== null || props.value !== undefined) {
          checkboxGroupInjection.toggleCheckGroupValues(props.value)
        }
        if(checked.value) {
          // console.log('update.value', props.value)
          props.value && ctx.emit('update.value', props.value)
        } else {
          // console.log('update.value  false', props.value)
          props.value && ctx.emit('update.value', '')
        }
      } else if(props.hasOwnProperty('value')) {
        ctx.emit('')
      }
    }
    return {
      checked,
      label: props.label || 'label',
      toggleChecked
    }
  }
})
</script>
