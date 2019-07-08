<template>
  <div class='main'>
    <q-top></q-top>
    <scroll-nav-bar :title="title" v-if="title.length > 0" @change='changeMenu'></scroll-nav-bar>
    <div class='content-index'>
      <div class="scroll-content">
        <div style="position:relative">
          <swiper class="swiper-wrapper" :options="swiperOption">
            <swiper-slide v-for="(item,index) in bannerImg" :key="index">
              <img class="banner-img" :src="item" alt="">
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
        </div>
        <default-tmp v-if="index==0" :defaultData="defaultData"></default-tmp>
        <common-tmp v-else :commonData="commonData"></common-tmp>
      </div>
    </div>
  </div>
</template>
<script>
import QTop from './Qtop'
import defaultTmp from './defaultTmp'
import commonTmp from './commonTmp'
import BScroll from 'better-scroll'
import scrollNavBar from '@/common/scrollNavBar'
import { createNamespacedHelpers } from 'vuex'
import { setTimeout } from 'timers';
const { mapState, mapActions } = createNamespacedHelpers('home')

export default {
  data () {
    return {
      index: 0,
      swiperOption: {
        autoplay: true,
        speed: 1000,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'my-bullet-active',
        },
      }
    }
  },
  components: {
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
  mounted () {
    // eslint-disable-next-line
   
    this.$nextTick(() => {
      let wrapper = document.querySelector('.content-index')
      /* eslint-disable no-new */
      new BScroll(wrapper, {
        scrollY: true,
        click: true,
        tap: true
      })
    })
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
  .swiper-pagination{
    position: absolute;
    bottom: 15/@base;
    left: 0;
    right: 0;
    margin: 0 auto
  }
  /deep/ .my-bullet-active{
    background: red;
    opacity: 1;

  }
  /deep/ .swiper-pagination-bullet{
    margin-right: 5px
  }
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
    overflow-y: hidden;
    flex: 1
  }
</style>
