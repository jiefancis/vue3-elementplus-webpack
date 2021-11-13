<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-12 16:04:46
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-13 18:36:32
-->
<!-- 分支节点 单个节点-->
<!--
  分支节点：
      flex-row
        flex-branch
          flex-col
            flex-row
            flex-row-container

-->
<template>
  <div class="process">
    <nodeBtn/>
    <Card/>
    <Branch/>
    <Card/>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide } from "vue"
import nodeBtn from './components/nodeBtn.vue'
import Branch from './components/branch.vue'
import Card from './components/card.vue'
export default defineComponent({
  components: {
    Card,
    Branch,
    nodeBtn
  },
  setup() {
    function removeNode(id) {
      console.log('removeNode', id)
    }

    function createNode(type) {
      return {
        id: Date.now(),
        config: {},
        name: '分支节点',
        nodes: null,
        type
      }
    }

    function createBranchNode() {
      return {
        name: '分支节点',
        branchId: Date.now(),
        rule: '条件 json格式',
        toNodeId: null
      }
    }
    function createBranchList() {
      return {
        id: Date.now(),
        branchNodes: [createBranchNode(), createBranchNode()]
      }
    }
    provide('provideEvents', {
      removeNode
    })
  }
})
</script>
<style lang="scss" scoped>
.process{
  background: #f2f3f5;
}
</style>
