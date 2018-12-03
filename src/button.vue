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
    @import './style/varibles.scss';
    .v-button{
        font-size:14px;
        height:32px;
        padding:0 1em;
        border-radius:4px;
        color:#999;
        border: 1px solid #999;
        background: #fff;
        &:hover{
            border-color:#666;
        }
        &:active{
            background: #eee;
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
