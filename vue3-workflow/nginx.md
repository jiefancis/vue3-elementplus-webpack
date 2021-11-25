<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-10 09:51:59
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-10 09:52:00
-->

# proxy_pass 代理到其它服务器

```
假设下面四种情况分别用 http://192.168.1.1/proxy/test.html 进行访问。

第一种：
location /proxy/ {
proxy_pass http://127.0.0.1/;
}
代理到URL：http://127.0.0.1/test.html

第二种（相对于第一种，最后少一个 / ）
location /proxy/ {
proxy_pass http://127.0.0.1;
}
代理到URL：http://127.0.0.1/proxy/test.html

第三种：
location /proxy/ {
proxy_pass http://127.0.0.1/aaa/;
}
代理到URL：http://127.0.0.1/aaa/test.html

第四种（相对于第三种，最后少一个 / ）
location /proxy/ {
proxy_pass http://127.0.0.1/aaa;
}
代理到URL：http://127.0.0.1/aaatest.html
```
