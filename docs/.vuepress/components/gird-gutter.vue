<template>
    <section >
        <!-- <v-row :gutter="16" class='demo-row'>
            <v-col span='6' >
                <div class="demo-col">
                    col-6
                </div>
            </v-col>
            <v-col span='6' >
                <div class="demo-col">
                    col-6
                </div>
            </v-col>
            <v-col span='6' >
                <div class="demo-col">
                    col-6
                </div>
            </v-col>
            <v-col span='6' >
                <div class="demo-col">
                    col-6
                </div>
            </v-col>
        </v-row> -->
        

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
            <v-row :gutter="16">
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
