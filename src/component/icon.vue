<template>
    <svg  class="v-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script type="text/ecmascript-6">
export default {
    name:'v-icon',
    components: {},

    props: {
        name:{
            type:String,
            default:''
        },
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
    }
</style>
