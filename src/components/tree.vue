<template>
 <div class="tree">
    <div class="tree-node" v-for="treeNode in tree">
      <span>{{tree.name}}</span>
      <el-button @click="addChildNode(treeNode)">添加</el-button>
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
