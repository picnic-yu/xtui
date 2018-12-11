<template>
    <section >
        <v-button  type='error'  icon='qiandao'>按钮</v-button>
        <v-button  type='info'  icon='qiandao'>按钮</v-button>
        <v-button  type='success'  icon='qiandao'>按钮</v-button>
        <v-button  type='primary'  icon='qiandao'>按钮</v-button>
        <v-button  type='waring'  icon='qiandao'>按钮</v-button>
        <v-button position='right'  icon='qiandao'>按钮</v-button>
        
        <pre>
            <code>{{content}}</code>
        </pre>
        
    </section>
</template>

<script>
import vButton from '../../../src/components/button/index.vue';
import '../../../src/assets/js/svg.js'
export default {
    components: {
        "v-button":vButton
    },

    props: {},

    data() {
        return {
            content:`
            <v-button  type='error'  icon='qiandao'>按钮</v-button>
            <v-button  type='info' icon='qiandao' >按钮</v-button>
            <v-button  type='success'  icon='qiandao'>按钮</v-button>
            <v-button  type='primary'  icon='qiandao'>按钮</v-button>
            <v-button  type='waring'  icon='qiandao'>按钮</v-button>
            <v-button position='left' icon='qiandao' >按钮</v-button>`
        }

    },

    watch: {},

    methods: {},

    mounted() {
        
    },

}
</script>

<style  scoped>
 
</style>
