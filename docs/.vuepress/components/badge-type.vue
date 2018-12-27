<template>
    <section style='padding-top:20px'>
        
        <v-badge :count="5" type="primary">
            <a href="#" class="demo-badge"></a>
        </v-badge>
        <br>
        <v-badge :count="5" type="success">
            <a href="#" class="demo-badge"></a>
        </v-badge>
        <br>
        <v-badge :count="5" type="normal">
            <a href="#" class="demo-badge"></a>
        </v-badge>
        <br>
        <v-badge :count="5" type="info">
            <a href="#" class="demo-badge"></a>
        </v-badge>
        <br>
        <v-badge :count="5" type="error">
            <a href="#" class="demo-badge"></a>
        </v-badge>
        <br>
        <v-badge :count="5" type="warning">
            <a href="#" class="demo-badge"></a>
        </v-badge>
        <br>
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
            <v-badge :count="5" type="primary">
                <a href="#" class="demo-badge"></a>
            </v-badge>
            <br>
            <v-badge :count="5" type="success">
                <a href="#" class="demo-badge"></a>
            </v-badge>
            <br>
            <v-badge :count="5" type="normal">
                <a href="#" class="demo-badge"></a>
            </v-badge>
            <br>
            <v-badge :count="5" type="info">
                <a href="#" class="demo-badge"></a>
            </v-badge>
            <br>
            <v-badge :count="5" type="error">
                <a href="#" class="demo-badge"></a>
            </v-badge>
            <br>
            <v-badge :count="5" type="warning">
                <a href="#" class="demo-badge"></a>
            </v-badge>
            <br>`
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
