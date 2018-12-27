<template>
    <section style='padding-top:20px'>
        <v-badge :count="3">
            <a href="#" class="demo-badge"></a>
        </v-badge>
        <br>
        <v-badge dot>
            <a href="#">可以是一个链接</a>
        </v-badge>
        <br>
        <v-badge :count="100">
            <a href="#" class="demo-badge"></a>
        </v-badge>
        
        <br>
        <v-badge text="new">
            <a href="#" class="demo-badge"></a>
        </v-badge>
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
            <v-badge :count="3">
                <a href="#" class="demo-badge"></a>
            </v-badge>
            <br>
            <v-badge dot>
                <a href="#">可以是一个链接</a>
            </v-badge>
            <br>
            <v-badge :count="100">
                <a href="#" class="demo-badge"></a>
            </v-badge>
            
            <br>
            <v-badge text="new">
                <a href="#" class="demo-badge"></a>
            </v-badge>`
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
