<template>
  <div class="home-header">
    <div class='home-label'>
      <div class="logo">
        <img src="/static/image/icon_title.png" alt="">
      </div>
      <div class="search">
        <div class="input">
          <img src="/static/image/icon_search.png" alt="">
          搜索商品，共{{shopNum}}款好物
        </div>
      </div>
      <div class="user">
        登录
      </div>
    </div>
    <div class='scroll-bar wrapper' ref="scrollBar">
      <div class='scroll-bar-inner content' ref='scrollInner'>
        <span
        class="ospan"
        :class="num === index ? 'active' : ''"
        v-for="(item,index) in title"
        @click="changeMenu(index)"
        :key="index">{{item}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      shopNum: 10000,
      num: 0
    }
  },
  components: {
  },
  props: ['title'],
  mounted () {
    this.$nextTick(() => {
      this.getMenuWidth()
    })
  },
  methods: {
    // 计算横向tabmenu宽度
    getMenuWidth () {
      let ospan = [...document.getElementsByClassName('ospan')]
      let totalWidth = 0
      ospan.forEach((ele, index) => {
        totalWidth += (ele.offsetWidth)
      })
      this.$refs.scrollInner.style.width = (totalWidth + 12) + 'px'
      let wrapper = document.querySelector('.wrapper')
      /* eslint-disable no-new */
      new BScroll(wrapper, {
        scrollX: true,
        click: true,
        tap: true
      })
    },
    // 改变navbar颜色
    changeMenu (index) {
      this.num = index
    }
  }
}
</script>
<style scoped lang="less">
  @base:37.5rem;
  ::-webkit-scrollbar{
    width: 0;
    height:0;
    background: transparent;
  }
  .active{
    color:#b4282d;
    border-bottom:2px solid #b4282d !important
  }
  .home-header{
    overflow: hidden;
    .home-label{
      height:40/@base;
      font-size: 14px;
      background:#b4282d;
      text-align: left
    }
    .scroll-bar{
      overflow-x: scroll;
      overflow-y: hidden;
      height:40/@base;
      line-height: 34/@base;
      text-align: left;
      padding-left: 12/@base;
      width: 100%;
      .scroll-bar-inner{
        white-space: nowrap;
        height:100%;
      }
      span{
        display: inline-block;
        vertical-align: middle;
        padding:0 12/@base;
        height:34/@base;
        font-size:14px;
        border-bottom:2px solid #fff;
      }
    }
    .logo{
      display: inline-block;
      vertical-align: middle;
      width:24%;
      font-size: 16/@base;
      text-align: center;
      line-height: 40/@base;
      img{
        width: 70%;
        vertical-align: middle
      }
    }
    .search{
      display: inline-block;
      vertical-align: middle;
      width:56%;
      .input{
        height:30/@base;
        line-height: 32/@base;
        width:100%;
        text-align: left;
        font-size: 12/@base;
        background: #eaeaea;
        border-radius: 4px;
        padding-left:12/@base;
        box-sizing: border-box;
        img{
          width:16/@base;
          vertical-align: text-bottom;
          margin-right:5px
        }
      }
    }
    .user{
      width:16%;
      color:#fff;
      display: inline-block;
      vertical-align: middle;
      text-align: center
    }
  }
</style>
