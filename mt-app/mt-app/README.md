# koa-mongo-redis-ssr
```
使用koa2作为服务端，数据库MongoDB，内存数据库redis的vue SSR项目
基于koa2，nuxt.js的vue-SSR的pc项目，底层数据库使用MongoDB，内存数据库使用Redis
```
### 安装koa2，启动koa服务端
```
 // koa2 -e koa-mongo-redis-ssr
 npm run dev
```
### 安装Robt 3T，支持图形化查看MongoDB内容
### 启动MongoDB
```
which mongod
sudo mongod
```
```
1.直接在后台启动运行

sudo service mongodb start

2.sudo mongod

以守护进程的方式启动  此方式随命令行窗口关闭而停止服务 可用ps -au|grep mongo命令查看进程
```
# meituan-ssr

> My outstanding Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
