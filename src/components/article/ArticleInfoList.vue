<template>
  <div class="article-info-list">
    <ul style="overflow: hidden">
      <li
        class="article-info-container"
        v-for="(articleInfo, index) in pageInfos"
        :key="index"
      >
        <article-info v-bind="articleInfo"></article-info>
      </li>
    </ul>
  </div>
</template>


<script>
import ArticleInfo from "@/components/article/ArticleInfo.vue";
import { getArticleByCategory,getArticleByKeywords} from "@/request/api";
export default {
  props: {
    showType: String,
  },
  data() {
    return {
      pageNum: 1,
      pageInfos: [],
      pageTitle: "",
    };
  },
  components: {
    ArticleInfo,
  },
  methods: {
    loadArticleInfos() {
      var that = this;
              console.log(this.showType);
      if (that.showType == "category") {
        getArticleByCategory({
          pageNum: that.pageNum,
          categoryId: that.$route.params.categoryId,
        }).then((res) => {
          that.pageInfos.push.apply(that.pageInfos, res.data.articles);
          that.pageNum += 1;
          that.pageTitle = that.pageInfos[0].articleCategory.categoryName;
        });
      } else{

        getArticleByKeywords({
          pageNum: that.pageNum,
          keywords: that.$route.query.keywords,
        }).then((res) => {
          that.pageInfos.push.apply(that.pageInfos, res.data.articles);
          that.pageNum += 1;
        });
      }
    },
  },
  mounted() {
    this.loadArticleInfos();
  },
  watch: {
    pageTitle: function () {
      this.$store.commit("changePageTitle", this.pageTitle);
    },
  },
};
</script>

<style lang="scss" scoped>
.article-info-list {
  ul {
    border-left: 2px solid #905d1d;
    .article-info-container {
      margin-bottom: 7px;
      @media screen and(max-width:768px) {
        margin-bottom: 3px;
      }
      &:last-child{
        margin-bottom: 0px;
      }
    }
  }
  margin-bottom: 30px;
}
</style>