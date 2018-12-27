<template>
    <section >
        <v-alert>alert info
            <template slot="desc">
                Content of prompt. Content of prompt. Content of prompt. Content of prompt. 
            </template>
        </v-alert>
        <v-alert type='success'>alert success
            <template slot="desc">
                Content of prompt. Content of prompt. Content of prompt. Content of prompt. 
            </template>
        </v-alert>
        <v-alert type='error'>alert error
            <template slot="desc">
                Custom error description copywriting. 
            </template>
        </v-alert>
        <v-alert type='warning' >alert warning 
            <template slot="desc">
                Content of prompt. Content of prompt. Content of prompt.
            </template>
        </v-alert>
  
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
            <v-alert>alert info
                <template slot="desc">
                    Content of prompt. Content of prompt. Content of prompt. Content of prompt. 
                </template>
            </v-alert>
            <v-alert type='success'>alert success
                <template slot="desc">
                    Content of prompt. Content of prompt. Content of prompt. Content of prompt. 
                </template>
            </v-alert>
            <v-alert type='error'>alert error
                <template slot="desc">
                    Custom error description copywriting. 
                </template>
            </v-alert>
            <v-alert type='warning' >alert warning 
                <template slot="desc">
                    Content of prompt. Content of prompt. Content of prompt.
                </template>
            </v-alert>`
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
