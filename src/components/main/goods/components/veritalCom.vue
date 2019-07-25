<template>
  <div class="verital-components">
    <div class="verital-left">
        <p class="user-info">
           <img class="user-header" :src="data.avatar" alt="">
           <span class="user-name">{{data.name}}</span>
        </p>
        <p class="title">{{data.title}}</p>
        <p class="desc">{{data.desc}}</p>
        <p class="look-num">
          <span class="iconfont icon-chakanguo"></span>
          <span>{{data.lookNum}}人看过</span>
        </p>
    </div>
    <div class="verital-right">
       <img width="100%" height="100%" style="border-radius: 6px" :src="data.picUrl" alt="">
    </div>
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
  .verital-components{
    display: flex;
    margin-top: 10px;
    background: #fff;
    padding: 10/@base 15/@base;
    text-align: left
  }
  .verital-left{
    flex: 1;
    padding-right: 8/@base;
    box-sizing: border-box;
    .user-header{
      width: 27/@base;
      border-radius: 50%;
      margin-right: 8/@base
    }
    .user-name{
      line-height: 27/@base;
      font-size: 12px;
      color: #666
    }
    .title{
      font-size: 18px;
      line-height: 24px;
      color: #333;
      margin: 10px 0;
      width: 200/@base;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .desc{
      color: #7f7f7f;
      font-size: 14px;
      margin-bottom: 10px;
      width:200/@base;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap
    }
    .iconfont{
      display: inline-block;
      vertical-align: bottom
    }
    .look-num{
      font-size: 12px;
      color: #999;
      line-height: 14px
    }
  }
  .verital-right{
    width: 136/@base;
    height:136/@base
  }
</style>
