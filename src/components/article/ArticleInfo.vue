<template>
  <div class="article-info-wrapper">
    <div class="article-info">
      <div class="article-title-wrapper">
        <div class="article-title">
          <h3>
            <span v-on:click="toArticle">{{ articleTitle }}</span>
          </h3>
        </div>
        <div class="article-date article-create-time">
          <i
            class="fas fa-hourglass-start"
            aria-hidden="true"
            style="display: inline-block; margin-right: 3px"
          ></i>
          <i>{{ articleCreateTime }}</i>
        </div>
      </div>
      <div class="article-category"></div>
      <div class="article-excerpts">
        <p>{{ articleExcerpts }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articleId: Number,
    articleTitle: {
      type: String,
      default: "HelloWorld!",
    },
    articleCreateTime: {
      type: String,
      default: "2001-01-21",
    },
    articleExcerpts: {
      type: String,
      default: "你好，xzz",
    },
  },
  methods: {
    toArticle: function () {
      this.$router.push({ path: "/s/article/" + this.articleId });
    },
  },
};
</script>

<style lang="scss" scoped>
.article-info {
  position: relative;
  box-sizing: border-box;
  max-width: 786px;
  min-width: 768px;
  padding: 25px;
  height: 145px;
  background: #fffffb;
  border-radius: 1px 2px 2px 1px;
  box-shadow: 0 1px 2px 0 #feeeed90, 0 2px 4px 0 rgba(0, 0, 0, 0.19);
  @media screen and(max-width: 992px) {
    padding: 12px;
    width: 99vw;
    max-width: 720px;
    min-width: 200px;
  }
  @media screen and(max-width: 768px) {
    height: 120px;
  }
  .article-title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 18px;
    .article-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 2px;
      span {
        &:hover {
          cursor: pointer;
          color: #d93a49;
        }
      }
    }
    .article-date {
      margin-right: 1%;
      font-size: 14px;
      color: #281f1d;
    }

    @media screen and(max-width: 768px) {
      margin-bottom: 1rem;
      .article-title {
        font-size: 1.08rem;
      }
      .article-date {
        font-size: 0.8rem;
      }
    }
  }
  .article-excerpts {
    p {
      letter-spacing: 0.8px;
      line-height: 18px;
    }
    @media screen and(max-width: 768px) {
      position: absolute;
      top: 48px;
    }
  }
}
</style>

