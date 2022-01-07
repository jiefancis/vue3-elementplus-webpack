<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2022-01-07 14:32:03
 * @LastEditors: wangjie
 * @LastEditTime: 2022-01-07 15:15:13
-->

1. vue concat vuex router, usage for plugin
   vue.use(store)
   vue.use(router)

2. mount process
   createApp ->
   ensureRender() create single render entity -->
   createRender() render = createRender(). create render entity, which has render, createApp which closure function: createAppAPI which cache render function, dispatch in mount()
   mount -->
   patch -->

   - processText
   - processComponent
   - processElement

3. app entity created by createAppAPI which dispatched by createRender function.
   const app = {
   use,
   component,
   directive,
   mount,
   provide
   }
