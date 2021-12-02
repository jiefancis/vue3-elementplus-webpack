<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-30 15:43:13
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-02 14:39:51
-->
<template>
 <div class="m-carousel--wrap">
  <div class="m-carousel">
    <!-- <transition-group name="carousel"> -->
      <div class="m-carousel--container" @transitionend="onTransitionEnd"> <!--:style="{'transform': `translate(-${active * parseFloat(width)}, 0)`}"-->
          <component :is="lastChild"/>
          <slot></slot>
          <component :is="firstChild"/>
      </div>

    <!-- </transition-group> -->
    <div class="m-carousel--indicator">
      <div
        :class="['indicator-dot', active === (index-1) ? 'active ' : '']"
        v-for="index in carouselNumber"
        :key="index"
        @mouseenter="() => indicatorEvent(index - 1)"
        v-show="isHoverTrigger"></div>
      <div
        :class="['indicator-dot', active === (index-1) ? 'active ' : '']"
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
import { defineComponent, ref, computed, cloneVNode, onMounted } from 'vue'

export default defineComponent({
 name: 'mCarousel',
 props: {
  autoplay: {
    type: Boolean,
    default: false
  }, // 自动切换
  // 自动切换时间间隔 （s）
  intervalTime: {
    type: Number,
    default: 1000
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
  let firstChild, lastChild
  console.log('ctx.slots', ctx.slots?.default?.())
  const carouselNumber = ref<number>(getSlotsLength() || 0)
  const isHoverTrigger = computed<boolean>(() => props.trigger === 'hover')
  const active = ref<number>(0)
  const translateValue = ref<any>(0)
  const transition = ref<string>('all 0.5s ease')

  function getSlotNodeType(type) {
    return String(type).slice(7,-1)
  }
  function getSlotsLength(): number {
    let slots = ctx.slots?.default?.() as Array<Record<string, any>>
    let list:any[] = []
    let num = 0
    for(let slot of slots) {
      if (slot.hasOwnProperty('children')) {
        if(getSlotNodeType(slot.type) === 'Fragment') {
          num += slot.children.length
          list.push(...slot.children)
        }
      }else {
        list.push(slot)
        num += 1
      }
    }
    firstChild = list[0]
    lastChild = list[num - 1]
    return num
  }
  function indicatorEvent(i: number) {
    active.value = i
    translateValue.value = `-${(i * parseFloat(props.width))}px`
  }
  function prev () {
    --active.value
    translateValue.value = `-${((active.value + 1) * parseFloat(props.width))}px`
    if(active.value !== -1) {
      transition.value = 'all 0.5s ease'
    }
  }
  function next() {
    ++active.value
    translateValue.value = `-${((active.value + 1) * parseFloat(props.width))}px`
    if(active.value) {
      transition.value = 'all 0.5s ease'
    }
  }
  function onTransitionEnd(e) {
    if (active.value === -1) {
      transition.value = 'none'
      translateValue.value = `-${carouselNumber.value * parseFloat(props.width)}px`
      if (active.value === -1) {
        active.value = carouselNumber.value - 1
      }
    } else if (active.value === carouselNumber.value) {
      transition.value = 'none'
      translateValue.value = `-${parseFloat(props.width)}px`
      active.value = 0
    }
  }
  function autoPlay() {
    setTimeout(() => {
      next()
      autoPlay()
    }, props.intervalTime)
  }
  onMounted(() => {
    translateValue.value = '-600px'
    props.autoplay && autoPlay()
  })
   return {
    ...props,
    carouselNumber,
    isHoverTrigger,
    indicatorEvent,
    translateValue,
    active,
    prev,
    next,
    onTransitionEnd,
    firstChild,
    lastChild,
    transition
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
  transition: v-bind(transition);
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
  .indicator-dot{
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


