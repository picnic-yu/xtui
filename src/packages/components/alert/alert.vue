<template>
    <transition name='fade'>
        <section  :class='alertWrapClass' v-if='isClose'>
            <span :class='iconClass' v-if='showIcon'>
                <v-icon  :name='type'></v-icon>
            </span>
            <span :class="messegeClass">
                <slot></slot>
            </span>
            <span :class="descClass">
                <slot name='desc'></slot>
            </span>
            <span :class='closeClass' v-if='closable' @click='handleClose'>
                <v-icon  name='close'></v-icon>
            </span>
        </section>
    </transition>
</template>

<script>
const prefixCls = 'v-alert'
import vIcon from '../icon/icon';
export default {
    name:"v-alert",
    components: {
        vIcon
    },

    props: {
        type:{
            type:String,
            default:'info',
            validator(value){
                return ['info','success','error','warning'].indexOf(value) >= 0;
            }
        },
        showIcon:{
            type:Boolean,
            default:false
        },
        closable:{
            type:Boolean,
            default:false
        }
    },

    data() {
        return {
            desc:false,
            isClose:true
        }

    },
    computed:{
        alertWrapClass(){
            return [
                `${prefixCls}`,
                `${prefixCls}-${this.type}`,
                {
                    [`${prefixCls}-with-desc`] :this.desc,
                    [`${prefixCls}-with-icon`] :this.showIcon,
                }
            ];
        },
        descClass(){
            
            return `${prefixCls}-desc`;
        },
        messegeClass(){
            if(this.desc){
                return `${prefixCls}-messege-desc`;
            }else{
                return `${prefixCls}-messege`;
            }
            
        },
        iconClass(){
            if(this.showIcon){
                if(this.desc){
                    return `${prefixCls}-icon-desc`;
                }else{
                    return `${prefixCls}-icon`;
                }
            }
        },
        closeClass(){
            return `${prefixCls}-icon-close`
        }
    },
    watch: {},

    methods: {
        handleClose(e){
            this.$emit('on-close',e);
            this.isClose = false;
        }
    },

    mounted() {
        this.desc = this.$slots.desc !== undefined;
    },

}
</script>

<style lang='scss' scoped>
@import '../../../assets/style/variable.scss';
.v-alert{
    position: relative;
    padding: 8px 48px 8px 16px;
    border-radius: $border-radius;
    color: #515a6e;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 10px;
    & &-messege-desc{
        display: block;
        font-size: 14px;
        color: #17233d;
    }
    & &-desc{
        font-size: 12px;
        color: #515a6e;
        line-height: 21px;
        // display: none;
        text-align: justify;
    }
    & &-icon-close{
        position:absolute;
        top:10px;
        right:10px;
        cursor: pointer;
    }
}
.v-alert-with-desc{
    padding: 16px;
    position: relative;
    border-radius: 4px;
    margin-bottom: 10px;
    color: #515a6e;
    line-height: 1.5;
}
.v-alert-with-icon{
    padding-left:38px;
    .v-alert-icon{
        top: 10px;
        font-size: 16px;
        left: 12px;
        position: absolute;
    }
}
.v-alert-with-desc.v-alert-with-icon{
    padding-left:68px;
    .v-alert-icon-desc{
        top: 10px;
        font-size: 34px;
        left: 12px;
        position: absolute;
    }
}
.v-alert-info{
    background-color: $info;
    border: 1px solid #abdcff;
    svg{
        fill:#2d8cf0 !important;
    }
}
.v-alert-success{
    background-color: $success;
    border: 1px solid $success-border;
    svg{
        fill:#19be6b !important;
    }
}
.v-alert-error{
    background-color: $error;
    border: 1px solid $error-border;
    svg{
        fill:#ed4014 !important;
    }
}
.v-alert-warning{
    background-color: $warning;
    border: 1px solid $warning-border;
    svg{
        fill:#f90 !important;
    }
}
</style>
