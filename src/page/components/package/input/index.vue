<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-08 20:00:47
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-09 11:24:42
-->
<!--
  usage
    <m-input v-model:value="value"/>
-->
<template>
  <div class="wrapper">
    <input
      :value="inputValue"
      @input="inputValueChange"
      @compositionstart="onCompositionstart"
      @compositionend="onCompositionend"
      />
    <div>{{inputValue}}</div>
  </div>
</template>
<!-- <script lang="ts" setup>
import { defineProps, defineEmits, ref, defineExpose } from 'vue'
// @ts-check
interface Emits{
  (e: 'update:value', value: string): void
}
const name = "m-input"
const props = defineProps({
  value: String
})
let compositionFlag = ref<boolean>(false)
// expose
defineExpose({
  name: 'm-input'
})
// emits
const emits = defineEmits<Emits>()
console.log('emitsemitsemits', emits)
// function
function inputValueChange(e) {
  if (!compositionFlag.value) {
    console.log('inputValueChange', e.target.value)
    emits('update:value', e.target.value)
  }

}
function onCompositionstart(e) {
  compositionFlag.value = true
}
function onCompositionend(e){
  compositionFlag.value = false
  emits('update:value', e.data)
}

// const emits = defineEmits<Emits>([
//   'update:value'
// ])
// import { defineComponent } from 'vue'
// export default defineComponent({
//   props: {
//     value:
//   }
// })

</script> -->


<!--
  // emits: {
  //   'update:value': Function
  //     type: Function,default() => (value: string) => void
  //   }
  // },
-->
<!-- defineComponents -->
<script lang="ts">
import { defineComponent, ref} from 'vue'
export default defineComponent({
  name: 'm-input',
  props: {
    value: String
  },
  emits: ['update:value'],
  setup (props, ctx) {
    let inputValue = ref<string | undefined>(props.value)
    let compositionFlag = ref<boolean>(false)
    function inputValueChange(e) {
      if (!compositionFlag.value) {
        inputValue.value = e.target.value
        ctx.emit('update:value', e.target.value)
      }
    }
    function onCompositionstart(e) {
      compositionFlag.value = true
    }
    function onCompositionend(e){
      compositionFlag.value = false
      inputValue.value = e.target.value
      ctx.emit('update:value', e.target.value)
    }

    return {
      onCompositionstart,
      onCompositionend,
      inputValue,
      inputValueChange
    }
  }
})
</script>
<style lang="scss" scoped>

</style>