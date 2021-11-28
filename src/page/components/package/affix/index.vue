<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-27 15:16:09
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-27 19:00:16
-->
<template>
  <div :class="['m-affix', isFix ? 'm-affix--fixed' : '' ]" :style="affixStyle">
    <div class="m-affix--container" ref="affixRef">
      <slot></slot>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, onMounted, nextTick } from 'vue'

export default defineComponent({
 name: 'mAffix',
 props: {
  target: String,
  position: {
    type: String,
    default: 'top'
  },
  offset: {
    type: Number,
    default: 0
  }
 },
 setup(props) {
  const affixRef = ref(null) as any
  const isFix = ref<boolean>(false)
  let affixStyle = ref<Record<string,any>>({})
  let affixTop: number = 0

  // debugger
  onMounted(async () => {
    await nextTick()
    let container = (props.target ? document.querySelector(props.target) : document) as HTMLElement
    let scrollTop = document.documentElement.scrollTop
    affixStyle.value.left = affixRef.value.getBoundingClientRect().left + 'px'
    affixTop = affixRef.value.getBoundingClientRect().top + scrollTop
    container.addEventListener('scroll', function() {
      let scrollTop = document.documentElement.scrollTop
      console.log(props.offset,12, affixTop, 34,scrollTop,56, affixTop - scrollTop <= props.offset)
      if (affixTop - scrollTop <= props.offset) {
        isFix.value = true
        affixStyle.value.top = props.offset + 'px'
      } else {
        isFix.value = false
      }
    })
  })

  return {
    affixRef,
    affixStyle,
    isFix
  }
 }

})

</script>

<style lang='scss' scoped>
.m-affix--fixed{
  position: fixed;
}
.m-affix--container{
  display: inline-block;
}
</style>
