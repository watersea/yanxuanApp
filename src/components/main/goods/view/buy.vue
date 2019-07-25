<template>
  <div class="buy">
    <img width="100%" src="https://yanxuan.nosdn.127.net/15538481219197847.jpeg" alt="">
    <img width="100%" src="https://yanxuan.nosdn.127.net/15538481219467848.jpeg" alt="">
    <img width="100%" src="https://yanxuan.nosdn.127.net/15538481223127849.jpeg" alt="">
    <div style="margin-top:30px;font-size:22px">
      <p>
        <span class="line"></span>
        <span>严选回购榜</span>
        <span class="line"></span>
      </p>
      <img width="100%" style="margin: 20px 0" src="static/image/icon_13.png" alt="">
    </div>
    <div>
      <rank-list v-for="(item, index) in knowGood" :key="index" :data="item" :val='index+1'></rank-list>
    </div>
  </div>
</template>
<script>
import rankList from '../components/rankList'
import { mapState } from 'vuex'
export default {
  components: {
    rankList,
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
  .buy{
    overflow: auto;
  }
  .line{
    display: inline-block;
    vertical-align: middle;
    width: 110/@base;
    height: 1px;
    background: #ccc
  }
</style>
