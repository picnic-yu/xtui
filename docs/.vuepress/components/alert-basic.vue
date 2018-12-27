<template>
    <section >
        <v-alert >alert info</v-alert>
        <v-alert type='success'>alert success</v-alert>
        <v-alert type='error'>alert error</v-alert>
        <v-alert type='warning' >alert warning </v-alert>
        
        
        <pre>
            <code>{{content}}</code>
        </pre>
        
    </section>
</template>

<script>
import vAlert from '../../../src/packages/components/alert/alert.vue';
export default {
    components: {
        vAlert
    },

    props: {},

    data() {
        return {
            content:`
            <v-alert>alert info</v-alert>
            <v-alert type='success'>alert success</v-alert>
            <v-alert type='error'>alert error</v-alert>
            <v-alert type='warning' >alert warning </v-alert>`
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
