<template>
    <section >
        <button class='v-button'>按钮</button>
    </section>
</template>

<script >
export default {
    name:'',
    components: {},

    props: {},

    data() {
        return {

        }

    },

    watch: {},

    methods: {},

    mounted() {},

    }
</script>

<style scoped lang='scss'>
    .v-button{
        font-size:14px ;
        height:60px;
        padding:0 1em;
        border-radius:4px;
        border: 1px solid #ccc;
        background: #fff;
        &:hover{
            border-color:red;
        }
        &:active{
            background: #fff;
        }
        &:focus{
            outline:none;
        }
    }
</style>
