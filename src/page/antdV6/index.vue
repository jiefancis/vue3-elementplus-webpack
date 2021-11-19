<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-15 09:38:41
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-15 10:08:38
-->
<template>
  <div id="container"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { Graph } from '@antv/x6'
export default defineComponent({
  setup() {
    const data = {
      // 节点
      nodes: [
        {
          id: 'node1', // String，可选，节点的唯一标识
          x: 40,       // Number，必选，节点位置的 x 值
          y: 40,       // Number，必选，节点位置的 y 值
          width: 80,   // Number，可选，节点大小的 width 值
          height: 40,  // Number，可选，节点大小的 height 值
          label: 'hello', // String，节点标签
        },
        {
          id: 'node2', // String，节点的唯一标识
          x: 160,      // Number，必选，节点位置的 x 值
          y: 180,      // Number，必选，节点位置的 y 值
          width: 80,   // Number，可选，节点大小的 width 值
          height: 40,  // Number，可选，节点大小的 height 值
          label: 'world', // String，节点标签
        },
      ],
      // 边
      edges: [
        {
          source: 'node1', // String，必须，起始节点 id
          target: 'node2', // String，必须，目标节点 id
        },
      ],
    };
    onMounted(() => {
      const graph = new Graph({
        container: document.getElementById('container') as HTMLElement,
        width: 800,
        height: 600,
      })
      graph.fromJSON(data)
    })
  }
})

</script>
<Style lang="scss" scoped>
#container{
  background: #fff;
}
</Style>
