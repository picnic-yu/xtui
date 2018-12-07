import Vue from 'vue';
import Button from "./component/button/index";
import Icon from './component/icon/index';
import Input from './component/input/index';
Vue.component('v-button',Button);
Vue.component('v-icon',Icon);
Vue.component('v-input',Input);


new Vue({
    el:'#app',
    data(){
        return{
            loading1:false
        }
    },
    methods:{
        click(){
            this.loading1 = !this.loading1;
        }
    }
})

