<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-09 17:01:34
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-10 11:46:22
-->
<script lang="tsx">
import { ref, defineComponent, useSlots, computed, inject } from 'vue'
export default defineComponent({
  props: {
    value: Boolean
  },
  emits: ['update:value'],
  setup(props, ctx) {
    const slots = useSlots()
    let checked = ref<boolean>(props.value)
    const allChecked: any = inject('allChecked')
    function toggleChecked(){
      checked.value = !checked.value
      ctx.emit('update:value', checked.value)
      if (checked.value) {
        allChecked.push(props.value) //= Array.from(new Set(allChecked.value.push(props.value)))
        console.log(props.value, 'push', allChecked)
      } else {
        let index = allChecked.findIndex(num => num === props.value)
        if(index > -1) allChecked.splice(index, 1)
        console.log(index, 'pop', allChecked)
      }
      // ctx.emit('change', checked.value)
    }

    console.log(props, props.hasOwnProperty('value'),'allCheckedallChecked', allChecked)
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