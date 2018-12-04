import Vue from 'vue';
import Button from "./component/button/index";
import Icon from './component/icon/index'
Vue.component('v-button',Button);
Vue.component('v-icon',Icon);

new Vue({
    el:'#app'
})