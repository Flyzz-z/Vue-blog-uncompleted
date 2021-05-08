<template>
    <div>
        <ul style="overflow:hidden">
            <li class="article-card-container" v-for="(articleCard,index) in pageinfos" :key="index">
                <article-card v-bind="articleCard"></article-card>
            </li>
        </ul>
    </div>
</template>

<script>
import ArticleCard from "./ArticleCard";
import {getArticleCards} from "@/request/api";
export default {
    props:{

    },
    data(){
        return{
            pageinfos: [
                
            ],
            pageNum: 1
        }
    },
    components:{    
        ArticleCard
    },
    mounted(){
        this.loadArticleCards();
    },
    methods: {
        loadArticleCards(){
            var that = this;
            getArticleCards({pageNum: that.pageNum}).then(res=>{
                that.pageinfos.push.apply(that.pageinfos,res.data.articles);
                that.pageNum+=1;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.article-card-container{
    margin-bottom: 97px;
    @media screen and(max-width: 992px) {
        margin-bottom: 40px;
    }
}
</style>