<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-07 14:44:21
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-14 17:48:40
-->
<template>
    <div @click="pp" ref="topForm.ref">pp</div>
</template>

<script lang='ts'>
// import ZhqcTopForm from 'zhqc-property-sh-top-form'
import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  onUpdated
} from 'vue'

export default defineComponent({
  components: {
    // ZhqcTopForm
  },
  setup (props, context) {
    console.log('props,ctx', props, context)
    const state = reactive({
      topForm: {
        ref: ref(null),
        data: [],
        fieldList: [],
        rules: {},
        labelWidth: ''
      },
      topFormListMap: {}

    })

    function handleClick () {
      // if(ctx[eventName] && typeof this[eventName] == '')
    }
    function handleEvent () {
      // if(ctx[eventName] && typeof this[eventName] == '')
    }

    onUpdated(() => {
      console.log('onUpdated', state.topForm.ref)
    })
    function pp () {
      console.log('state.topForm.labelWidth', state.topForm.ref)
    }
    return {
      ...toRefs(state),
      handleClick,
      handleEvent,
      pp
    }
  }
})
</script>
