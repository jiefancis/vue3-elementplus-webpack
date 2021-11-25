<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-09 16:57:58
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-25 18:00:41
-->
<template>
  <!-- <div class="transfer-window">
    <div class="transfer-header">
      <input type="check" v-model="allChecked"/>
    </div>
  </div> -->
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
            <m-checkbox v-for="(option, index) in options" :label="option?.label" :key="index" :value="option?.value"/>
          </MCheckboxGroup>

        </div>
      </div>
    </div>
    <div class="m-transfer--action__wrap">
      <div class="m-transfer--action turn-right" @click="turnRight"> 》</div>
      <div class="m-transfer--action turn-left" @click="turnLeft"> 《 </div>
    </div>
    <div class="m-transfer--box m-transfer--right">
      <div class="m-transfer--box__header">
        <!-- <span>目标项</span> -->
        <m-checkbox v-model:checked="checkedTarget" label="目标项"/>
        <span>0/11</span>
      </div>
      <div class="m-transfer--container">
        <MCheckboxGroup v-model:value="sourceValues">
          <m-checkbox v-for="(option, index) in value" :label="option?.label" :key="index" :value="option?.value"/>
        </MCheckboxGroup>

      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, useCssModule, ref, watch } from 'vue'
import MCheckbox from '../../checkbox/checkbox.vue'
import MCheckboxGroup from '../../checkbox/group.vue'

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
      // if(pendingSourceValues.value?.length) {
      //   let filter = pendingSourceValues.value.filter(item => ![undefined, null].includes(item))
      //   console.log('turnleft', filter)
      //   options.push(...filter)
      // }
    }
    function turnRight() {
      console.log('targetValues', targetValues.value)
      if(targetValues.value?.length) {
        let filter = targetValues.value.filter(item => ![undefined, null].includes(item))
        console.log('turnRight', filter)
        // value.push(...filter)
        ctx.emit('update:value', [...value, ...filter])
      }
    }
    watch(
      targetValues,
      (newVal) => {
        console.log('watch -- targetValues', newVal)
        // let filter = newVal.filter(item => ![undefined, null].includes(item))
        // value.push(...filter)
      }
    )
    watch(
      sourceValues,
      (newVal) => {
        console.log('watch -- sourceValues', newVal)
        // let filter = newVal.filter(item => ![undefined, null].includes(item))
        // value.push(...filter)
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
