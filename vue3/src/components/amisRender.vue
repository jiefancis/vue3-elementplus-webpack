<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-08-27 09:18:18
 * @LastEditors: wangjie
 * @LastEditTime: 2021-08-27 17:24:46
-->
<template>
    <div id="box"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
console.log('ces ')
const props = defineProps({
  amisjson: {
    type: Object,
    required: true
  }
})
onMounted(() => {
  // @ts-ignore
  var amis = amisRequire('amis/embed')
  console.log(amis)

  const amisScoped = amis.embed('#box', props.amisjson)
})

</script>
