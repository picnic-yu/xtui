<template>
    <section class='collapse-item'>
        <div class='title' @click='open=!open'>
            {{title}}
        </div>
        <div class='content' v-if='open'>
            <slot></slot>
        </div>
    </section>
</template>

<script>

    export default {
        name:"collapse-item",
        components: {},

        props: {
            title:{
                type:String,
                required:true
            }
        },

        data() {
            return {
                open:false
            }

        },

        watch: {},

        methods: {},

        mounted() {},

    }
</script>

<style lang='scss' scoped>
    @import './collapseItem.scss'
</style>
