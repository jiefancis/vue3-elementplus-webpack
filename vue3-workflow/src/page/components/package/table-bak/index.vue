<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-09 11:25:52
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-09 15:15:34
-->
<template>
  <div class="m-table">
    <div class="m-table__header">
      <div
        class="m-table__header--cell"
        v-for="field in columns"
        :key="field"
      >
      {{
        slots?.type?.render()
      }}
        <!-- <slot :data="cloneData"></slot> -->
      </div>
    </div>
    <!-- <div class="m-table__body">

    </div> -->
  </div>
</template>
<script lang="ts" setup>
import { defineProps, useSlots, useAttrs, onMounted } from 'vue'

// @ts-check
interface Props{
  data: Array<Record<string, any>>
}

onMounted(() => {
  const slots = useSlots()
  const attrs = useAttrs()
  console.log(slots?.type?.render(), 'slots ++ attrs ++mounted',attrs)
})

const cloneData = JSON.parse(JSON.stringify(props.data))
const props = defineProps<Props>()
const columns = Object.keys(props.data?.[0])

// console.log(slots.default(), 'slots ++ attrs',attrs)
</script>
<style lang="scss" scoped>
.m-table__header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>