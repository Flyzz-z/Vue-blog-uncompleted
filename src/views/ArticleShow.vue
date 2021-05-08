<template>
  <div class="article-show-wrapper">
    <div class="markdown-body" v-html="article.articleContent">

    </div>
  </div>
</template>

<script>
import {getArticle} from "@/request/api";
export default {
  props:{
  },
  data() {
      return {
         article: {}
      }
  },
  mounted(){
    let articleId = this.$route.params.articleId;
    getArticle({"articleId": articleId}).then(res=>{
      this.article = res.data;
    }).then(()=>{
      this.$store.commit("changePageTitle",this.article.articleTitle);
      this.$store.commit("changeColor","#5bbfea")
    })
  }
};
</script>

<style lang="scss" scoped>

@import url("https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css");
.markdown-body {
  box-sizing: border-box;
  min-width: 780px;
  max-width: 980px;
  min-height: 100vh;
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 45px;
  background: #fffef9;
  @media screen and(max-width: 992px) {
    padding: 12px;
    width: 98vw;
    max-width: 768px;
    min-width: 200px;
  }
}
</style>
