# 快速开始


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