<template>
  <div class="article-card-wrapper">
    <div class="article-card">
      <div class="article-img-wrapper" v-on:click.stop="showArticle">
        <img class="article-img" src="../../assets/img/girl.jpg"/>
      </div>

      <div class="article-info">
        <div class="article-title">
            <h3><span v-on:click.stop="showArticle">{{articleTitle}}</span></h3>
        </div>

        <div class="article-category">
          <i class="fas fa-bookmark" aria-hidden="true" style="display:inline-block;margin-right:3px"></i>
          <i>{{articleCategory.categoryName}}</i>
        </div>

        <el-row class="article-date" type="flex" justify="space-between">
          <div>
            <i class="fas fa-hourglass-start" aria-hidden="true" style="display:inline-block;margin-right:2px"></i>
            <i>{{articleCreateTime}}</i>
          </div>
          <div>
            <i class="fas fa-hourglass-end" aria-hidden="true" style="display:inline-block;margin-right:2px"></i>
            <i>{{articleUpdateTime}}</i>
          </div>
        </el-row>

        <div class="article-label"></div>

        <div class="article-excerpts">
          <p>{{articleExcerpts}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    articleId: Number,
    articleTitle: String,
    articleCreateTime: String,
    articleUpdateTime: String,
    articleCategory: Object,
    articleExcerpts: String
  },
  data: function() {
    return {
      
    }
  },
  methods: {
    showArticle() {
      let url = "s/article/" + this.articleId;
      this.$router.push(url);
      console.log(this);
    }
  }
};
</script>


<style lang="scss" scoped>
.article-card-wrapper {
  position: relative;
  //height: 370px;
  padding: 20px 0;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  .article-card {
    height: 390px;
    width: auto;
    border-radius: 3px;
    //border: solid black 1px;
    box-shadow: 0 4px 8px 0 #feeeed40, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    overflow: hidden;
    @media screen and(min-width: 992px) {
      display: flex;
    }
    @media screen and(max-width: 992px) {
      width: 94vw;
      max-width: 540px;
      height: 310px;
    }
    .article-img-wrapper {
      height: 100%;
      width: 540px;
      background:#ca8687Af;
      @media screen and(max-width: 992px) {
        height: 72%;
        width: 100%;
      }

      transition: background-color 0.7s;
      &:hover{
        background:#ca86875f;
        cursor:pointer;
      }

      img.article-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -2;
        position: relative;

      }
    }
    .article-info {
      height: 100%;
      width: 350px;
      min-width: 350px;
      background: #fffffb;
      overflow: hidden;
      @media screen and(max-width: 992px) {
        height: 40%;
        width: 100%;
      }
      .article-title{
        font-size: 20px;
        font-weight: 600;
        margin: 6% 2% 5% 3%;
        letter-spacing:1.2px;
        @media screen and(max-width: 992px) {
          font-size: 18px;
          margin: 3% 0 0 2.7%;
          letter-spacing: 1px;
        }
        h3 span{
          color: #281f1d;
          &:hover{
            cursor:pointer;
            color: #d93a49;;
          }
        }
      }

      //日期样式
      .article-date{
        padding:4% 3%;
        color: #281f1d;
        font-size: 14px;
        @media screen and(max-width: 992px) {
          font-size: 12px;
          padding: 2.7% 7% 2% 3%;
        }
      }

      //类别样式
      .article-category{
        font-size: 16px;
        margin: 4% 5% 1% 3%;
        color:#281f1d;
        @media screen and(max-width: 992px) {
          font-size: 13px;
          margin: 1.2% 3% 0 3%;
        }
      }

      .article-label{
        height: 0;
      }

      .article-excerpts{
        display: flex;
        justify-content: center;
        margin: 5% 4%;
        @media screen and(max-width: 992px) {
          display: none;
        }

        p{
          line-height: 18px;
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>
