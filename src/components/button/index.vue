<template>
    <section class='vbutton-wrap'>
        <button class='v-button' @click='$emit("click")' :class="{[`icon-${position}`]:true,[`v-button-${type}`]:true}">
            <v-icon v-if='loading' class="icon loading" name='loading'></v-icon>
            <!-- <svg  v-if='loading' class="icon loading"  aria-hidden="true">
                <use :xlink:href="`#icon-loading`"></use>
            </svg> -->
            <!-- <svg  v-if='icon && !loading' class="icon"  aria-hidden="true">
                <use :xlink:href="`#icon-${icon}`"></use>
            </svg> -->
            <v-icon v-if='icon && !loading' class="icon" :name='icon'></v-icon>
            <div class="button-content">
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
        type:{
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
            cursor: pointer;
            font-size:14px;
            height:32px;
            padding:0 1em;
            border-radius:4px;
            color:rgba(0,0,0,.65);
            border: 1px solid #d9d9d9;
            background: #fff;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            vertical-align: middle;
            svg{
                fill:rgba(0,0,0,.65) !important;
            }
            &:hover{
                border-color:#40a9ff;
                color:#40a9ff;
                svg{
                    fill:#40a9ff !important;
                }
            }
            &:active{
                background: #fff;
                color:#096dd9;
                svg{
                    fill:#096dd9 !important;
                }
                border-color:#096dd9;
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
                > .button-content{
                    order:1;
                }
            }
            &.icon-left{
                > .icon{
                    order:1;
                    margin-left:0;
                    margin-right: 5px;
                }
                > .button-content{
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
        //primary
        .v-button-primary{
            background:#1890ff;
            border-color: #1890ff;
            color:#fff;
            svg{
                fill:#fff !important;
            }
            &:hover{
                border-color: #40a9ff;
                background: #40a9ff;
                color:#fff;
                svg{
                    fill:#fff !important;
                }
            }
            &:active{
                background-color: #096dd9;
                border-color:#096dd9;
            }
        }
        //info
        .v-button-info{
            background:#2db7f5;
            border-color: #2db7f5;
            color:#fff;
            svg{
                fill:#fff !important;
            }
            &:hover{
                border-color: #57c5f7;
                background: #57c5f7;
                color:#fff;
                svg{
                    fill:#fff !important;
                }
            }
            &:active{
                background-color: #2baee9;
                border-color:#2baee9;
                svg{
                    fill:#fff !important;
                }
            }
        }
        //success
        .v-button-success{
            background:#19be6b;
            border-color: #19be6b;
            color:#fff;
            svg{
                fill:#fff !important;
            }
            &:hover{
                border-color: #47cb89;
                background: #47cb89;
                color:#fff;
                svg{
                    fill:#fff !important;
                }
            }
            &:active{
                background-color: #18b566;
                border-color:#18b566;
            }
        }
        //waring
        .v-button-waring{
            background:#f90;
            border-color: #f90;
            color:#fff;
            svg{
                fill:#fff !important;
            }
            &:hover{
                border-color: #ffad33;
                background: #ffad33;
                color:#fff;
                svg{
                    fill:#fff !important;
                }
            }
            &:active{
                background-color: #f29100;
                border-color:#f29100;
            }
        }
        //error
        .v-button-error{
            background:#ed4014;
            border-color: #ed4014;
            color:#fff;
            svg{
                fill:#fff !important;
            }
            &:hover{
                border-color: #f16643;
                background: #f16643;
                color:#fff;
                svg{
                    fill:#fff !important;
                }
            }
            &:active{
                background-color: #e13d13;
                border-color:#e13d13;
            }
        }
    }
    
</style>
