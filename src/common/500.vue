<template>
  <div class='error500'>
    <img src="/static/image/500.jpeg" alt="">
    <span @click="goback">返回首页</span>
  </div>
</template>
<script>
export default {
  methods: {
    goback () {
      this.$router.replace('/')
    }
  }
}
</script>
<style scoped>
  .error500{
    background: #000;
    height:100%;
    text-align: center;
    overflow: hidden
  }
  img{
    width:100%;
    margin-top:20%
  }
  span{
    display: inline-block;
    padding:10px 20px;
    background: #fff;
    color:#000;
    margin-top: 25%;
    border-radius: 10px;
  }
</style>
