# server

## prastice

1. 初始化项目
2. 使用mysql
    数据库脚本
    在egg中使用mysql
3. 用户管理
    app/router.js
    controller/user.js
    service/user.js
4. 提取基类
    app/controller/api.js
    app/controller/base.js
    app/service/base.js
    controller/user.js
    service/user.js
5. 角色
    app/router.js
    controller/role.js
    app/service/role.js
6. 其他功能
    app/controller/api.js
    app/controller/base.js
    app/router.js
    service/base.js
    controller/roleResource.js
    controller/roleUser.js
    app/service/resource.js
    app/service/resource.js
    service/roleResource.js
    app/service/roleUser.js
7. 权限管理
    7.1 controller/role.js
    7.2 service/role.js
    7.3 app/router.js
8. 验证码(svg-captcha)
    8.1 app.router.js
    8.2 controller/index.js
9. 跨域
    9.1 config/config.default.js
    9.2 config/plugin.js
10. 注册登录
    10.1 app/controller/user.js
    10.2 config.default.js
    10.3 app/middleware/Auth.js


## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org