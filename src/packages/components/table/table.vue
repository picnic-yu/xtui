<template>
    <section class='v-table-wrap'>
        <table >
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Savings</th>
                    <th>Savings</th>
                    <th>Savings</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>January</td>
                    <td>$100</td>
                    <td>$100</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>February</td>
                    <td>February</td>
                    <td>February</td>
                    <td>$80</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
export default {
    name:"v-table",
    components: {
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

<style lang='scss' scoped>
@import './table';
</style>
