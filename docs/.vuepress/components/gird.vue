<template>
    <section>
        <v-row class='demo-row'>
            <v-col span='24' class='demo-col'>24:100%</v-col>
        </v-row>
        <v-row class='demo-row'>
            <v-col span='12' class='demo-col'>12:50%</v-col>
            <v-col span='12' class='demo-col light'>12:50%</v-col>
        </v-row>
        <v-row class='demo-row'>
            <v-col span='8' class='demo-col'>8:33.33%</v-col>
            <v-col span='8' class='demo-col light'>8:33.33%</v-col>
            <v-col span='8' class='demo-col'>8:33.33%</v-col>
        </v-row>
        <v-row class='demo-row'>
            <v-col span='6' class='demo-col'>6:25%</v-col>
            <v-col span='6' class='demo-col light'>6:25%</v-col>
            <v-col span='6' class='demo-col'>6:25%</v-col>
            <v-col span='6' class='demo-col light' >6:25%</v-col>
        </v-row>
         <v-row class='demo-row'>
            <v-col span='16' class='demo-col'>16:66.66%</v-col>
            <v-col span='8' class='demo-col light'>8:33.33%</v-col>
        </v-row>
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
