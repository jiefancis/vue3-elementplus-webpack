<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-10 14:30:17
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-25 20:03:01
-->

# vue3-webpack

# 渲染函数

## h 渲染组件

1. 局部组件，import comp from '' h(comp) --> refrence h(App)
1. 全局组件 resolveComponent(compName)
1. 动态组件（:is） resolveDynamicComponent

# ts

1. withDefaults defineProps

```
interface oo {
  a?: string | number
  b: any
}
interface Props {
  o: Record<string, oo>
}

const props = withDefaults(defineProps<Props>(), {
  o: () => ({c: {b:1}})
})
props.o.b = {b:2}
```

## qk

registerMicroApps 注册子应用
->
loadApp -> 开启沙箱和样式隔离
importEntry(get microapphtml) -> 远程 html 元素 stringContent
createElement -> stringContent 转为 element，样式隔离
cssText.process（create css sandbox）确保样式不变，在 body 中创建一个 style 将原样式添加，样式隔离后删除

## 前端规范之 code style 代码格式化

1. pretiier + husky + git hook 在代码提交前格式化

2. husky
   husky 提供了 commits 的各种钩子，包括 pre-commit、commit-msg 等。

3. lint-staged
   lint-staged 只会对 git 暂存区的文件进行校验

(reference)[https://prettier.io/docs/en/index.html]

4. .editorconfig 根目录文件
   可移植的自定义编辑器设置

   config：
   文件 file -> 首选项 -> 设置 -> settings open settings.json。add

   ```
       "editor.defaultFormatter": "esbenp.prettier-vscode",
       "editor.formatOnSave": true
   ```

```
# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
```

### 无 pre-commit 钩子

1. prettier 统一代码风格
2. eslint 代码检测工具
3. eslint-plugin-prettier 配合 eslint 检测代码风格
4. eslint-config-prettier 跟已存在的插件有冲突使用，能够关闭一些不必要的或者是与 prettier 冲突的 lint 选项，需要确保这个配置在 extends 的最后一项。
5. 简化配置：extends: ["plugin: prettier/recommended"]

## pc 端页面展示风格

1. 菜单栏不动，右侧内容页面主体随内容长度变动
2. 菜单栏 与页面主体保持一致滚动（页面过长）
   ```
      page/layout/index.vue
      /deep/ .el-scrollbar__view{ height: 100% }
   ```
3. 菜单栏高度固定，右侧内容查询框与标签页固定，留下页面主体随内容滚动

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## vue3 ts eslint prettier

> TypeError: Cannot read property 'parseComponent' of undefined

1. [base vue3 ts eslint prettier](https://juejin.cn/post/6980276106716774407)

```
vue.config.js
// config.module
//   .rule('vue')
//   .use('vue-loader')
//   .loader('vue-loader')
//   .tap((options) => {
//     // modify the options...
//     // options.compilerOptions.preserveWhitespace = true
//     return options
//   })
//   .end()
```

2. [jsx]
