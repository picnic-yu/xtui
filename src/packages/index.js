
import input from './components/input/index';
import button from './components/button/index';
import icon from './components/icon/index';
import row from './components/gird/row';
import col from './components/gird/col';
// 存储组件列表
const components = [
    input,
    button,
    icon,
    row,
    col
]

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
