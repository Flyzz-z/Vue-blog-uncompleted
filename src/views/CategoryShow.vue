<template>
    <div class="category-show-wrapper">
        
        <div class="category-show">
            <article-info-list :showType="'category'"></article-info-list>
        </div>
    </div>
</template>

<script>
import ArticleInfoList from "@/components/article/ArticleInfoList.vue"
export default {
    components:{
        ArticleInfoList
    },
    created(){
        this.$store.commit("changeColor","#cde6c7")
    }
}
</script>


<style lang="scss" scoped>

</style>