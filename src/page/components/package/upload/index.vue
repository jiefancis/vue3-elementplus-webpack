<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-02 17:01:54
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-06 10:38:15
-->
<template>
 <div class="m-upload">
  <div class="m-upload--drag">
    <slot name="drag">
      <div class="m-upload--dragarea">
        <div></div>
      </div>
    </slot>
  </div>
 </div>
</template>
<script lang='ts'>
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
 name: '',
 setup() {}

})

</script>

<style lang='scss' scoped>

</style>
