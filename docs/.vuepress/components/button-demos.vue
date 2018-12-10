<template>
    <section >
        <v-button  type='error'  >按钮</v-button>
        <v-button  type='info'  >按钮</v-button>
        <v-button  type='success'  >按钮</v-button>
        <v-button  type='primary'  >按钮</v-button>
        <v-button  type='waring'  >按钮</v-button>
        <v-button position='right'  >按钮</v-button>
        
        <pre>
            <code>{{content}}</code>
        </pre>
        
    </section>
</template>

<script>
import vButton from '../../../src/components/button/index.vue';
export default {
    components: {
        "v-button":vButton
    },

    props: {},

    data() {
        return {
            content:`
            <v-button  type='error'  >按钮</v-button>
            <v-button  type='info'  >按钮</v-button>
            <v-button  type='success'  >按钮</v-button>
            <v-button  type='primary'  >按钮</v-button>
            <v-button  type='waring'  >按钮</v-button>
            <v-button position='left'  >按钮</v-button>`
        }

    },

    watch: {},

    methods: {},

    mounted() {
        console.log(333333333333333)
    },

}
</script>

<style  scoped>
 
</style>
