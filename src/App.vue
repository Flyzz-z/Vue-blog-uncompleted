<template>
  <div id="app">
    <router-view class="index-view"></router-view>
  </div>
</template>

<script>

  
</script>


<style lang="scss">
  @import "./assets/css/reset.css";
  #app{
     font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB",
     "Microsoft YaHei","微软雅黑",Arial,sans-serif;
     height: 100%;
     width: 100%;
  }

  html,body{
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
    width: 6px;
    height: 100%;
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #00000033;
  }

</style>
