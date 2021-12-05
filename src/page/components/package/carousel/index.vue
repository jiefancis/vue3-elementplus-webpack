<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-30 15:43:13
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-01 21:09:19
-->
<template>
 <div class="m-carousel--wrap">
  <div class="m-carousel">
    <!-- <transition-group name="carousel"> -->
      <div class="m-carousel--container"> <!--:style="{'transform': `translate(-${active * parseFloat(width)}, 0)`}"-->

          <slot></slot>
      </div>
    <!-- </transition-group> -->
    <div class="m-carousel--indicator">
      <div
        :class="['indicator-line', active === (index-1) ? 'active ' : '']"
        v-for="index in carouselNumber"
        :key="index"
        @mouseenter="() => indicatorEvent(index - 1)"
        v-show="isHoverTrigger"></div>
      <div
        :class="['indicator-line', active === (index-1) ? 'active ' : '']"
        v-for="index in carouselNumber"
        :key="index"
        @click="() => indicatorEvent(index -1)"
        v-show="!isHoverTrigger"></div>
    </div>
    <div class="m-carousel--arrow arrow-left" @click="prev">&lt;</div>
    <div class="m-carousel--arrow arrow-right" @click="next">&gt;</div>
  </div>
 </div>
</template>
<script lang='ts'>
import { defineComponent, ref, computed, cloneVNode } from 'vue'

export default defineComponent({
 name: 'mCarousel',
 props: {
  autoplay: {
    type: Boolean,
    default: true
  }, // 自动切换
  // 自动切换时间间隔 （s）
  intervalTime: {
    type: Number,
    default: 500
  },
  // 是否显示箭头
  showArrow: {
    type: Boolean,

    default: false
  },
  // 触发方式
  trigger: {
    type: String,
    default: 'hover'
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '300px'
  }

 },
 setup(props, ctx) {

  const carouselNumber = ref<number>(getSlotsLength() || 0)
  const isHoverTrigger = computed<boolean>(() => props.trigger === 'hover')
  const active = ref<number>(0)
  const translateValue = ref<any>(0)
  // console.log(props, 'slots',ctx.slots?.default?.())

  function getSlotNodeType(type) {
    return String(type).slice(7,-1)
  }
  function getSlotsLength(): number {
    let slots = ctx.slots?.default?.() as Array<Record<string, any>>
    let num = 0
    for(let slot of slots) {
      if (slot.hasOwnProperty('children')) {
        if(getSlotNodeType(slot.type) === 'Fragment') {
          num += slot.children.length
        }
      }else {
        num += 1
      }
    }
    return num
  }
  function indicatorEvent(i: number) {
    active.value = i
    translateValue.value = `-${(i * parseFloat(props.width))}px`
  }
  function prev(e) {
    if(!active.value) {
      // e.target.style.transition = 'all 0.5s ease'
      active.value = carouselNumber.value - 1
    } else {
      // e.target.style.transition = 'none'
      active.value = --active.value % carouselNumber.value
    }
    translateValue.value = `-${(active.value * parseFloat(props.width))}px`
  }
  function next(e) {
    active.value = (++active.value) % carouselNumber.value
    // e.target.style.transition = !active.value ? 'none' : 'all 0.5s ease'
    translateValue.value = `-${(active.value * parseFloat(props.width))}px`
    // console.log(carouselNumber.value, active.value, 'next', `-${(active.value * parseFloat(props.width))}px`)
  }
   return {
    ...props,
    carouselNumber,
    isHoverTrigger,
    indicatorEvent,
    translateValue,
    active,
    prev,
    next
   }
 }

})

</script>

<style lang='scss' scoped>
// 过渡
// .carousel-enter-active,
// .carousel-leave-active
.m-carousel--container{
  transform: translate(v-bind(translateValue), 0);
  transition: all 0.5s ease;
}

// .carousel-enter-from,
// .carousel-leave-to{
//   transform: translate(0,0)
// }

.m-carousel--wrap{
  position: relative;
  width: v-bind(width);
  height: v-bind(height);
  overflow: hidden;
}
.m-carousel{
  display: inline-block;
  white-space: nowrap;
}
.m-carousel--indicator{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  text-align: center;
  .indicator-line{
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #f0f0f0;
    margin: 0 5px 0 0;
  }
  .active{
    background: #ccc;
  }
}
.m-carousel--arrow{
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 30px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #fff;
}
.arrow-left{
    left: 0
  }
  .arrow-right{
    right: 0;
  }
</style>
