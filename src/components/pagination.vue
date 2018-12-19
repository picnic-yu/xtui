<template>
    <section class="page">
        <v-pagination @pageChange="change" :count="count" :limit="limit" :info="info"></v-pagination>
    </section>
</template>

<script >
export default {
    components: {},

    props: {},

    data() {
        return {
            count: 162,
            limit: 5,
            info: {
                firstInfo: '<<',
                prevInfo: '<',
                nextInfo: '>',
                lastInfo: '>>'
            }
        }

    },

    watch: {},

    methods: {
        change (pageNumber) {
            console.log(pageNumber)
        }
    },

    mounted() {},

}
</script>

<style lang='scss' scoped>
 
</style>
