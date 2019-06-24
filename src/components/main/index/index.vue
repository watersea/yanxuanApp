<template>
  <div class='main'>
    <q-top></q-top>
    <scroll-nav-bar :title="title" v-if="title.length > 0" @change='changeMenu'></scroll-nav-bar>
    <div class='content-index'>
      <mt-swipe class='banner-box'
        :auto="3000"
        :speed="600">
        <mt-swipe-item
          v-for="(item,index) in bannerImg"
          :key="index">
          <img class="banner-img" :src="item" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <default-tmp v-if="index==0" :defaultData="defaultData"></default-tmp>
      <common-tmp v-else :commonData="commonData"></common-tmp>
    </div>
  </div>
</template>
<script>
import QTop from './Qtop'
import defaultTmp from './defaultTmp'
import commonTmp from './commonTmp'
import { Swipe, SwipeItem } from 'mint-ui'
import scrollNavBar from '@/common/scrollNavBar'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('home')

export default {
  data () {
    return {
      index: 0
    }
  },
  components: {
    Swipe,
    SwipeItem,
    QTop,
    scrollNavBar,
    defaultTmp,
    commonTmp
  },
  computed: {
    ...mapState({
      title: state => state.title,
      bannerImg: state => state.bannerImg,
      defaultData: state => state.defaultData,
      commonData: state => state.commonData
    })
  },
  created () {
    this.getMenu(0)
  },
  methods: {
    ...mapActions([
      'getMenu'
    ]),
    changeMenu (index) {
      this.index = index
      this.getMenu(index)
    }
  }
}
</script>
<style lang="less" scoped>
  @base:37.5rem;
  .main{
    display: flex;
    flex-direction: column;
    height: 100%
  }
  .banner-box{
    height:185/@base
  }
  .banner-img{
      width: 100%;
      height: 185/@base
  }
  .content-index{
    overflow-y: scroll;
    flex: 1
  }
</style>
