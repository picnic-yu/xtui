<template>
    <section class='v-input-wrap'>
        <template v-if="type !== 'textarea'">
            <span :class='{["v-input-icon-prefix"]:prefix,[`v-input-icon-prefix-${size}`]:true}' v-if='prefix'>
                <v-icon class="icon" :name='prefix'></v-icon>
            </span>
            <span :class='{["v-input-icon-suffix"]:prefix,[`v-input-icon-suffix-${size}`]:true}' v-if='suffix'>
                <v-icon class="icon" :name='suffix'></v-icon>
            </span>
            <input
                ref="input"
                :class="{[`v-input-${size}`]:true,[`v-input`]:true,['v-input-prefix']:prefix}"
                :type="type"
                :disabled='disabled'
                :readonly='readonly'
                :maxlength="maxlength"
                :value="currentValue"
                :placeholder="placeholder"
                @keyup.enter="handleEnter"
                @keyup="handleKeyup"
                @keypress="handleKeypress"
                @keydown="handleKeydown"
                @focus="handleFocus"
                @blur="handleBlur"
                @input="handleInput">
        </template>
        <textarea
            v-else
            :type="type"
            ref="textarea">
        </textarea>
    </section>
</template>

<script>
import vIcon from '../../icon/src/index.vue';
export default {
    name:'v-input',
    components: {
        vIcon
    },

    props: {
        type:{
            type:String,
            default:'text'
        },
        placeholder:{
            type:String,
            default:''
        },
        disabled:{
            type:Boolean,
            default:false
        },
        readonly:{
            type:Boolean,
            default:false
        },
        size:{
            type:String,
            default:''
        },
        // 头部icon
        prefix:{
            type:String,
            default:''
        },
        maxlength: {
            type: Number
        },
        // 尾部
        suffix:{
            type:String,
            default:''
        },
        value:{
            type: [String, Number],
            default: ''
        },
    },

    data() {
        return {
            currentValue: this.value,
        }

    },

    watch: {},

    methods: {
        handleInput(event){
            let value = event.target.value;
            // if (this.number && value !== '') value = Number.isNaN(Number(value)) ? value : Number(value);
            this.$emit('input', value);
            // this.setCurrentValue(value);
            this.$emit('on-change', event);
        },
        handleEnter(event){
            this.$emit('on-enter', event);
        },
        handleKeydown (event) {
            this.$emit('on-keydown', event);
        },
        handleKeypress(event) {
            this.$emit('on-keypress', event);
        },
        handleKeyup (event) {
            this.$emit('on-keyup', event);
        },
        handleIconClick (event) {
            this.$emit('on-click', event);
        },
        handleFocus (event) {
            this.$emit('on-focus', event);
        },
        handleBlur (event) {
            this.$emit('on-blur', event);
        },
    },

    mounted() {},

}
</script>

<style lang='scss' scoped>
.v-input-wrap{
    position: relative;
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
    .v-input-prefix{
        padding-left:32px;
    }
    // 头部icon 默认样式
    .v-input-icon-prefix{
        width:32px;
        height:100%;
        position: absolute;
        top:0;
        left:0;
        z-index: 1;
        display: inline-block;
        vertical-align: middle; 
        padding: 4px 7px;
        .icon{
            width:1em;
            height:1em;
        }
    }
    // 头部icon large样式
    .v-input-icon-prefix-large{
        padding: 6px 6px;
    }
    // 头部icon small样式
    .v-input-icon-prefix-small{
        padding: 1px 6px;
    }
    // 尾部图标
    .v-input-prefix{
        padding-right:32px;
    }
    .v-input-icon-suffix{
        width:32px;
        height:100%;
        position: absolute;
        top:0;
        right:0;
        z-index: 1;
        display: inline-block;
        vertical-align: middle; 
        padding: 4px 7px;
        .icon{
            width:1em;
            height:1em;
        }
    }
    // 头部icon large样式
    .v-input-icon-suffix-large{
        padding: 6px 6px;
    }
    // 头部icon small样式
    .v-input-icon-suffix-small{
        padding: 1px 6px;
    }
}

</style>
