
import input from './components/input/index';
import button from './components/button/index';
import icon from './components/icon/index';
import badge from './components/badge/index';
import row from './components/gird/row';
import col from './components/gird/col';
import table from './components/table/index';
import alert from './components/alert/index';
// 存储组件列表
const components = [
    input,
    button,
    icon,
    badge,
    row,
    col,
    table,
    alert
]
import '../assets/js/svg.js'
const install = function (Vue) {
    if (install.installed) return
    // components.map(component => Vue.component(component.name, component))
    Object.keys(components).forEach(key => {
      Vue.component(components[key].name, components[key])
    })
}
  
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
  
const API = {
    install,
    ...components
}
  
export default API
