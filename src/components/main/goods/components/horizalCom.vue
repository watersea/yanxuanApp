<template>
  <div class="horizal-component">
    <p class="user-info">
      <img class="user-header" :src="data.avatar" alt="">
      <span class="user-name">{{data.name}}</span>
    </p>
    <p class="desc">
     {{data.title}}
    </p>
    <img width="100%" style="border-radius:6px" :src="data.picUrl" alt="">
    <p class="look-info">
       <span class="iconfont icon-chakanguo"></span>
       <span>{{data.lookNum}}人看过</span>
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: ['data']
}
</script>
<style lang="less" scoped>
  @base: 37.5rem;
  .horizal-component{
    margin-top: 10px;
    text-align: left;
    padding: 10/@base 15/@base;
    background: #fff
  }
  .user-info{
    line-height: 27/@base;
    .user-header{
      width: 27/@base;
      height: 27@base;
      border-radius: 50%;
      margin-right: 10/@base
    }
    .user-name{
      font-size: 12px;
      color: #666
    }
  }
  .desc{
    color: #333;
    font-size: 18px;
    margin: 8px 0;
    line-height: 24px
  }
  .look-info{
    font-size: 12px;
    color: #999;
    line-height: 18px;
    margin-top: 15px
  }
  .iconfont{
    display: inline-block;
    vertical-align: bottom;
  }
</style>
