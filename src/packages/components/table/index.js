// 导入组件，组件必须声明 name
import table from './table.vue'

// 为组件提供 install 安装方法，供按需引入
table.install = function (Vue) {
  Vue.component(table.name, table)
}

// 默认导出组件
export default table