<template>
    <section >
        <button class='v-button'>
            <svg v-if='icon' class="icon" aria-hidden="true">
                <use :xlink:href="`#icon-${icon}`"></use>
            </svg>
            <slot></slot>
        </button>
    </section>
</template>

<script >
export default {
    name:'',
    components: {},

    props: {
        icon:{
            type:String,
            default:''
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
        .icon{
            height:1em;
            width:1em;
        }
    }
</style>
