<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-19 18:32:25
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-19 21:02:21
-->

1. docker 启动 mysql 命令
   docker run --name mysql01 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:latest
2. docker 访问 mysql，进入控制台
   docker exec -it mysql01 bash

> issue

1. mysql: unrecognized service
