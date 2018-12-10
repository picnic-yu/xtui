

import chai from 'chai';
import Vue from 'vue';

import Button from '@/components/button/index.vue'
const expect = chai.expect;
describe('Button.vue', () => {
  it('存在.', () => {
		//to.be.ok //不是false的值
    expect(Button).to.exist
  })
  it('可以设置icon.', () => {
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
  })
  it('可以设置loading.', () => {
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
  })

  // it('icon 默认的 order 是 1', () => {
  //   const div = document.createElement('div');
  //   document.body.appendChild(div);
  //   const Constructor = Vue.extend(Button)
  //   // 动态创建组件
  //   const button = new Constructor({
  //       propsData:{
  //           icon:'qiandao',
  //           // loading:true
  //       }
  //   });
  //   button.$mount(div);//元素不挂载就不会渲染css  css就没有
  //   let svg = button.$el.querySelector('svg');
  //   let {order} = window.getComputedStyle(svg);//获取style
  //   expect(order).to.eq('1');
  //   button.$el.remove();
  //   button.$destroy();
  // })

  // it('设置 position 可以改变 order', () => {
	// 	const div = document.createElement('div');
  //   document.body.appendChild(div);
  //   const Constructor = Vue.extend(Button)
  //   // 动态创建组件
  //   const button = new Constructor({
  //       propsData:{
  //           icon:'qiandao',
  //           position:'right'
  //       }
  //   });
  //   button.$mount(div);//元素不挂载就不会渲染css  css就没有
  //   let svg = button.$el.querySelector('svg');
  //   let {order} = window.getComputedStyle(svg);//获取style
  //   expect(order).to.eq('2');
  //   button.$el.remove();
  //   button.$destroy();
  // })
  // it('点击 button 触发 click 事件', () => {
  //   const Constructor = Vue.extend(Button)
  //   // 动态创建组件
  //   const vm = new Constructor({
  //       propsData:{
  //           icon:'qiandao'
  //       }
  //   });
  //   vm.$mount();
  //   // 函数的mock
  //   let spy = chai.spy(function(){

  //   })
  //   vm.$on('click',spy)
  //   const button = vm.$el.querySelector('button');
  //   button.click();
  //   expect(spy).to.have.been.called();//期待spy被调用了

  // })
})
