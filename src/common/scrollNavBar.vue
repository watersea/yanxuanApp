<template>
  <div class='scroll-bar wrapper' ref="scrollBar">
    <div class='scroll-bar-inner content' ref='scrollInner'>
      <span
        class="ospan"
        :class="num === index ? 'active' : ''"
        v-for="(item,index) in title"
        @click="changeMenu($event, index)"
        :key="index">{{item}}</span>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { Debounce } from '@/api/until'
let scroll
export default {
  data () {
    return {
      num: 0 || this.index,
      index: 0
    }
  },
  props: ['title','index'],
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
      scroll = new BScroll(wrapper, {
        scrollX: true,
        click: true,
        tap: true
      })
    },
    // scrollNavbar横向滑动
    // changeMenu (e, index) {
    //   let ww = document.body.clientWidth
    //   let middle = parseInt(ww / 2)
    //   let scrollX = scroll.x
    //   let scrollMax = scroll.maxScrollX
    //   let leftX = e.x
    //   // 指定距离滑动
    //   if (leftX >= middle) {
    //     if (scrollX - 70 < scrollMax) {
    //       scroll.scrollBy(scrollMax - scrollX, 0, 600, 'linear')
    //       return
    //     }
    //     scroll.scrollBy(-70, 0, 600, 'linear')
    //   }
    //   if (leftX < middle) {
    //     if (scrollX > -70) {
    //       scroll.scrollBy(-scrollX, 0, 600, 'linear')
    //       return
    //     }
    //     scroll.scrollBy(70, 0, 600, 'linear')
    //   }
    // 中心滑动
    // if(leftX >= middle){
    //     let a = leftX - middle
    //     let c = scrollX - scrollMax
    //     if(a > c){
    //       scroll.scrollBy(-c,0,600,'linear')
    //       return
    //     }
    //     scroll.scrollBy(-a,0,600,'linear')
    // }else{
    //   let a = middle - leftX
    //   if(scrollX > -a){
    //       scroll.scrollBy(-scrollX,0,600,'linear')
    //       return
    //     }
    //     scroll.scrollBy(a,0,600,'linear')
    // }
    // },
    // 改变navbar颜色，防抖应用
    changeMenu: Debounce(function (e, index) {
      let ww = document.body.clientWidth
      let middle = parseInt(ww / 2)
      let scrollX = scroll.x
      let scrollMax = scroll.maxScrollX
      let leftX = e.x
      // 不使用箭头函数是因为this指向问题
      // 选中状态 禁止再次触发事件
      if (this.num === index) {
        return
      }
      this.num = index
      this.$emit('change', index)
      // 指定距离滑动
      if (leftX >= middle) {
        if (scrollX - 70 < scrollMax) {
          scroll.scrollBy(scrollMax - scrollX, 0, 600, 'linear')
          return
        }
        scroll.scrollBy(-70, 0, 600, 'linear')
      }
      if (leftX < middle) {
        if (scrollX > -70) {
          scroll.scrollBy(-scrollX, 0, 600, 'linear')
          return
        }
        scroll.scrollBy(70, 0, 600, 'linear')
      }
    }, 200)
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
  background: #fff;
  // padding-left: 12/@base;
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
