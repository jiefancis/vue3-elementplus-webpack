<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-06 17:20:49
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-07 15:44:38
-->

<script lang='tsx'>
import { defineComponent, ref, defineAsyncComponent, resolveComponent } from 'vue'

export default defineComponent({
 name: '',
 setup() {
  const tableData = ref<any>([
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    }
  ])
  const pageJson = ref<Array<Record<string, any>>>([
    {
      type: 'ElTable',  // <component :is="type"/>
      props: {
        data: tableData.value,
        border: true
      },
      style: {
        width: '100%'
      },
      // on: {
      //   onClick: function() {console.log('click0')}
      // },
      child: [
        {
          type: 'ElTableColumn',  // <component :is="type"/>
          props: {
            prop: 'date',
            label: 'Date',
            // width: '180'
          }
          // on: {
          //   onClick: function() {console.log('click1')}
          // },
          // child: [
          //   {
          //     type: 'ElButton',  // <component :is="type"/>
          //     props: {type: 'text', size: "medium"},
          //     style: {
          //       color: 'red',
          //       textAlign: 'center'
          //     },
          //     label: '1-1-1',
          //     on: {
          //       onClick: function() {console.log('onClick2')}
          //     },
          //   }
          // ]
        },
        {
          type: 'ElTableColumn',  // <component :is="type"/>
          props: {
            prop: 'name',
            label: 'Name',
            // width: '180'
          }
        },
        {
          type: 'ElTableColumn',  // <component :is="type"/>
          props: {
            prop: 'address',
            label: 'Address',
            // width: '180'
          }
        }
      ]
    }
    // {
    //   type: 'ElButton',  // <component :is="type"/>
    //   props: {},
    //   style: {},
    //   label: '2',
    //   on: {
    //     onClick: function() {console.log('click2')}
    //   },
    // }
  ])
  let showDrawer = ref<boolean>(false)
  let pageStr = ''
  function o2str(o) {
    return o ? Object.entries(o).map(([key, value]) => `${key}=${value}`).join(' ') : ''
  }
  function o2o(o){
    return o ? Object.entries(o).map(([key, value]) => `${key}=${value}`).join(';') : ''
  }
  function json2vue(list) {
    return list.map(node => pageStr += `<${node.type} style={${o2o(node.style)}} ${o2str(node.props)} ${o2str(node.on)}>${node.child && json2vue(node.child)}</${node.type}>\n\r`)
  }
  console.log(pageStr, 'json2vue', json2vue(pageJson.value))
  function renderElTableColumn(node) {
    let dyc = resolveComponent(node.type)
    let propsList = Object.entries(node.props)
    // return <dyc { propsList.forEach(([key, value]) => )}/>
  }
  function renderPage(list){
    return list.map(node => {
      let dyc = resolveComponent(node.type)
      console.log(dyc)
      return <dyc class={node.class} style={node.style} {...node.props} {...node.on}>
          { node.child && renderPage(node.child) }
        </dyc>
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
      <el-table data={tableData.value} style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
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
