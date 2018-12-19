import pagination from './pagination'
pagination.install = function(Vue){
    return Vue.component(pagination.name,pagination);
}
export default pagination;