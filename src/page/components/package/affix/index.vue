<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-27 15:16:09
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-07 11:51:14
-->
<template>
  <div class="m-affix--container" ref="affixRef">
  <!-- <div class="m-affix"> -->
    <div :class="['m-affix', isFixed ? 'm-affix--fixed' : isAbs ? 'm-affix--abs' : '' ]" :style="isFixed ? fixStyle : absStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, onMounted, nextTick } from 'vue'
import affixHooks from './hooks'

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
  // const affixRef = ref<HTMLElement>() as any
  // const isFix = ref<boolean>(false)
  // const isAbs = ref<boolean>(false)
  // let affixStyle = ref<Record<string,any>>({})
  // let absStyle = ref<Record<string, any>>({})
  // let affixTop: number = 0

  // // debugger
  // onMounted(async () => {
  //   await nextTick()
  //   let container = (props.target ? document.querySelector(props.target) : document) as any



  //   console.log('container.scrollTop', container.scrollTop)
  //   let scrollTop = document.documentElement.scrollTop
  //   affixStyle.value.left = affixRef.value.getBoundingClientRect().left + 'px'
  //   absStyle.value.left = affixRef.value.getBoundingClientRect().left + 'px'
  //   affixTop = affixRef.value.getBoundingClientRect().top + scrollTop

  //   if (container !== document) {
  //     absStyle.value.bottom = props.offset + 'px'
  //     let containerHeight = container.getBoundingClientRect().height
  //     container.addEventListener('scroll', e => {
  //       console.log(isFix.value, props.offset, '非document', e, e.target.scrollTop)
  //       if(props.position === 'bottom') {

  //         if(e.target.scrollTop + containerHeight >= e.target.scrollHeight) {
  //           console.log('position == bottom', true)
  //           isAbs.value = true
  //         } else {
  //           console.log('position == bottom', false)
  //           isAbs.value = false
  //         }
  //       } else {
  //         if(e.target.scrollTop >= props.offset) {
  //           isAbs.value = true
  //         } else {
  //           isAbs.value = false
  //         }
  //       }

  //     })
  //     return
  //   }
  //   container.addEventListener('scroll', function(e) {
  //     let scrollTop = document.documentElement.scrollTop
  //     console.log(e,12, affixTop, 34,scrollTop,56, affixTop - scrollTop <= props.offset)
  //     if (affixTop - scrollTop <= props.offset) {
  //       isFix.value = true
  //       affixStyle.value.top = props.offset + 'px'
  //     } else {
  //       isFix.value = false
  //     }
  //   })
  // })

  return {
    ...affixHooks(props)
    // affixRef,
    // affixStyle,
    // absStyle,
    // isFix,
    // isAbs
  }
 }

})

</script>

<style lang='scss' scoped>
.m-affix--fixed{
  position: fixed;
}
.m-affix--abs{
  position: absolute;
}
.m-affix--container{
  display: inline-block;
}
</style>
