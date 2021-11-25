<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-09 19:44:11
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-25 18:46:59
-->
<template>
  <div class="m-checkbox-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, ref, PropType } from 'vue'
export const checkboxGroupInjectionKey = Symbol('checkbox-group')
export default defineComponent({
  name: 'mcheckboxGroup',
  props: {
    value: Array as PropType<any[]>
  },
  emits: ['update:value'],
  setup(props, ctx) {
    console.log('group.vue', props.value)
    // console.log('checkboxGroupInjectionKey', checkboxGroupInjectionKey)
    // function toggleChecked(e) {
    //   console.log('group--toggleChecked', e)
    // }
    // const allChecked = ref<any>(props.value)
    // watch(
    //   () => allChecked.value,
    //   function(newVal, oldVal) {
    //     console.log('watch--allchecked', newVal, 12, oldVal)
    //     ctx.emit('update:value', newVal)
    //   }
    // )
    let groupCheckedValues = ref<any>(props.value || [])
    function toggleCheckGroupValues(val) {

      if(Array.isArray(groupCheckedValues.value)) {
        let indexed = groupCheckedValues.value.findIndex(item => item === val)
        if(indexed !== -1) {
          groupCheckedValues.value.splice(indexed, 1)
        } else {
          groupCheckedValues.value.push(val)
        }
        console.log(Array.isArray(groupCheckedValues.value), groupCheckedValues.value, 'toggleCheckGroupValues', val)
        ctx.emit('update:value', groupCheckedValues.value)
      }
    }
    provide(checkboxGroupInjectionKey, {
      toggleCheckGroupValues
    })
    // return () => (
    //   <div class="group" onClick={toggleChecked}>
    //   {
    //     ctx?.slots?.default?.()
    //   }
    //   </div>
    // )
  }
})
</script>
