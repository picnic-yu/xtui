<template>
    <transition name='fade'>
        <section  :class='alertWrapClass'>
            <span>
                <slot></slot>
            </span>
        </section>
    </transition>
</template>

<script>
const prefixCls = 'v-alert'
export default {
    name:"v-alert",
    components: {},

    props: {
        type:{
            type:String,
            default:'info',
            validator(value){
                return ['info','success','error','warning'].indexOf(value) >= 0;
            }
        }
    },

    data() {
        return {

        }

    },
    computed:{
        alertWrapClass(){
            return [
                `${prefixCls}`,
                `${prefixCls}-${this.type}`
            ];
        }
    },
    watch: {},

    methods: {},

    mounted() {},

}
</script>

<style lang='scss' scoped>
.v-alert{
    position: relative;
    padding: 8px 48px 8px 16px;
    border-radius: 4px;
    color: #515a6e;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 10px;
}
.v-alert-info{
    background-color: #f0faff;
    border: 1px solid #abdcff;
}
.v-alert-success{
    background-color: #edfff3;
    border: 1px solid #8ce6b0;
}
.v-alert-error{
    background-color: #ffefe6;
    border: 1px solid #ffb08f;
}
.v-alert-warning{
    background-color: #fff9e6;
    border: 1px solid #ffd77a;
}
</style>
