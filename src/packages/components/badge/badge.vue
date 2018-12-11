<template>
<div class="bader-wrap">
    <span v-if="dot" :class="classes" ref="badge">
        <slot></slot>
        <sup :class="dotClasses" :style="styles" v-show="badge"></sup>
    </span>
    <span v-else-if="status" :class="classes" class="v-badge-status" ref="badge">
        <span :class="statusClasses"></span>
        <span class="v-badge-status-text">{{ text }}</span>
    </span>
    <span v-else :class="classes" ref="badge">
        <slot></slot>
        <sup v-if="hasCount" :style="styles" :class="countClasses" v-show="badge">{{ finalCount }}</sup>
    </span>
</div>
</template>
<script>
    const prefixCls = 'v-badge';
    export default {
        name: 'v-badge',
        props: {
            // 显示的数字，大于overflowCount时，显示${overflowCount}+，为 0 时隐藏
            count: Number,
            // 是否显示dot点
            dot: {
                type: Boolean,
                default: false
            },
            // 最多得数字
            overflowCount: {
                type: [Number, String],
                default: 99
            },
            className: String,
            // 0得时候是否展示
            showZero: {
                type: Boolean,
                default: false
            },
            text: {
                type: String,
                default: ''
            },
            status: {
                type:String,
                validator(value){
                    return ['success', 'processing', 'default', 'error', 'warning'].indexOf(value) >= 0;
                }
            },
            type: {
                type:String,
                validator(value){
                    return ['success', 'primary', 'normal', 'error', 'warning', 'info'].indexOf(value) >= 0;
                }
            },
            offset: {
                type: Array
            }
        },
        computed: {
            classes () {
                return `${prefixCls}`;
            },
            dotClasses () {
                return `${prefixCls}-dot`;
            },
            countClasses () {
                return [
                    `${prefixCls}-count`,
                    {
                        [`${this.className}`]: !!this.className,
                        [`${prefixCls}-count-alone`]: this.alone,
                        [`${prefixCls}-count-${this.type}`]: !!this.type
                    }
                ];
            },
            statusClasses () {
                return [
                    `${prefixCls}-status-dot`,
                    {
                        [`${prefixCls}-status-${this.status}`]: !!this.status
                    }
                ];
            },
            styles () {
                const style = {};
                if (this.offset && this.offset.length === 2) {
                    style['margin-top'] = `${this.offset[0]}px`;
                    style['margin-right'] = `${this.offset[1]}px`;
                }
                return style;
            },
            finalCount () {
                if (this.text !== '') return this.text;
                return parseInt(this.count) >= parseInt(this.overflowCount) ? `${this.overflowCount}+` : this.count;
            },
            badge () {
                let status = false;

                if (this.count) {
                    status = !(parseInt(this.count) === 0);
                }

                if (this.dot) {
                    status = true;
                    if (this.count !== null) {
                        if (parseInt(this.count) === 0) {
                            status = false;
                        }
                    }
                }

                if (this.text !== '') status = true;

                return status || this.showZero;
            },
            hasCount() {
                if(this.count || this.text !== '') return true;
                if(this.showZero && parseInt(this.count) === 0) return true;
                else return false;
            },
            alone () {
                return this.$slots.default === undefined;
            }
        }
    };
</script>
<style lang='scss' scoped>
.bader-wrap{
    .v-badge{
        position: relative;
        display: inline-block;
        
        .v-badge-count{
            font-family: Monospaced Number;
            line-height: 1;
            vertical-align: middle;
            position: absolute;
            transform: translateX(50%);
            top: -10px;
            right: 0;
            height: 20px;
            border-radius: 10px;
            min-width: 20px;
            background: #ed4014;
            border: 1px solid transparent;
            color: #fff;
            line-height: 18px;
            text-align: center;
            padding: 0 6px;
            font-size: 12px;
            white-space: nowrap;
            transform-origin: -10% center;
            z-index: 10;
            box-shadow: 0 0 0 1px #fff;
        }

        .v-badge-dot{
            position: absolute;
            transform: translateX(-50%);
            transform-origin: 0 center;
            top: -4px;
            right: -8px;
            height: 8px;
            width: 8px;
            border-radius: 100%;
            background: #ed4014;
            z-index: 10;
            box-shadow: 0 0 0 1px #fff;
        }
        // type primary
        .v-badge-count-primary{
            background: #2d8cf0;
        }
        // type success
        .v-badge-count-success{
            background: #19be6b;
        }
        // type normal
        .v-badge-count-normal{
            background: #e6ebf1;
            color: #808695;
        }
        // type info
        .v-badge-count-info{
            background: #2db7f5;
        }
        // type error
        .v-badge-count-error{
            background: #ed4014;
        }
        // type warning
        .v-badge-count-warning{
            background: #f90;
        }
    }

    // 状态
    .v-badge-status{
        line-height: inherit;
        vertical-align: baseline;
        .v-badge-status-dot{
            width: 6px;
            height: 6px;
            display: inline-block;
            border-radius: 50%;
            vertical-align: middle;
            position: relative;
            top: -1px;
        }
        
        .v-badge-status-text{
            display: inline-block;
            color: #515a6e;
            font-size: 12px;
            margin-left: 6px;
        }
        .v-badge-status-success{
            background-color: #19be6b;
        }
        .v-badge-status-error{
            background: #ed4014;
        }
        .v-badge-status-default{
            background: #e6ebf1;
        }
        .v-badge-status-processing{
            background: #2d8cf0;
        }
        .v-badge-status-success{
            background: #f90;
        }
    }
    
}    
</style>