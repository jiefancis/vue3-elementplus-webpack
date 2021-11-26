<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-09 16:57:58
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-26 21:23:34
-->
<template>
  <div class="m-transfer wrap">
    <div class="m-transfer--box m-transfer--left">
      <div class="m-transfer--header">
        <m-checkbox  label="源项" @change="allCheckedChange('source')"/> <!--v-model:checked="allCheckedSource"-->
        <span>0/11</span>
      </div>
      <div class="m-transfer--container">
        <div class="m-transfer--container__scroll">
          <MCheckboxGroup v-model:value="targetValues">
            <m-checkbox v-for="(option, index) in options" :label="option?.label" :key="option?.value" :value="option?.value"/>
          </MCheckboxGroup>
        </div>
      </div>
    </div>
    <div class="m-transfer--action__wrap">
      <div :class="['m-transfer--action turn-right', !targetValues?.length ?  'm-disabled' : '']" @click="turnRight"> 》</div>
      <div :class="['m-transfer--action turn-left', !sourceValues?.length ?  'm-disabled' : '']" @click="turnLeft"> 《 </div>
    </div>
    <div class="m-transfer--box m-transfer--right">
      <div class="m-transfer--header">
        <m-checkbox v-model:checked="allCheckedTarget" label="目标项" @change="allCheckedChange('target')"/>
        <span>0/11</span>
      </div>
      <div class="m-transfer--container">
        <MCheckboxGroup v-model:value="sourceValues">
          <m-checkbox v-for="(val, index) in _value" :label="val?.label" :key="val?.value" :value="val?.value"/>
        </MCheckboxGroup>

      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, useCssModule, ref, watch } from 'vue'
import MCheckbox from '../checkbox/checkbox.vue'
import MCheckboxGroup from '../checkbox/group.vue'

interface Option {
  label: string,
  value: number | string,
  disabled: Boolean
}
export default defineComponent({
  name: 'mTransferBox',
  components: {
    MCheckbox,
    MCheckboxGroup
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
  emits: ['update:value', 'update:options'],
  setup(props, ctx) {

    console.log('transferBox', props.options, props.value)
    const style = useCssModule()
    let allCheckedTarget = ref<boolean>(false)
    let allCheckedSource = ref<boolean>(false)

    let pendingTargetValues = ref<Array<any>>([])
    let pendingSourceValues = ref<Array<any>>([])

    let targetValues = ref<any>(null)
    let sourceValues = ref<any>(null)
    let _value = ref<Option[]>(props.value)
    let options = ref<Option[]>(props.options)
    function turnLeft() {
      console.log('sourceValues.value', sourceValues.value)
      if(sourceValues.value?.length) {
        let selectedOptions = _value.value.filter(item => sourceValues.value.includes(item.value))
        let filter = _value.value.filter(item => !sourceValues.value.includes(item.value))
        _value.value = filter
        options.value.push(...selectedOptions)
        ctx.emit('update:options', options.value)
        ctx.emit('update:value', filter)
        sourceValues.value = []
      }
    }
    function turnRight() {
      if(targetValues.value?.length) {
        let selectedOptions = options.value.filter(item => targetValues.value.includes(item.value))
        let filter = options.value.filter(item => !targetValues.value.includes(item.value))
        options.value = filter
        _value.value.push(...selectedOptions)
        ctx.emit('update:options', filter)
        ctx.emit('update:value', [..._value.value])
        targetValues.value = []
      }
    }
    function allCheckedChange(type) {
      switch(type) {
        case 'source':
          turnLeft()
          break;
        case 'target':

          break;
      }
    }
    watch(
      _value,
      (newVal, oldVal) => {
        console.log(oldVal,'watch -- _value in transfer', newVal)
      }
    )
    watch(
      [targetValues, sourceValues],
      (newVal, oldVal) => {
        console.log('watch -- values in transfer', newVal)
      }
    )
    return {
      options,
      _value,
      turnLeft,
      turnRight,
      allCheckedTarget,
      allCheckedSource,
      pendingTargetValues,
      pendingSourceValues,
      targetValues,
      sourceValues,
      allCheckedChange
    }
  }
})
</script>
<style lang="scss" scoped>
.m-transfer {
  width: 700px;
}
.m-transfer--action__wrap{

}
.m-transfer{
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  &--action__wrap{
    width: 90px;
  }
  &--header{
    display: flex;
    justify-content: space-between;
    height: 30px;
    border-bottom: 1px solid #ccc;
  }
  &--action {
    height: 40px;
    border: 1px solid #fff;
    background: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  &--container{
    height: 100%;
    overflow: scroll;
    &::-webkit-scrollbar {
      width: 0;
    }
    &__scroll{
      display: inline-block;
      width: 100%;
      text-align: left;
    }
  }
}
.m-transfer--box{
  width: 300px;
  height: 500px;
  overflow: hidden;
  padding: 0 20px;
  &__header{
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
}
.m-disabled{
  cursor: not-allowed;
}

</style>
