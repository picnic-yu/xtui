import Vue from 'vue'
import App from './App.vue'
import xtui from './packages/index.js';
console.log(xtui)
  Vue.use(xtui);
  Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
