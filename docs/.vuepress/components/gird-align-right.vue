<template>
    <section >
        <v-row class='demo-row' align='right'>
            <v-col span='4' >
                <div class="demo-col" style='height:40px'>
                    col-4
                </div>
            </v-col>
            <v-col span='4' >
                <div class="demo-col light" style='height:60px'>
                    col-4
                </div>
            </v-col>
            <v-col span='4' >
                <div class="demo-col" style='height:50px'>
                    col-4
                </div>
            </v-col>
            <v-col span='4' >
                <div class="demo-col light" style='height:100px'>
                    col-4
                </div>
            </v-col>
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
            <v-row align='right'>
                <v-col span='4' >
                    <div  style='height:40px'>
                        col-4
                    </div>
                </v-col>
                <v-col span='4' >
                    <div  style='height:60px'>
                        col-4
                    </div>
                </v-col>
                <v-col span='4' >
                    <div style='height:50px'>
                        col-4
                    </div>
                </v-col>
                <v-col span='4' >
                    <div style='height:100px'>
                        col-4
                    </div>
                </v-col>
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
