<template>
  <div class='good-show'>
    <top-tab></top-tab>
    <scroll-nav-bar :title="titles" v-if="titles.length > 0"></scroll-nav-bar>
    <div class="content">
      <div class='good-item'>
        <div class='good-pic'>
          <img class="good-img" src="static/image/default.jpg" alt="">
        </div>
        <p class="good-desc">小龙虾6-8钱 3斤</p>
        <p class="good-price">
          <span class="now-price">¥59.9</span>
          <span class="origin-price">¥69.9</span>
        </p>
      </div>
      <div class='good-item'>
        <div class='good-pic'>
          <img class="good-img" src="static/image/default.jpg" alt="">
        </div>
        <p class="good-desc">拉格啤酒 330毫升*24罐</p>
        <p class="good-price">
          <span class="now-price">¥59.9</span>
          <span class="origin-price">¥69.9</span>
        </p>
      </div>
      <div class='good-item'>
        <div class='good-pic'>
          <img class="good-img" src="static/image/default.jpg" alt="">
        </div>
        <p class="good-desc">泰国椰青 4颗装</p>
        <p class="good-price">
          <span class="now-price">¥59.9</span>
          <span class="origin-price">¥69.9</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import topTab from './topTab'
import scrollNavBar from '@/common/scrollNavBar'
export default {
  data () {
    return {
      titles: []
    }
  },
  components: {
    topTab,
    scrollNavBar
  },
  created () {
    this.titles = JSON.parse(localStorage.getItem('wy_goodsTitle'))
  }
}
</script>
<style lang="less" scoped>
@base:37.5rem;
.good-show{
  font-size: 14px;
  .content{
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding: 6/@base 8/@base;
    box-sizing: border-box
  }
  .good-item{
    width:50%;
    margin-bottom: 10/@base
  }
  .good-item:nth-child(odd){
    padding-right:4/@base;
    box-sizing: border-box
  }
  .good-item:nth-child(even){
    padding-left:4/@base;
    box-sizing: border-box
  }
  .good-img{
    width: 100%
  }
  .good-desc{
    line-height: 30/@base
  }
  .good-price{
    line-height: 30/@base;
    .now-price{
      font-size: 16/@base;
      color:#b4282d
    }
    .origin-price{
      color:#ccc;
      margin-left:10/@base;
      text-decoration: line-through
    }
  }
}
</style>
