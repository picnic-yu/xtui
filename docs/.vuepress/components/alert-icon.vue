<template>
    <section >
        <v-alert show-icon>alert info</v-alert>
        <v-alert show-icon type='success'>alert success</v-alert>
        <v-alert show-icon type='error'>alert error</v-alert>
        <v-alert show-icon type='warning' >alert warning </v-alert>
        
        <v-alert show-icon>alert info
            <template slot="desc">
                Content of prompt. Content of prompt. Content of prompt. Content of prompt. 
            </template>
        </v-alert>
        <v-alert show-icon type='success'>alert success
            <template slot="desc">
                Content of prompt. Content of prompt. Content of prompt. Content of prompt. 
            </template>
        </v-alert>
        <v-alert show-icon type='error'>alert error
            <template slot="desc">
                Custom error description copywriting. 
            </template>
        </v-alert>
        <v-alert show-icon type='warning' >alert warning 
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
import '../../../src/assets/js/svg.js'
export default {
    components: {
        vAlert
    },

    props: {},

    data() {
        return {
            content:`
            <v-alert show-icon>alert info</v-alert>
            <v-alert show-icon type='success'>alert success</v-alert>
            <v-alert show-icon type='error'>alert error</v-alert>
            <v-alert show-icon type='warning' >alert warning </v-alert>
            
            <v-alert show-icon>alert info
                <template slot="desc">
                    Content of prompt. Content of prompt. Content of prompt. Content of prompt. 
                </template>
            </v-alert>
            <v-alert show-icon type='success'>alert success
                <template slot="desc">
                    Content of prompt. Content of prompt. Content of prompt. Content of prompt. 
                </template>
            </v-alert>
            <v-alert show-icon type='error'>alert error
                <template slot="desc">
                    Custom error description copywriting. 
                </template>
            </v-alert>
            <v-alert show-icon type='warning' >alert warning 
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
