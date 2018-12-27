# 一个vue ui组件库 
[![Build Status](https://www.travis-ci.org/picnic-yu/xtui.svg?branch=master)](https://www.travis-ci.org/picnic-yu/xtui)
## 介绍
xtui 是一个面向pc端的ui框架，本框架还在开发中，后续也会继续维护。

如果对你有帮助，请不要吝惜你的 star。
如果你对代码有疑问，欢迎提issue，我会回答你的疑问。也可以在本文末尾加我咨询。


## 开始使用

### 使用之前
在开始使用 xtui 之前，有必要先了解以下基础知识，我们也假设您已经写过 Vue，并掌握了下面的内容。
1. vue组件
2. props
3. slot
4. event


### 引入xtui
一般在 webpack 入口页面 main.js 中如下配置
```
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router.js';
import xtui from 'xtui';
import 'xtui/lib/xtui.css';

Vue.use(VueRouter);
Vue.use(xtui);

// The routing configuration
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
```

## 文档
文档地址(https://picnic-yu.github.io/xtui/)


## 联系方式
下面是我个人微信二维码，如感兴趣可加我拉你进群交流学习
![Image text](https://github.com/picnic-yu/xtui/tree/master/src/assets/1.jpg)
## 贡献代码
