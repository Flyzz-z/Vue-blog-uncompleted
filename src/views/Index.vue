<template>
  <div class="index">
    <div class="header-bg">
      <el-row style="height: 60px; margin-top: 7px">
        <el-col :span="4" :offset="1">
          <img src="../assets/img/Flyzz.png" />
        </el-col>

        <div class="search-box animate__animated animate__bounceInDown" v-on:keyup.enter.stop="search">
          <input
            class="search-txt"
            type="text"
            name=""
            v-model="keywords"
            placeholder="请输入内容"
          />
          <span class="search-btn" v-on:click="search">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </el-row>

      <div class="profile animate__animated animate__fadeIn">
        <profile-card></profile-card>
      </div>

      <div class="contact-btn-wrapper animate__animated animate__fadeInRight">
        <div @click="scrollTo" class="contact-btn">Welcome</div>
      </div>
    </div>

    <div id="articlecard-show-starter"></div>
    <div class="articlecard-list-wrapper">
      <article-card-list></article-card-list>
    </div>

    <div class="footer"></div>
  </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue";
//import ArticleCard from "@/components/ArticleCard.vue";
import ArticleCardList from "@/components/article/ArticleCardList.vue";

export default {
  name: "index",
  data(){
    return {
      keywords: "",
    }
  },
  components: {
    ProfileCard,
    ArticleCardList
  },
  mounted(){
    this.$store.commit("changePageTitle","Flyzz的博客");
  },
  methods: {
    scrollTo: function(){
      document.querySelector("#articlecard-show-starter").scrollIntoView(true);
    },
    search: function(){
      //if(event instanceof KeyboardEvent && event.key!="Enter") return;
      this.$router.push({path: 's/search',query:{
        "pageNum": 1,
        "keywords":this.keywords
      }})
    }
  }
};
</script>

<style lang="scss" scope>
.header-bg {
  // background: #bb505dcf;
  background: #bb505d;
  //background: #fab27b;
  height: 100vh;
  min-height: 480px;
  position: relative;
  overflow: hidden;
  .profile {
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .search-box {
    position: absolute;
    right: 5%;
    background: #8f4b38;
    height: 40px;
    border-radius: 40px;
    padding: 5px;
    margin: 5px;

    &:hover {
      > .search-txt {
        width: 220px;
        @media screen and(max-width:768px) {
          width: 120px;
        }
        padding: 0 6px;
      }

      > .search-btn {
        background: white;
      }
    }

    .search-btn {
      color: #e84118;
      float: right;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      // background: #2f3640;
      background: #464547;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .search-txt {
      border: none;
      background: none;
      outline: none;
      float: left;
      padding: 0;
      color: white;
      font-size: 16px;
      transition: 0.4s;
      line-height: 40px;
      width: 0px;
    }
  }

  .contact-btn-wrapper {
    display: flex;
    justify-content: center;
    .contact-btn {
      display: inline-block;
      padding: 12px 48px;
      color:  #e66767;
      font-weight: 600;
      border: 3px solid #e66767;
      border-radius: 6px;
      margin-top: 8px;
      transition: 0.3s linear;
      &:hover {
        background: #e66767;
        color: #f2f2f2;
        cursor:pointer;
      }
    }
  }
}

.articlecard-list-wrapper {
  margin-top: 80px;
  @media screen and(max-width: 768px) {
    margin-top: 30px;
  }
}

.footer {
  height: 60px;
  background: #000000;
}
</style>


