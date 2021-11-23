<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-12 16:12:17
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-23 20:55:08
-->
<template>
  <n-popover placement="right-end" trigger="click">
    <template #trigger>
      <div class="add-icon">
        <span class="add-icon__circle">
          +
        </span>
      </div>
    </template>
    <div class="large-text">
      <n-grid :x-gap="12" :y-gap="8" :cols="1">
        <n-grid-item v-for="(grid,index) in grids" :key="index">
          <div class="grid-content" v-if="!grid.options" @click="() => addFlowNode(grid.key)">{{grid.label}}</div>
          <n-dropdown trigger="hover" @select="addFlowNode" placement="right-end" :options="grid.options" v-else>
            <div>{{grid.title}}<span style="width: 0; height: 0; border: 5px solid transparent;border-left-color: #000;display: inline-block;"></span></div>
          </n-dropdown>
        </n-grid-item>
      </n-grid>
    </div>
  </n-popover>
</template>
<script lang="ts">
import { NPopover, NDropdown, NGrid, NGridItem } from 'naive-ui'
import { defineComponent, inject, ref } from "vue"
export default defineComponent({
  props: {
    node: Object
  },
  components: {
    NPopover,
    NDropdown,
    NGrid,
    NGridItem
  },
  emits: ['update:node'],
  setup(props, ctx) {
    const dropdownOptions = ref<Record<string, Array<Record<string, any>>>>({
      data: [
        {
          label: '新增数据',
          key: 'dataadd'
        },
        {
          label: '更新数据',
          key: "dataupdate"
        },
        {
          label: '删除数据',
          key: 'datadel'
        },
        {
          label: '获取数据库',
          key: 'querydata'
        }
      ],
      notice: [
        {
          label: '站内通信',
          key: 'notify'
        },
        {
          label: '短信通信',
          key: 'sms'
        }
      ]
    })
    const grids = ref<Array<Record<string, any>>>([
      {
        label: '审批节点',
        key: 'apply'
      },
      {
        title: '数据节点',
        options: dropdownOptions.value.data
      },
      {
        label: '分支节点',
        key: 'branch'
      },
      {
        label: '填写节点',
        key: 'fill'
      },
      {
        label: '抄送节点',
        key: 'cc'
      },
      {
        title: '通知节点',
        options: dropdownOptions.value.notice
      },
      {
        label: '分隔节点',
        key: 'finish'
      }

    ])
    function addClick() {
      console.log('addClick', props.node)
    }
    function addFlowNode(key) {
      console.log('addFlowNode', key, props.node)
      debugger
      let data
      if (key === 'branch') {
        data = {
          type: 'branch',
          childNode: props.node,
          conditionNodes: [
            {
              name: '分支节点1',
              childNode: null
            },
            {
              name: '分支节点2',
              childNode: null
            }
          ]
        }
      } else if (key === 'finish') {
        data = {
          type: 'finish',
          name: '分隔节点',
          childNode: props.node
        }
      } else {
        data = {
          type: key,
          name: key,
          childNode: props.node
        }
      }
      console.log('key', key, data)
      ctx.emit('update:node', data)
    }
    // const nodeOps = inject('nodeOps') as Record<string, any>

    // console.log('nodeOps in addIcon', nodeOps)
    return {
      addFlowNode,
      grids,
      dropdownOptions,
      addClick
    }
  }
})
</script>
<style lang="scss" scoped>
:deep(.n-grid) {
  cursor: pointer;
}
.add-icon{
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
</style>
