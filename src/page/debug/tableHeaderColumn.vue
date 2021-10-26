<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-10-26 11:54:02
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-26 16:04:00
 !!props.columns.isSearch
-->
<template>
  <div class="wrapper" @click.stop.prevent="toggleColumn"
    @mouseenter.stop.prevent="onmouseenter"
    @mouseleave.stop.prevent="onmouseleave"
    >
    <n-input v-if="!!customHeader.isSearch"/>
    <div class="content" v-else>
      <span>标题</span>
      <span v-show="customHeader.isEnter">search</span>
      <span v-show="customHeader.isEnter">icon</span>
      {{customHeader}}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults,reactive, watch,ref, computed } from 'vue'
/**
 * defineProps无响应性
 */

// interface Props{
//   columns: Array<Record<string, any>>
// }
// const props = withDefaults(defineProps<Props>(), {
//   columns: () => [{}]
// })
// let defaultProps = ref({isSearch: false})
// let isSearch = ref<boolean>(false)
interface Props{
  columns: Record<string, any>
}
type proptype = Record<string, any>
const _props: any = defineProps()
// const injectProps = ref<any>(_props)
console.log('injectPropsinjectPropsinjectProps', _props.params.customHeader)

const props = ref<Props>({columns: {
  isSearch: false
}})

const customHeader = reactive(_props.params.customHeader)
function onmouseenter(){
  customHeader.isEnter = true
}
function onmouseleave(){
  customHeader.isEnter = false
}


watch(
  () => customHeader.isSearch,
  (newVal, oldVal) => {
    console.log('watch -- customHeader', newVal, oldVal)
  }
)
function toggleColumn() {
  console.log('toggleColumn', _props)
  customHeader.isSearch = !customHeader.isSearch
  // _props.customeHeader.isSearch = !_props.customeHeader.isSearch
}

</script>
<style lang="scss" scoped>
.content{
  display: flex;
  justify-content: space-between;
}
</style>
