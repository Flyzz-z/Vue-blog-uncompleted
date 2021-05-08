<template>
  <div class="profile-card">
    <div class="card-header">
      <router-link to="/">
        <div class="pic">
          <img src="../assets/img/avatar.jpeg" alt="" />
        </div>
      </router-link>
      <div class="name">{{this.$store.state.pageTitle}}</div>
      <!--<div class="desc">博客</div>-->
      <div class="sm">
        <a href="#" class="fab fa-facebook-f"  aria-hidden="true"></a>
        <a href="#" class="fab fa-weixin"  aria-hidden="true"></a>
        <a href="#" class="fab fa-github"  aria-hidden="true"></a>
        <a href="#" class="fab fa-qq"  aria-hidden="true"></a>
      </div>
    </div>

    <div class="card-footer">
      <div class="numbers">
        <!--<div class="item">ani
          <span>120</span>
          Posts
        </div>
        <div class="border"></div>
        <div class="item">
          <span>127</span>
          Following
        </div>
        <div class="border"></div>
        <div class="item">
          <span>120K</span>
          Followers
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>


<style scoped>
.profile-card{
  width: 350px;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
}
.card-header{
  padding: 50px 40px 40px 40px;
}
.pic{
  display: inline-block;
  padding: 9px;
  background: linear-gradient(130deg, #74b9ff, #e66767);
  margin: auto;
  border-radius: 50%;
  background-size: 200% 200%;
  animation: animated-gradient 2s linear infinite;
}

@keyframes animated-gradient{
  25%{
    background-position: left bottom;
  }
  50%{
    background-position: right bottom;
  }
  75%{
    background-position: right top;
  }
  100%{
    background-position: left top;
  }
}

.pic img{
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.name{
  color: #f2f2f2;
  font-size: 28px;
  font-weight: 600;
  margin: 15px 0 10px 0;
}
.sm{
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.sm a{
  color: #f2f2f2;
  width: 56px;
  font-size: 22px;
  transition: .3s linear;
}
.sm a:hover{
  color:#3e4145;
}
/*.contact-btn{
  display: inline-block;
  padding: 12px 50px;
  color: #e66767;
  border: 2px solid #e66767;
  border-radius: 6px;
  margin-top: 18px;
  transition: .3s linear;
}
.contact-btn:hover{
  background: #e66767;
  color: #f2f2f2;
}*/

/*.card-footer{
  background: #f4f4f4;
  padding: 30px 10px;
}
.numbers{
  display: flex;
  align-items: center;
}
.item{
  flex: 1;
  text-transform: uppercase;
  font-size: 13px;
  color: #e66767;
}
.item span{
  display: block;
  color: #2c3a47;
  font-size: 30px;
}
.border{
  width: 1px;
  height: 30px;
  background: #bbb;
}*/
</style>