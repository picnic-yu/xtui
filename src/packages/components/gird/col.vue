<template>
    <div class="col" :class="colClass" :style='colStyle'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'v-col',
    components: {},

    props: {
        span:{
            type:[String,Number]
        },
        offset:{
            type:[String,Number],
            default:0
        }
    },

    data() {
        return {
            gutter:0
        }

    },
    computed:{
        colStyle(){
            return{
                paddingLeft: this.gutter / 2 + 'px',
                paddingRight: this.gutter / 2 + 'px',
            }
        },
        colClass(){
            let createClasses = this.createClasses;
            let {span, offset} = this;
            return[
                ...createClasses({span, offset})
            ]
        }
    },
    watch: {},

    methods: {
        createClasses(obj){
            if(!obj) return[];
            let arr = [];
            if(obj.span){
                arr.push(`col-${obj.span}`)
            }
            if(obj.offset){
                arr.push(`offset-${obj.offset}`);
            }
            return arr;
        }
    },

    mounted() {},

}
</script>

<style lang='scss' scoped>
.col{
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
}
</style>
