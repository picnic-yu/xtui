<template>
    <section class='vbutton-wrap'>
        <button class='v-button' @click='$emit("click")' :class="{[`icon-${position}`]:true,[`v-button-${type}`]:true}">
            <v-icon v-if='loading' class="icon loading" name='loading'></v-icon>
            <v-icon v-if='icon && !loading' class="icon" :name='icon'></v-icon>
            <div class="button-content">
                <slot></slot>
            </div>
        </button>
    </section>
</template>

<script >
import vIcon from '../icon/icon';
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
    @import '../../../assets/style/variable.scss';
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
            background:$primary;
            border-color: $primary;
            color:#fff;
            svg{
                fill:#fff !important;
            }
            &:hover{
                border-color: $primary-hover;
                background: $primary-hover;
                color:#fff;
                svg{
                    fill:#fff !important;
                }
            }
            &:active{
                background-color: $primary-active;
                border-color:$primary-active;
            }
        }
        //info
        .v-button-info{
            background:$info-button;
            border-color: $info-button;
            color:#fff;
            svg{
                fill:#fff !important;
            }
            &:hover{
                border-color: $info-button-hover;
                background: $info-button-hover;
                color:#fff;
                svg{
                    fill:#fff !important;
                }
            }
            &:active{
                background-color: $info-button-active;
                border-color:$info-button-active;
                svg{
                    fill:#fff !important;
                }
            }
        }
        //success
        .v-button-success{
            background:$success-button;
            border-color: $success-button;
            color:#fff;
            svg{
                fill:#fff !important;
            }
            &:hover{
                border-color: $success-button-hover;
                background: $success-button-hover;
                color:#fff;
                svg{
                    fill:#fff !important;
                }
            }
            &:active{
                background-color: $success-button-active;
                border-color:$success-button-active;
            }
        }
        //waring
        .v-button-waring{
            background:$warning-button;
            border-color: $warning-button;
            color:#fff;
            svg{
                fill:#fff !important;
            }
            &:hover{
                border-color: $warning-button-hover;
                background: $warning-button-hover;
                color:#fff;
                svg{
                    fill:#fff !important;
                }
            }
            &:active{
                background-color: $warning-button-active;
                border-color:$warning-button-active;
            }
        }
        //error
        .v-button-error{
            background:$error-button;
            border-color: $error-button;
            color:#fff;
            svg{
                fill:#fff !important;
            }
            &:hover{
                border-color: $error-button-hover;
                background: $error-button-hover;
                color:#fff;
                svg{
                    fill:#fff !important;
                }
            }
            &:active{
                background-color: $error-button-active;
                border-color:$error-button-active;
            }
        }
    }
    
</style>
