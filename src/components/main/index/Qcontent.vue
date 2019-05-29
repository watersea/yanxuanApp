<template>
    <div class="content">
      <mt-swipe class='banner-box'
        :auto="3000"
        :speed="600">
        <mt-swipe-item
          v-for="(item,index) in banner"
          :key="index">
          <img class="banner-img" :src="item" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui'

export default {
  data () {
    return {
      msg: '1111'
    }
  },
  props: ['banner'],
  components: {
    Swipe,
    SwipeItem
  }
}
</script>
<style lang="less" scoped>
  @base:37.5rem;
  .banner-box{
    height:185/@base
  }
  .banner-img{
      width: 100%;
      height: 185/@base
  }
</style>
