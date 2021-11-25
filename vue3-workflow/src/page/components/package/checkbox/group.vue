<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-09 19:44:11
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-10 13:38:10
-->
<script lang="tsx">
import { defineComponent, provide, ref, watch } from 'vue'
export default defineComponent({
  props: {
    checked: Array
  },
  emits: ['update:checked'],
  setup(props, ctx) {
    function toggleChecked(e) {
      console.log('group--toggleChecked', e)
    }
    const allChecked = ref<any>(props.checked)
    watch(
      () => allChecked.value,
      function(newVal, oldVal) {
        console.log('watch--allchecked', newVal, 12, oldVal)
        ctx.emit('update:checked', newVal)
      }
    )
    provide('checkboxGroup', {

    })
    return () => (
      <div class="group" onClick={toggleChecked}>
      {
        ctx?.slots?.default?.()
      }
      </div>
    )
  }
})
</script>