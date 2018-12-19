<template lang="html">
    <nav class="pagination">
        <a href="javascript:;" class="pagination-item first" @click="goFirst()" v-if="pageNumber > 1">{{info.firstInfo}}</a>
        <a href="javascript:;" class="pagination-item prev" @click="goPrev()" v-if="pageNumber > 1">{{info.prevInfo}}</a>
        <ul class="pagination-list" v-if="ellipsis">
        <li class="pagination-item" @click="goFirst()" v-if="pageNumber > 1">1</li>
        <li class="pagination-item ellipsis" v-if="pageNumber - (max + 1) > 1">...</li>
        <li class="pagination-item"
            @click="goPage(pageNumber - pageIndex)"
            v-if="pageNumber - pageIndex > 1"
            v-for="pageIndex in rPageData"
            :key="pageNumber - pageIndex">
            {{pageNumber - pageIndex}}
        </li>
        <li class="pagination-item current" @click="goPage(pageNumber)">{{pageNumber}}</li>
        <li class="pagination-item"
            @click="goPage(pageNumber + pageIndex)"
            v-if="pageNumber + pageIndex < pageCount"
            v-for="pageIndex in pageData"
            :key="pageNumber + pageIndex">
            {{pageNumber + pageIndex}}
        </li>
        <li class="pagination-item ellipsis" v-if="pageNumber + max + 1 < pageCount">...</li>
        <li class="pagination-item" @click="goLast()" v-if="pageNumber < pageCount">{{pageCount}}</li>
        </ul>
        <ul class="pagination-list" v-if="!ellipsis">
        <li :class="pageIndex === pageNumber ? 'pagination-item current' : 'pagination-item'"
            @click="goPage(pageIndex)"
            v-for="pageIndex in pageDataFront"
            v-if="pageNumber < max + 1"
            :key="pageIndex">
            {{pageIndex}}
        </li>
        <li :class="pageIndex === pageNumber ? 'pagination-item current' : 'pagination-item'"
            @click="goPage(pageIndex)"
            v-for="pageIndex in pageDataCenter"
            v-if="pageNumber > pageCount - max"
            :key="pageIndex">
            {{pageIndex}}
        </li>
        <li :class="pageIndex === pageNumber ? 'pagination-item current' : 'pagination-item'"
            @click="goPage(pageIndex)"
            v-for="pageIndex in pageDataBehind"
            v-if="max + 1 <= pageNumber && pageNumber <= pageCount - max"
            :key="pageIndex">
            {{pageIndex}}
        </li>
        </ul>
        <a href="javascript:;" class="pagination-item next" @click="goNext()" v-if="pageNumber < pageCount">{{info.nextInfo}}</a>
        <a href="javascript:;" class="pagination-item last" @click="goLast()" v-if="pageNumber < pageCount">{{info.lastInfo}}</a>
    </nav>
</template>

<script>
export default {
    name:'v-pagination',
    props: {
        count: {
            type: Number,
            required: true
        },
        limit: {
            type: Number,
            required: true
        },
        curr: {
            type: Number,
            required: false,
            default: 1
        },
        max: {
            type: Number,
            required: false,
            default: 2
        },
        ellipsis: {
            type: Boolean,
            required: false,
            default: true
        },
        info: {
            type: Object,
            required: false,
            default: {
                firstInfo: '首页',
                prevInfo: '前一页',
                nextInfo: '后一页',
                lastInfo: '尾页'
            }
        }
    },
    data () {
        return {
            pageNumber: this.curr
        }
    },
    watch: {
        curr (newVal) {
            this.pageNumber = newVal
        }
    },
    computed: {
        pageData () {
            let pageData = []
            for (let index = 1; index <= this.max; index++) {
                pageData.push(index)
            }
            return pageData
        },
        rPageData () {
            return this.pageData.slice(0).reverse()
        },
        pageDataFront () {
            let pageDataFront = []
            for (let index = 1; index <= this.max * 2 + 1; index++) {
                pageDataFront.push(index)
            }
            return pageDataFront
        },
        pageDataCenter () {
            let pageDataCenter = []
            for (let index = this.pageCount - this.max * 2; index <= this.pageCount; index++) {
                pageDataCenter.push(index)
            }
            return pageDataCenter
        },
        pageDataBehind () {
            let pageDataBehind = []
            for (let index = this.pageNumber - this.max; index <= this.pageNumber + this.max; index++) {
                pageDataBehind.push(index)
            }
            return pageDataBehind
        },
        pageCount () {
            return Math.ceil(this.count / this.limit)
        }
    },
    methods: {
        goFirst () {
            this.pageNumber = 1
            this.$emit('pageChange', 1)
        },
        goPrev () {
            this.pageNumber--
            this.$emit('pageChange', this.pageNumber)
        },
        goPage (pageNumber) {
            this.pageNumber = pageNumber
            this.$emit('pageChange', this.pageNumber)
        },
        goNext () {
            this.pageNumber++
            this.$emit('pageChange', this.pageNumber)
        },
        goLast () {
            this.pageNumber = this.pageCount
            this.$emit('pageChange', this.pageNumber)
        }
    }
}
    
</script>

<style lang='scss' scoped>
 
</style>
