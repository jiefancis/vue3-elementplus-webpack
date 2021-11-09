<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-09 17:01:34
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-09 20:53:49
-->
<script lang="tsx">
import { ref, defineComponent, useSlots, computed } from 'vue'
export default defineComponent({
  props: {
    value: Boolean
  },
  emits: ['update:value'],
  setup(props, ctx) {
    const slots = useSlots()
    let checked = ref<boolean>(props.value)
    function toggleChecked(){
      checked.value = !checked.value
      ctx.emit('update:value', checked.value)
      ctx.emit('change', checked.value)
    }
    return () => (
      <div class={ checked.value ? 'active checkbox':  'checkbox' } onClick={ toggleChecked }>
        <input type="checkbox" checked={checked.value} onChange={ toggleChecked }/>
        {
          Object.keys(slots).map(renderFn => slots?.[renderFn]?.())
        }
      </div>
    )
  }
})


</script>
<style lang="scss" scoped>
.checkbox{
  cursor: pointer
}
.active{
  color: #409eff
}
</style>