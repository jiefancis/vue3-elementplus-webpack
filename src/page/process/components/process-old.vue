<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-12 16:04:46
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-23 16:48:02
-->
<!-- <template>
    <div class="container">
      <div class="node" v-if="node?.type && node?.type !== 'branch'">
        <p class="card-node">普通节点 {{node.name}}</p>
        <addIcon/>
        <div class="add-icon">
          <span class="add-icon__circle" @click="addNode(node)">
            +
          </span>
        </div> -->
        <!-- <button @click="addNode(true)"> + </button>
      </div>

      <div class="flow-container" v-if="node?.type === 'branch'">
        <div class="flow-branch">
          <div v-for="(cNode,index) in node?.conditionNode || []" :key="index" class="branch-col">
            <div class="node">
              <div class="card-node">分支节点 - {{index}}</div>
              <addIcon/>
            </div>
            <process v-if="cNode?.childNode" v-model:node="node.childNode"/>
          </div>
        </div>
        <addIcon/>
      </div>
      <process v-if="node?.childNode" v-model:node="node.childNode"></process>
    </div>
</template> -->
<script lang="tsx">
import { defineComponent, provide, ref, nextTick } from "vue"
import { nodeTypes, nodeTypeNameMap } from '../utils/constansts.js'
import startNode from './startNode.vue'
import endNode from './endNode.vue'
import nodeBtn from './nodeBtn.vue'
import Branch from './branch.vue'
import Card from './card.vue'
import addIcon from './addIcon.vue'
export default defineComponent({
  name: 'process',
  // components: {
  //   Card,
  //   Branch,
  //   nodeBtn,
  //   startNode,
  //   endNode,
  //   addIcon
  // },
  props: {
    node: Object
  },
  // emits: ['update:node'],
  setup(props, ctx) {
    console.log('props, ctx', props, ctx)
    return () => (
      <div class="container">
        111
        <Card></Card>
      </div>
    )
    // const nodes = ref<Record<string, any>>({})
    // console.log('process--------------', props)
    // const nodeList = ref<Array<Record<string, any>>>([])
    // const nodeMap = ref<Record<string, any>>({})
    // let isShowNodeBtn = ref<Boolean>(false)
    // const nodeBtnRef = ref<any>()
    // let addIndex = -1
    // let containerRef
    // nextTick(() => {
    //   containerRef = document.querySelector('.process')
    // })
    // function removeNode(id) {
    //   console.log('removeNode', id)
    // }

    // function createNode(type) {
    //   return {
    //     id: Date.now(),
    //     config: {},
    //     name: nodeTypeNameMap[type],
    //     nodes: null,
    //     type
    //   }
    // }

    // function createBranchNode() {
    //   return {
    //     name: '分支节点',
    //     branchId: Date.now(),
    //     rule: '条件 json格式',
    //     toNodeId: null
    //   }
    // }
    // function createBranchList() {
    //   return {
    //     id: Date.now(),
    //     branchNodes: [createBranchNode(), createBranchNode()],
    //     type: 'branch'
    //   }
    // }

    // function initNodes() {
    //   nodeMap.value
    // }
    // // add del node
    // function delNode(...args) {
    //   let [e, index] = args
    //   console.log('delNode in process/index.vue', args)
    //   if (![null, undefined].includes(index)) {
    //     nodeList.value.splice(index, 1)
    //   }
    // }
    // function delBranch(...args) {
    //   console.log('delBranch in process/index.vue', args)
    // }

    // function addFlowNode(...args) {
    //   console.log(nodeList.value, 'addFlowNodeaddFlowNodeaddFlowNode', args)
    //   isShowNodeBtn.value = true
    //   const e = args[0]
    //   // if ((e.clientY + 30 + 300) >= containerRef.clientHeight) {
    //   //   nodeBtnRef.value.$el.style.left = e.clientX + 30 + 'px'
    //   //   nodeBtnRef.value.$el.style.top = e.clientY - 300 + 'px'
    //   // } else {
    //   //   nodeBtnRef.value.$el.style.left = e.clientX + 30 + 'px'
    //   //   nodeBtnRef.value.$el.style.top = e.clientY + 'px'
    //   // }
    //   if (args.length >= 2) {
    //     addIndex = args[1]
    //     console.log('addIndex', addIndex)
    //   } else {
    //     nodeList.value.splice(addIndex, 0, createNode(args[0]))
    //     console.log('添加元素', nodeList.value)
    //   }
    // }

    // function addBranch(...args) {
    //   console.log('addBranch in process/index.vue', args)
    // }
    // function addBranchNode(...args) {
    //   console.log('addBranchNode in process/index.vue', args)
    //   if (addIndex !== -1) {
    //     nodeList.value.splice(addIndex, 0, createBranchList())
    //   }
    // }
    // provide('nodeOps', {
    //   removeNode,
    //   delNode,
    //   delBranch,
    //   addFlowNode,
    //   addBranch,
    //   addBranchNode
    // })
    // function addNode(cNode) {
    //   console.log('addNode-------',cNode)
    //   // if (!cNode) {
    //   //   // (cNode as Record<string, any>)
    //   //   let node = (props.node as Record<string, any>)
    //   //   node.childNode = {
    //   //     type: '',
    //   //     name: Date.now(),
    //   //   }

    //   //   ctx.emit('update:node', node)
    //   //   return
    //   // }
    //   const node = props.node as Record<string, any>;
    //   console.log('addNode当前节点', JSON.parse(JSON.stringify(node)), node)
    //   if(node.type !== 'branch') {
    //     node.childNode = {
    //       type: 'branch',
    //       name: Date.now(),
    //       childNode: null,
    //       conditionNode: [ {name: Date.now(),}, {name: Date.now(),} ]
    //     }
    //   } else {
    //     node.childNode = {
    //       type: '',
    //       name: Date.now(),
    //       // childNode: {
    //       //   type: '',
    //       //   name: '232134'
    //       // },
    //     }
    //   }
    //   ctx.emit('update:node', node)
    // }

    // return {
    //   ondeMap: nodeMap.value,
    //   isShowNodeBtn,
    //   nodeBtnRef,
    //   containerRef,
    //   nodeList,
    //   node: props.node as Record<string, any>,
    //   conditionNodes: props.node as any,
    //   addNode
    // }
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
.flow-branch{
  display: flex;
  justify-content: center;
}
.branch-col{
    width: 400px;
    margin-right: 100px;
  }

// add-icon
.add-icon{
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 30px 0;
  &__circle{
    display: inline-block;
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    color: #ff6a00;
    background: #fff;
    border-radius: 50%;
  }
}

.node{
  position: relative;
  z-index: 10;
  &:before{
    content: ' ';
    position: absolute;
    width: 1px;
    z-index: 0;
    top: 0;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    background: #cccfdb;
  }
}
.card-node{
  position: relative;
  z-index: 10;
  width: 210px;
  height: 60px;
  background: #fff;
  border-radius: 3px;
  text-align: center;
  line-height: 60px;
  margin: auto;
}

.branch-col{
  width: 210px;
  // height: 60px;
  // background: #fff;
  border-radius: 6px;
}
</style>
