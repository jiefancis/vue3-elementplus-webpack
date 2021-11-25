<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-09 16:27:22
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-25 18:01:18
-->
<template>
  <m-transfer-box v-model:options="options" v-model:value="value"/>
</template>

<script lang="ts">
import { defineProps,withDefaults, watch , PropType, defineComponent } from 'vue'
import MTransferBox from './components/transferBox.vue'
interface Option {
  label: string,
  value: number | string,
  disabled: Boolean
}
export default defineComponent({
  name: 'mTransfer',
  components: {
    MTransferBox
  },
  props: {
    value: {
      type: Array as PropType<Option[]>,
      required: true,
      default: () => []
    },
    options: {
      type: Array as PropType<Option[]>,
      required: true,
      default: () => []
    }
  },
  emits: ['update:options', 'update:value'],
  renderTracked({ key, target, type}) {
    console.log('renderTracked', key, target, type)
  },
  renderTriggered({ key, target, type}) {
    console.log('renderTriggered', key, target, type)
  },
  setup(props, ctx) {
    console.log('transfer--index.vue', props.options, props.value)
    watch(
      () => props.options,
      (newVal, oldVal) => {
        ctx.emit('update:options', newVal)
      },
      {
        deep: true
      }
    )
    watch(
      props.value,
      (newVal, oldVal) => {
        console.log('transfter--index.vue', newVal)
        ctx.emit('update:value', newVal)
      },
      {
        deep: true
      }
    )
    return {
      options: props.options,
      value: props.value
    }
  }
})
// interface Option {
//   value: number | string,
//   id: number | string,
//   label: string
// }
// interface Props{
//   value: PropType<Option[]> | undefined
//   options: PropType<Option[]> | undefined
// }
// const props = withDefaults(defineProps<Props>(), { value: () => [], options: () => []})
// let options = props.options
// let value = props.value

</script>

