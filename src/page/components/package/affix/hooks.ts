/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-29 17:38:19
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-30 15:39:30
 */
import { onMounted, nextTick, ref, computed, ComputedRef, isRef,Ref } from 'vue'

export default function(props: Record<string, any>){
  // var
  const isAbs = ref<boolean>(false)
  const isFixed = ref<boolean>(false)
  const affixRef = ref<HTMLElement>() as any
  const affixRefRect = ref<Record<string, any>>({})
  const initScrollTop = ref<number>(0)
  const clientHeight = ref<number>(0)
  const fixStyle = ref<Record<string, any>>({})
  const absStyle = ref<Record<string, any>>({})
  const container = ref<any>()

  const getContainerEl = function(target: string): HTMLElement | Document {
    if ( target ) {
      return document.querySelector(target) as HTMLElement
    } else {
      return document
    }
  }

  const isTopDirection:ComputedRef<boolean> = computed(() => props.position === 'top')

  const isDocument = function(container: HTMLElement | Document): boolean {
    return container === document
  }

  function getEleClientHeight(container: HTMLElement | Document): number {
    if (isDocument(container)) {
      return document.body.clientHeight || document.documentElement.clientHeight
    } else {
      return (container as HTMLElement).clientHeight
    }
  }
  function handleScroll(){
    const { top: refTop, left: refLeft, bottom: refBottom, right: refRight } = affixRef.value.getBoundingClientRect() || {}
    if(props.target) {
      const target = getContainerEl(props.target) as HTMLElement
      const { top: tTop, bottom: tBottom } = target.getBoundingClientRect() || {}
      if (isTopDirection.value) {
        if(tTop + props.offset >= refTop) {
          delete absStyle.value.bottom
          absStyle.value.top = props.offset + 'px'
          isAbs.value = true
        } else {
          isAbs.value = false
        }
      } else {
        if(tBottom <= refBottom + props.offset) {
          delete absStyle.value.top
          absStyle.value.bottom = props.offset + 'px'
          isAbs.value = true
        } else {
          isAbs.value = false
        }
      }
    } else {
      if (isTopDirection.value) {
        if(refTop <= props.offset) {
          isFixed.value = true
          delete fixStyle.value.bottom
          fixStyle.value.top = props.offset + 'px'
        } else {
          isFixed.value = false
        }
      } else {
        let height = (document.documentElement || document.body).clientHeight
        if (height >= refBottom + props.offset) {
          isFixed.value = true
          delete fixStyle.value.top
          fixStyle.value.bottom = props.offset + 'px'
        } else {
          isFixed.value = false
        }
      }
    }
  }
  // top
  const addScroll = function(container: HTMLElement | Document) {
    if (isDocument(container)) {
      initScrollTop.value = document.documentElement.scrollTop
      container.addEventListener('scroll', handleScroll)
    } else {
      initScrollTop.value = (container as HTMLElement).scrollTop
      container.addEventListener('scroll', handleScroll)
    }
  }
  onMounted(async () => {
    await nextTick()
    container.value = getContainerEl(props.target)
    clientHeight.value = getEleClientHeight(container.value)
    affixRefRect.value = affixRef.value.getBoundingClientRect()
    // console.log('affixRefRect.value', affixRefRect.value)
    fixStyle.value.left = affixRefRect.value.left + 'px'
    absStyle.value.left = affixRefRect.value.left + 'px'

    addScroll(container.value)
  })
  return {
    isFixed,
    isAbs,
    affixRef,
    fixStyle,
    absStyle
  }
}
