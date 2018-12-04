<template>
    <section class='vbutton-wrap'>
        <button class='v-button' :class="{[`icon-${position}`]:true}">
            <v-icon v-if='loading' class="icon loading" name='loading'></v-icon>
            <v-icon v-if='icon && !loading' class="icon" name='qiandao'></v-icon>
            <div class="content">
                <slot></slot>
            </div>
        </button>
    </section>
</template>

<script >
import vIcon from '../icon/index';
export default {
    name:'v-button',
    components: {
        vIcon
    },

    props: {
        icon:{
            type:String,
            default:''
        },
        loading:{
            type:Boolean,
            default:false
        },
        position:{
            type:String,
            default:'left',
            validator(value){
                if(value =='left' || value =='right'){
                    return true;
                }else{
                    return false;
                }
            }
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
    @keyframes spin {
        0%{
            transform:rotate(0deg);
        }
        100%{
            transform:rotate(360deg);
        }
    }
    .vbutton-wrap{
       vertical-align: middle; 
       display: inline-flex;
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
                    order:2;
                    margin-left:5px;
                    margin-right: 0;
                }
                > .content{
                    order:1;
                }
            }
            &.icon-left{
                > .icon{
                    order:1;
                    margin-left:0;
                    margin-right: 5px;
                }
                > .content{
                    order:2;
                }
            }
            .icon{
                height:1em;//一个字节
                width:1em;
            }
            .loading{
                animation: spin 2s infinite linear;
                order:0 !important;
                margin-left:0 !important;
                margin-right: 5px !important;
            }
        }
    }
    
</style>
