<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-18 14:50:29
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-18 17:03:51
-->
<script lang="jsx">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  setup () {
    const slots = {
      home: {
        title: () => (<div><i class="el-icon-location"></i><span>导航一</span></div>)
        //   return (<div><i class="el-icon-location"></i><span>导航一</span></div>)
        // }
      },
      group: {
        title: () => <span>分组一</span>
        //   return <span>分组一</span>
        // }
      }
    }
    function handleOpen () {
      console.log('handleOpenhandleOpenhandleOpen', arguments)
    }
    function handleClose () {
      console.log('CloseCloseClose', arguments)
    }
    return () => (
      <div>
        <el-menu
          class="el-menu-vertical-demo"
          onOpen={handleOpen}
          onClose={handleClose}
        >
          <el-sub-menu index="1">
            <template v-slots={slots.home}/>
            <el-menu-item-group>
              <template v-slots={slots.group}/>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </div>
    )
  }
})
</script>
