<template>
    <section>
        <v-row class='demo-row'>
            <v-col span='12' class='demo-col'>col-12</v-col>
            <v-col span='12' class='demo-col light'>col-12</v-col>
        </v-row>
        <v-row class='demo-row'>
            <v-col span='8' class='demo-col'>col-8</v-col>
            <v-col span='8' class='demo-col light'>col-8</v-col>
            <v-col span='8' class='demo-col'>col-8</v-col>
        </v-row>
        <v-row class='demo-row'>
            <v-col span='6' class='demo-col'>col-6</v-col>
            <v-col span='6' class='demo-col light'>col-6</v-col>
            <v-col span='6' class='demo-col'>col-6</v-col>
            <v-col span='6' class='demo-col light' >col-6</v-col>
        </v-row>
        

        <pre>
            <code>{{content}}</code>
        </pre>
    </section>
</template>

<script type="text/ecmascript-6">
import vRow from '../../../src/packages/components/gird/row';
import vCol from '../../../src/packages/components/gird/col';
export default {
    components: {
        vRow,
        vCol
    },

    props: {},

    data() {
        return {
            content:`
            <v-row >
                <v-col span='12' >col-12</v-col>
                <v-col span='12'>col-12</v-col>
            </v-row>
            <v-row >
                <v-col span='8' >col-8</v-col>
                <v-col span='8'>col-8</v-col>
                <v-col span='8' >col-8</v-col>
            </v-row>
            <v-row >
                <v-col span='6' >col-6</v-col>
                <v-col span='6'>col-6</v-col>
                <v-col span='6' >col-6</v-col>
                <v-col span='6' >col-6</v-col>
            </v-row>`
        }

    },

    watch: {},

    methods: {},

    mounted() {},

}
</script>

<style scoped>
.demo-col{
    color: #fff;
    padding: 15px 0;
    text-align: center;
    font-size: 18px;
    background: rgba(0,153,229,.7);
}
.demo-col.light{
    background: rgba(0,153,229,.5);
}
.demo-row{
    margin-top:10px;
}
</style>
