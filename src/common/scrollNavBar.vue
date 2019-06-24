<template>
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
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      num: 0,
      index: 0
    }
  },
  props: ['title'],
  created () {
    // 首页引用不做index处理
    if (this.$route.query.name) {
      this.posFun()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getMenuWidth()

      // let ospan = [...document.getElementsByClassName('ospan')]
      // console.log(this.index)
      // let totalW = 0
      // for(let i = 0;i<this.index;i++){
      //   totalW += ospan[i].offsetWidth

      // console.log(ospan[i].offsetWidth)
      // }
      // console.log(new)
      // this.$refs.scrollInner.style.transform = "translate(-"+totalW+"px, 0px) scale(1) translateZ(0px)"
    })
  },
  methods: {
    // 定位点击的tab
    posFun () {
      let name = decodeURIComponent(this.$route.query.name)
      this.index = this.title.indexOf(name)
      this.num = this.index
    },
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
      this.$emit('change', index)
    }
  }
}
</script>
<style lang="less" scoped>
@base:37.5rem;
.active{
  color:#b4282d;
  border-bottom:2px solid #b4282d !important
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
</style>
