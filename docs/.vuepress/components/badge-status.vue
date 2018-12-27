<template>
    <section style='padding-top:20px'>
        <v-badge status="success" text='success' />
        <v-badge status="error" text='error' />
        <v-badge status="default" text='default' />
        <v-badge status="processing" text='processing' />
        <v-badge status="warning" text='warning' />
        <pre>
            <code>{{content}}</code>
        </pre>
    </section>
</template>

<script type="text/ecmascript-6">
import vBadge from '../../../src/packages/components/badge/badge.vue';
export default {
    components: {
        vBadge
    },

    props: {},

    data() {
        return {
            content:`
            <v-badge status="success" text='success' />
            <v-badge status="error" text='error' />
            <v-badge status="default" text='default' />
            <v-badge status="processing" text='processing' />
            <v-badge status="warning" text='warning' />`
        }

    },

    watch: {},

    methods: {},

    mounted() {},

}
</script>

<style scoped>
.demo-badge{
    width: 42px;
    height: 42px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
}
</style>
