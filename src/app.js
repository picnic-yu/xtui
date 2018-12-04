import Vue from 'vue';
import Button from "./component/button/index";
import Icon from './component/icon/index';
Vue.component('v-button',Button);
Vue.component('v-icon',Icon);


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


// 单元测试
import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button)
    // 动态创建组件
    const button = new Constructor({
        propsData:{
            icon:'qiandao' 
        }
    });
    button.$mount(div);
    let useElement = button.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.eq('#icon-qiandao');
    button.$el.remove();
    button.$destroy();
}
// loading
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button)
    // 动态创建组件
    const button = new Constructor({
        propsData:{
            // icon:'qiandao',
            loading:true
        }
    });
    button.$mount(div);
    let useElement = button.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.eq('#icon-loading');
    button.$el.remove();
    button.$destroy();
}
// 判断icon位置
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button)
    // 动态创建组件
    const button = new Constructor({
        propsData:{
            icon:'qiandao',
            // loading:true
        }
    });
    button.$mount(div);//元素不挂载就不会渲染css  css就没有
    let svg = button.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);//获取style
    expect(order).to.eq('1');
    button.$el.remove();
    button.$destroy();
}
// 判断右侧位置
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button)
    // 动态创建组件
    const button = new Constructor({
        propsData:{
            icon:'qiandao',
            position:'right'
        }
    });
    button.$mount(div);//元素不挂载就不会渲染css  css就没有
    let svg = button.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);//获取style
    expect(order).to.eq('2');
    button.$el.remove();
    button.$destroy();
}

{
    
    const Constructor = Vue.extend(Button)
    // 动态创建组件
    const vm = new Constructor({
        propsData:{
            icon:'qiandao'
        }
    });
    vm.$mount();
    // 函数的mock
    let spy = chai.spy(function(){

    })
    vm.$on('click',spy)
    const button = vm.$el.querySelector('button');
    button.click();
    expect(spy).to.have.been.called();//期待spy被调用了
}