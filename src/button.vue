<template>
    <section >
        <button class='v-button' :class="{[`icon-${position}`]:true}">
            <svg v-if='icon' class="icon" aria-hidden="true">
                <use :xlink:href="`#icon-${icon}`"></use>
            </svg>
            <div class="content">
                <slot></slot>
            </div>
        </button>
    </section>
</template>

<script >
export default {
    name:'v-button',
    components: {},

    props: {
        icon:{
            type:String,
            default:''
        },
        position:{
            type:String,
            default:'left'
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
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover{
            border-color:#666;
        }
        &:active{
            background: #eee;
        }
        &:focus{
            outline:none;
        }
        &.icon-right{
            > .icon{
                order:2
            }
            > .content{
                order:1;
            }
        }
        &.icon-left{
            > .icon{
                order:1
            }
            > .content{
                order:2;
            }
        }
        .icon{
            height:1em;
            width:1em;
        }
    }
</style>
