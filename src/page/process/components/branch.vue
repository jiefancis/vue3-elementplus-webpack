<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-12 17:04:46
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-23 20:08:37
-->
<template>
<div class="flow-row">
  <div class="flow-branch">
    <div class="branch-node" @click.stop="addBranch">
      <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaCAYAAACkVDyJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MjEzODhCQzYyMEYxMUVCOEQ5OUFBMThGREJDQkRBNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MjEzODhCRDYyMEYxMUVCOEQ5OUFBMThGREJDQkRBNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYyMTM4OEJBNjIwRjExRUI4RDk5QUExOEZEQkNCREE1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYyMTM4OEJCNjIwRjExRUI4RDk5QUExOEZEQkNCREE1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+G/aRRQAAAb5JREFUeNpi/F/IQA5ohdLVpGpkIVE9ExBPBeIMKF8IiHOA+C+xBjCS4EM2IF4AxJFo4iuAOB6If1HTQi4gXg3EXjjktwFxKBB/o4aFAkC8BYitCag7CsQ+QPyBEgslgHgHEOsTGewXgdgDiF+QY6ECEO8GYhUSE9YdIHYF4ge4Uh02oAUNIhUysowKVK8WsRaaAfEhIJbCaWTuYQjGDaSgZpgRyofOQLwBiHnw+kHRhhifCgPxXiAOgNIYPgwC4q0ELSMN8EDNDEK3MAmIVwExOwP1ATvU7CRYKi0B0l0gNt44IxSM948wMEy2xafiPxCXMFHPI4xElcWwfAjy7iwgZibK7L7/ELqIkVjXgAr3NCCeB/PhPCAOJ7YAJhGAzAyD2oGSStcCsTcQf6GiZV+gZq7DlQ/3ALELtPQXwptACMfZO2jtcpKYslQbiHfhLW3wg2dA7AbEVwdt4c0A1QDKWJdIsOwSVM8DfG0UfABUrzkA8TEiLDsGVfuCUKOIEHgPDaIdeNTsgKp5T0wrjBgAaqv4QxtMDFgaUf7EtGdIsRCWgWOAeAaS2AyoGNEFBiMFDWFGaEP4PykaAQIMAPtYZIn4xcpfAAAAAElFTkSuQmCC" alt="">
    </div>
      <div class="meet-node"></div>
      <branch-col v-for="(conditionNode,index) in node.conditionNodes" :key="conditionNode.id" :index="index" :total="node.conditionNodes.length"/>
  </div>
  <div class="after-branch-btn">
    <AddIcon v-model:node="node.childNode"/>
  </div>
</div>

</template>
<script lang="ts">
import { defineComponent, inject } from 'vue'
import BranchCol from './branch-col.vue'
import AddIcon from './addIcon.vue'
import Card from './card.vue'
import Process from './process.vue'
export default defineComponent({
  components: {
    Card,
    BranchCol,
    AddIcon,
    Process
  },
  props: {
    node: Object
  },
  setup(props) {
    // const nodeOps = inject('nodeOps') as Record<string, any>
    // console.log('branch.vue nodeOpsnodeOpsnodeOps', nodeOps)
    let node
    if(!props.node) {
      node = (props as any).node = { childNode: null, conditionNodes: []}
    } else {
      node = (props as any).node
    }
    function addBranch() {
      console.log('branch props.node', props)
      let branchs = props.node?.branchNodes || []
      branchs.push(createBranchNode())
    }
    function createBranchNode() {
      return {
        name: '分支节点',
        branchId: Date.now(),
        rule: '条件 json格式',
        toNodeId: null
      }
    }
    return {
      addBranch,
      node: node as Record<string, any>
    }
  }
})

</script>
<style lang="scss" scoped>
.after-branch-btn{
  padding: 20px 0 41px;
  position: relative;
  text-align: center;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 1px;
    height: 100%;
    background-color: #ccc;
  }
}
.flow-row{
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
}
.flow-branch {
  position: relative;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #cccfdb;
  border-bottom: 1px solid #cccfdb;
  margin-top: 15px;
  .branch-node{
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 2;
    transform: translate(-50%,-50%);
    .flow-col{
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      position: relative;
    }
  }

}
</style>
