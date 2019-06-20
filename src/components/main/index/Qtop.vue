<template>
  <div class="home-header">
    <div class='home-label'>
      <div class="logo">
        <img src="static/image/icon_title.png" alt="">
      </div>
      <div class="search" @click="$router.push('/search')">
        <div class="input">
          <img src="static/image/icon_search.png" alt="">
          搜索商品，共{{shopNum}}款好物
        </div>
      </div>
      <div class="user" @click="isLogin">
        {{$store.state.userName}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      shopNum: 10000
    }
  },
  components: {
  },
  methods: {
    isLogin () {
      if (this.$store.state.userName === '登录') {
        this.$router.push('/login')
      } else {
        this.$router.push('/home/single')
      }
    }
  }
}
</script>
<style scoped lang="less">
  @base:37.5rem;
  ::-webkit-scrollbar{
    width: 0;
    height:0;
    background: transparent;
  }
  .home-header{
    overflow: hidden;
    .home-label{
      height:40/@base;
      font-size: 14px;
      background:#b4282d;
      text-align: left
    }
    .logo{
      display: inline-block;
      vertical-align: middle;
      width:24%;
      font-size: 16/@base;
      text-align: center;
      line-height: 40/@base;
      img{
        width: 70%;
        vertical-align: middle
      }
    }
    .search{
      display: inline-block;
      vertical-align: middle;
      width:56%;
      .input{
        height:30/@base;
        line-height: 32/@base;
        width:100%;
        text-align: left;
        font-size: 12/@base;
        background: #eaeaea;
        border-radius: 4px;
        padding-left:12/@base;
        box-sizing: border-box;
        img{
          width:16/@base;
          vertical-align: text-bottom;
          margin-right:5px
        }
      }
    }
    .user{
      width:16%;
      color:#fff;
      display: inline-block;
      vertical-align: middle;
      text-align: center
    }
  }
</style>
