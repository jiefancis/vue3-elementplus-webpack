<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-09 19:44:11
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-09 21:01:13
-->
<script lang="tsx">
import { defineComponent } from 'vue'
export default defineComponent({
  setup(props, ctx) {
    function toggleChecked(e) {
      console.log('group--toggleChecked', e)
    }
    return () => (
      <div class="group" onClick={toggleChecked}>
      {
        ctx.slots?.default?.()
      }
      </div>
    )
  }
})
</script>