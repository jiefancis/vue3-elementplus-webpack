<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-12 16:04:46
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-16 13:36:51
-->
<template>
  <!-- <div class="process" @click="() => isShowNodeBtn = false"> -->
    <!-- <div class="container" v-for="(node, index) in nodeList" :key="node.id">
      <Card v-if="node.type !== 'branch'" :index="index" :nodeData="node"/>
      <Branch v-if="node.type === 'branch'" :index="index" :nodeData="node"/>
    </div> -->
  <!-- </div> -->
  <div class="container">
    <Card/>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, ref, nextTick } from "vue"
import { nodeTypes, nodeTypeNameMap } from '../utils/constansts.js'
import startNode from './startNode.vue'
import endNode from './endNode.vue'
import nodeBtn from './nodeBtn.vue'
import Branch from './branch.vue'
import Card from './card.vue'
export default defineComponent({
  components: {
    Card,
    Branch,
    nodeBtn,
    startNode,
    endNode
  },
  setup() {
    const nodeList = ref<Array<Record<string, any>>>([])
    const nodeMap = ref<Record<string, any>>({})
    let isShowNodeBtn = ref<Boolean>(false)
    const nodeBtnRef = ref<any>()
    let addIndex = -1
    let containerRef
    nextTick(() => {
      containerRef = document.querySelector('.process')
    })
    function removeNode(id) {
      console.log('removeNode', id)
    }

    function createNode(type) {
      return {
        id: Date.now(),
        config: {},
        name: nodeTypeNameMap[type],
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
        branchNodes: [createBranchNode(), createBranchNode()],
        type: 'branch'
      }
    }

    function initNodes() {
      nodeMap.value
    }
    // add del node
    function delNode(...args) {
      let [e, index] = args
      console.log('delNode in process/index.vue', args)
      if (![null, undefined].includes(index)) {
        nodeList.value.splice(index, 1)
      }
    }
    function delBranch(...args) {
      console.log('delBranch in process/index.vue', args)
    }

    function addFlowNode(...args) {
      console.log(nodeList.value, 'addFlowNodeaddFlowNodeaddFlowNode', args)
      isShowNodeBtn.value = true
      const e = args[0]
      if ((e.clientY + 30 + 300) >= containerRef.clientHeight) {
        nodeBtnRef.value.$el.style.left = e.clientX + 30 + 'px'
        nodeBtnRef.value.$el.style.top = e.clientY - 300 + 'px'
      } else {
        nodeBtnRef.value.$el.style.left = e.clientX + 30 + 'px'
        nodeBtnRef.value.$el.style.top = e.clientY + 'px'
      }
      if (args.length >= 2) {
        addIndex = args[1]
        console.log('addIndex', addIndex)
      } else {
        nodeList.value.splice(addIndex, 0, createNode(args[0]))
        console.log('添加元素', nodeList.value)
      }
    }

    function addBranch(...args) {
      console.log('addBranch in process/index.vue', args)
    }
    function addBranchNode(...args) {
      console.log('addBranchNode in process/index.vue', args)
      if (addIndex !== -1) {
        nodeList.value.splice(addIndex, 0, createBranchList())
      }
    }
    provide('nodeOps', {
      removeNode,
      delNode,
      delBranch,
      addFlowNode,
      addBranch,
      addBranchNode
    })

    return {
      nodeMap: nodeMap.value,
      isShowNodeBtn,
      nodeBtnRef,
      containerRef,
      nodeList
    }
  }
})
</script>
<style lang="scss" scoped>
.process{
  background: #f2f3f5;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

</style>
