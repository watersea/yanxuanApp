<template>
  <div class='good-show'>
    <top-tab></top-tab>
    <scroll-nav-bar :title="titles" v-if="titles.length > 0"></scroll-nav-bar>
    <div class="content">
      <div class='good-item'>
        <div class='good-pic'>
          <!-- <img class="good-img" src="http://yanxuan.nosdn.127.net/459c50762747d5b3712a919014f05403.png?imageView&quality=65&thumbnail=330x330" alt="">   -->
        </div>
        <p class="good-desc">desc</p>
        <p class="good-price">¥59.9</p>
      </div>
      <div class='good-item'>
        <div class='good-pic'>
          <!-- <img class="good-img" src="http://yanxuan.nosdn.127.net/e7ce14675ba23b7f76fb350335e11aaa.png?imageView&quality=65&thumbnail=330x330" alt="">   -->
        </div>
        <p class="good-desc">desc</p>
        <p class="good-price">¥59.9</p>
      </div>
      <div class='good-item'>
        <div class='good-pic'>
          <!-- <img class="good-img" src="http://yanxuan.nosdn.127.net/459c50762747d5b3712a919014f05403.png?imageView&quality=65&thumbnail=330x330" alt="">   -->
        </div>
        <p class="good-desc">desc</p>
        <p class="good-price">¥59.9</p>
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
    overflow: hidden
  }
  .good-item{
    width:50%;
    float: left
  }
  .good-img{
    width: 100%
  }
}
</style>
