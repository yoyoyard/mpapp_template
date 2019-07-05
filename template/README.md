# 小程序项目模版

> Mini app template

## Preparation

``` bash
  # 全局安装 vue-cli
  npm install --global vue-cli

```

## Dependences

``` bash
 1. MPVue, 基于Vue.js的小程序开发框架（ https://github.com/Meituan-Dianping/mpvue ）
 2. Graphql, API 查询语言（ https://graphql.org | https://github.com/apollographql/apollo-client ）
 3. Vuex, Vue.js状态管理工具（ https://github.com/vuejs/vuex ）
 4. ColorUI, UI组件库 ( https://github.com/weilanwl/ColorUI )
    * 没有文档, 参考代码: https://github.com/weilanwl/ColorUI/tree/master/Colorui-UniApp/pages
```

## Build Setup

``` bash
# 编辑器
推荐使用 VSCODE, 安装插件 ESLint, Prettier, Vetur
```

``` bash
# 初始化项目
git clone https://github.com/yoyoyard/mpapp_template ~/.vue-templates/simple
vue init simple my-project --offline
cd myproject

# 安装依赖
yarn

# 启动 Graphql server mocker
npm run api

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
