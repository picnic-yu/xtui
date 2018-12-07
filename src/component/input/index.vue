<template>
    <section>
        <template v-if="type !== 'textarea'">
            <input
                ref="input"
                :class="{[`v-input-${size}`]:true,[`v-input`]:true}"
                :type="type"
                :placeholder="placeholder">
        </template>
        <textarea
            v-else
            :type="type"
            ref="textarea">
        </textarea>
    </section>
</template>

<script>
export default {
    name:'v-button',
    components: {},

    props: {
        type:{
            type:String,
            default:'text'
        },
        placeholder:{
            type:String,
            default:''
        },
        size:{
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

<style lang='scss' scoped>
.v-input{
    display: inline-block;
    width: 100%;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
    &:hover{
        border-color: #57a3f3;
    }
    &:focus{
        outline: 0;
        box-shadow: 0 0 0 2px rgba(45,140,240,.2);
        border-color: #57a3f3;
    }
}
.v-input-large{
    font-size: 14px;
    padding: 6px 7px;
    height: 36px;
}
.v-input-small{
    padding: 1px 7px;
    height: 24px;
    border-radius: 3px;
}
</style>
