<template>
  <div class="recommend">
    <div class="banner-img">
      <img width="100%"  src="https://yanxuan.nosdn.127.net/bdb121b22f382f1d2a116ace09bcfaf4.jpg?imageView&quality=65&thumbnail=690y376" alt="">
    </div>
    <div v-for="(item, index) in knowGood" :key="index">
      <horizal-com v-if="item.style=== 1" :data="item"></horizal-com>
      <verital-com v-else :data="item"></verital-com>
    </div>
  </div>
</template>
<script>
import horizalCom from '../components/horizalCom'
import veritalCom from '../components/veritalCom'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // knowGood: []
    }
  },
  components: {
    horizalCom,
    veritalCom
  },
  computed: {
    ...mapState({
      knowGood: state => state.home.knowGood
    })
  }
}
</script>
<style lang="less" scoped>
  @base: 37.5rem;
  .recommend{
    height: 100%;
    overflow: auto;
  }
  .banner-img{
      padding: 10/@base 15/@base;
      margin-top: 10px;
      background: #fff;
      box-sizing: border-box;
      img{
        border-radius: 6px;
      }
    }
</style>
