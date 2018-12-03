import Vue from 'vue';
import Button from "./button";
import Icon from './component/icon'
Vue.component('v-button',Button);
Vue.component('v-icon',Icon);

new Vue({
    el:'#app'
})