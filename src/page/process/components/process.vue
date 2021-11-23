<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-12 16:04:46
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-23 20:58:30
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
import { defineComponent, provide, ref, nextTick, watch, resolveComponent } from "vue"
import { nodeTypes, nodeTypeNameMap } from '../utils/constansts.js'
import startNode from './startNode.vue'
import endNode from './endNode.vue'
import nodeBtn from './nodeBtn.vue'
import Branch from './branch.vue'
import Card from './card.vue'
import addIcon from './addIcon.vue'
import Store from '../store'
export default defineComponent({
  name: 'Process',
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
    console.log('resolveComponent', props.node)
    let node = props.node
    // if(!props.node) {
    //   node = (props as any).node = {childNode: null}
    // } else {
    //   node = (props as any).node
    // }
    // const node = props.node as any
    watch(
      () => node,
      (newVal, oldVal) => {
        ctx.emit('update:node', newVal)
        console.log('process.vue emit', newVal)
      },
      {
        deep: true
      }
    )
    function renderBox(node) {
      console.log('renderBox', node)
      return  (
        <div class="box">
          <div class="container">
            <Card v-model:node={node} v-show={node}/>
            {/*<div class="flex-container--branch" v-show={node.type === 'branch'}>
              <Branch v-model:node={node}/>
            </div>*/}
          </div>
          <div class="box-container">
          {
            node?.childNode && renderBox(node.childNode)
          }
          </div>

        </div>
      )
    }
    return () => renderBox(node)
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
