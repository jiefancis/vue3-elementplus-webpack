<template>
  <div class="m-back" ref="backRef">
    <div class="m-back--container" v-show="visible" @click="backToTop">
      <span>backtop</span>
    </div>
  </div>
</template>
<script lang='ts'>
import {defineComponent, ref, onMounted} from 'vue'

export default defineComponent({
 name: 'MBackTop',
 props: {
   offset: {
     type: Number,
     default: 100
   },
   target: String
 },
 setup(props) {
   const backRef = ref<HTMLElement | null>(null)
   const visible = ref<boolean>(false)
   const container = ref<Element | HTMLElement | Document | null | undefined>(null)
   function getScrollableParentNode(): any {
    let parentNode = backRef.value?.parentElement
    let canScroll = false
    while(parentNode) {
      canScroll = ['auto', 'scroll','overlay'].includes(getComputedStyle(parentNode).overflow)
      if(canScroll) {
        break
      }
      parentNode = parentNode.parentElement
    }
    return parentNode || document.documentElement
   }
   function backToTop() {
    // let el = container.value
    (container.value as any).scrollTo({top: 0, behavior: 'smooth'})
    // if(el?.nodeType === 9) {
    //   (el as Document).documentElement.scrollTo({top: 0, behavior: 'smooth'})
    // } else {
    //   (el as HTMLElement).scrollTo({top: 0, behavior: 'smooth'})
    // }
   }
   function handleScroll(e): void {
     console.log('handleScroll', e)
     visible.value = e.target.scrollTop > props.offset
   }
   function on(el, event, callback) {
     el?.addEventListener(event, callback)
   }
   onMounted(() => {
    container.value = (props.target ? document.querySelector(props.target) : getScrollableParentNode()) as any
    console.log('container.value', container.value)
    on(container.value!, 'scroll', handleScroll)
   })
   return {
     backToTop,
     backRef,
     visible
   }
 }

})

</script>

<style lang='scss' scoped>
.m-back{
  width: 0;
  height: 0;
}
.m-back--container{
  position: fixed;
  z-index: 1000;
  right: 100px;
  bottom: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  text-align: center;
  line-height: 50px;
  color: #000;
}
</style>
