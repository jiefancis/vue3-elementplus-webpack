<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-06 17:20:49
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-06 20:24:02
-->

<script lang='tsx'>
import { defineComponent, ref, defineAsyncComponent, resolveComponent } from 'vue'

export default defineComponent({
 name: '',
 setup() {
  const pageJson = ref<Array<Record<string, any>>>([
    {
      type: 'ElButton',  // <component :is="type"/>
      props: {
        type: 'info',
        size: "small"
      },
      style: {},
      label: '1',
      on: {
        onClick: function() {console.log('click0')}
      },
      child: [
        {
          type: 'ElButton',  // <component :is="type"/>
          props: {
            type: "primary",
            size: "mini"
          },
          style: {},
          label: '1-1',
          on: {
            onClick: function() {console.log('click1')}
          },
          child: [
            {
              type: 'ElButton',  // <component :is="type"/>
              props: {type: 'text', size: "medium"},
              style: {},
              label: '1-1-1',
              on: {
                onClick: function() {console.log('onClick2')}
              },
            }
          ]
        }
      ]
    },
    {
      type: 'ElButton',  // <component :is="type"/>
      props: {},
      style: {},
      label: '2',
      on: {
        onClick: function() {console.log('click2')}
      },
    }
  ])
  let showDrawer = ref<boolean>(false)
  let pageStr = ''
  function o2str(o) {
    return o ? Object.entries(o).map(([key, value]) => `${key}=${value}`).join(' ') : ''
  }
  function json2vue(list) {
    return list.map(node => pageStr += `<${node.type} style={${node.style}} ${o2str(node.props)}>${node.child && json2vue(node.child)}</${node.type}>\n\r`)
  }
  console.log(pageStr, 'json2vue', json2vue(pageJson.value))
  function renderPage(list){
    return list.map(node => {
      let component  = resolveComponent(node.type)
      return <component  class={node.class} style={node.style} {...node.props} {...node.on}>{node.label}
          { node.child && renderPage(node.child) }
        </component>
    })
  }
  console.log('renderPage', renderPage(pageJson.value))
  return () => (
    <div>
      <el-button onClick={() => showDrawer.value = true}>查看源码</el-button>
      <el-drawer
        v-model={showDrawer.value}
        title="I am the title"
        direction={"rtl"}
      >
        <div>{pageStr}</div>
      </el-drawer>
      {
        renderPage(pageJson.value)
      }
    </div>
  )
 }

})

</script>

<style lang='scss' scoped>

</style>
