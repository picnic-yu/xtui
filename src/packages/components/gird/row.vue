<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'v-row',
    components: {},

    props: {
        gutter:{
            type: [Number,String],
            default:0
        },
        align:{
            type:String,
            validator(value){
                return ['left','right','center'].indexOf(value) >= 0;
            }
        }
    },

    data() {
        return {

        }

    },

    watch: {},

    methods: {},
    computed: {
        // 计算gutter 利用row得margin 负值，在利用col得padding来解决这个问题
        rowStyle(){
            let { gutter } = this;
            return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
        },
        // 动态添加offset class
        rowClass(){
            let {align} = this;
            return  [align && `align-${align}`]
        }
    },
    mounted() {
        // 将gutter传给子
        this.$children.forEach((vm) => {
            vm.gutter = this.gutter;
        });
    },

}
</script>

<style lang='scss' scoped>
.row{
    display: flex;
    flex-wrap: wrap;
    &.align-left{
        justify-content: flex-start;
    }
    &.align-center{
        justify-content: center;
    }
    &.align-right{
        justify-content: flex-end;
    }
}
</style>
