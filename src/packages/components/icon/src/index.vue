<template>
    <svg  class="v-icon"  aria-hidden="true" :style='`fill:${color}`'>
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script type="text/ecmascript-6">
import '@/assets/js/svg.js'
export default {
    name:'v-icon',
    components: {},

    props: {
        name:{
            type:String,
            default:''
        },
        color:{
            type:String,
            default:'#333'
        }
    },

    data() {
        return {

        }

    },

    watch: {},

    methods: {},

    mounted() {},

}
</script>

<style lang='scss' scoped>
    .v-icon{
        width:1em;
        height:1em;
        vertical-align: middle; 
    }
</style>
