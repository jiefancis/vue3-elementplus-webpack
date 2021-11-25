<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-09 16:57:58
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-25 18:56:49
-->
<template>
  <div class="m-transfer wrap">
    <div class="m-transfer--box m-transfer--left">
      <div class="m-transfer--header">
        <!-- <span>源项</span> -->
        <m-checkbox v-model:checked="checkedTarget" label="源项"/>
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
      <div class="m-transfer--action turn-right" @click="turnRight"> 》</div>
      <div class="m-transfer--action turn-left" @click="turnLeft"> 《 </div>
    </div>
    <div class="m-transfer--box m-transfer--right">
      <div class="m-transfer--header">
        <!-- <span>目标项</span> -->
        <m-checkbox v-model:checked="checkedTarget" label="目标项"/>
        <span>0/11</span>
      </div>
      <div class="m-transfer--container">
        <MCheckboxGroup v-model:value="sourceValues">
          <m-checkbox v-for="(val, index) in value" :label="val?.label" :key="val?.value" :value="val?.value"/>
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
    let checkedTarget = ref<boolean>(false)
    let checkedSource = ref<boolean>(false)

    let pendingTargetValues = ref<Array<any>>([])
    let pendingSourceValues = ref<Array<any>>([])

    let targetValues = ref<any>(null)
    let sourceValues = ref<any>(null)
    let value = props.value
    let options = props.options
    function turnLeft() {
      if(sourceValues.value?.length) {
        let filter = value.filter(item => !sourceValues.value.includes(item.value))
        value = filter
        options.push(...sourceValues.value)
        ctx.emit('update:options', options)
        ctx.emit('update:value', filter)
      }
    }
    function turnRight() {
      if(targetValues.value?.length) {
        let filter = options.filter(item => !targetValues.value.includes(item.value))
        options = filter
        value.push(...targetValues.value)
        ctx.emit('update:options', filter)
        ctx.emit('update:value', [...value])
      }
    }
    watch(
      [targetValues, sourceValues],
      (newVal, oldVal) => {
        console.log('watch -- values in transfer', newVal)
      }
    )
    return {
      options,
      value,
      turnLeft,
      turnRight,
      checkedTarget,
      checkedSource,
      pendingTargetValues,
      pendingSourceValues,
      targetValues,
      sourceValues
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
</style>
