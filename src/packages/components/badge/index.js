// 导入组件，组件必须声明 name
import badge from './badge.vue'

// 为组件提供 install 安装方法，供按需引入
badge.install = function (Vue) {
  Vue.component(badge.name, badge)
}

// 默认导出组件
export default badge