<template>
    <div class="search-show-wrapper">
        <div class="search-bar">
            
        </div>

        <div class="search-result">
            <article-info-list></article-info-list>
        </div>
    </div>
</template>

<script>
import ArticleInfoList from "@/components/article/ArticleInfoList";
export default {
    data(){
        return {
            ArticleInfos: []
        }
    },
    components: {
        ArticleInfoList
    },
    mounted() {
        this.$store.commit("changeColor","#867892");
    }
}
</script>

<style lang="scss" scoped>

</style>