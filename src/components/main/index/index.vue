<template>
  <div class='main'>
    <q-top></q-top>
    <scroll-nav-bar :title="title" v-if="title.length > 0" @change='changeMenu'></scroll-nav-bar>
    <div class='content-index'>
      <div class="scroll-content" ref="scroll">
        <div style="position:relative">
          <swiper class="swiper-wrapper" ref="swiperBanner" :options="swiperOptionBanner" :key="bannerImgToString(bannerImg)" v-if="bannerImg.length > 0 && isAutoPlay">
            <swiper-slide v-for="(item,index) in bannerImg" :key="index">
              <img class="banner-img" :src="item" alt="">
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination-banner" slot="pagination"></div>
        </div>
        <keep-alive>
          <default-tmp v-if="index==0" :defaultData="defaultData"></default-tmp>
          <common-tmp v-else :commonData="commonData"></common-tmp>
        </keep-alive>
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
const { mapState, mapActions } = createNamespacedHelpers('home')
let scroll
export default {
  data () {
    return {
      index: 0,
      isAutoPlay: false,
      swiperOptionBanner: {
        notNextTick: true,
        loop: true,
        autoplay: {
          delay: 1800,
          disableOnInteraction: false
        },
        preventInteractionOnTransition: true,
        pagination: {
          el: '.swiper-pagination-banner',
          bulletActiveClass: 'my-bullet-active'
        }
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
      commonData: state => state.commonData,
      lazyImg: state => state.loadingImgSrc
    })
  },
  created () {
    this.getMenu(0)
  },
  activated () {
    this.isAutoPlay = true
  },
  deactivated () {
    this.isAutoPlay = false
  },
  mounted () {
    // eslint-disable-next-line
    this.$nextTick(() => {
      let wrapper = document.querySelector('.content-index')
      /* eslint-disable no-new */
      scroll = new BScroll(wrapper, {
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
      // tab 切换滚动回顶部
      scroll.scrollTo(0, 0)
    },
    // 动态更改swiper的dom结构
    bannerImgToString (val) {
      return val.toString()
    }
  }
}
</script>
<style lang="less" scoped>
  @base:37.5rem;
  .swiper-pagination-banner{
    position: absolute;
    bottom: 15/@base;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 3;
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
    flex: 1;
    background: #f5f5f5
  }
</style>
