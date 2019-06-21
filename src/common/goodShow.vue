<template>
  <div class='good-show'>
    <top-tab></top-tab>
    <scroll-nav-bar :title="titles" v-if="titles.length > 0"></scroll-nav-bar>
    <div class="content">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"  ref="loadmore" :autoFill ="true">
       <div class='good-item' v-for="(item,index) in goods" :key="index">
        <div class='good-pic'>
          <img class="good-img" :src="item.img" alt="">
        </div>
        <p class="good-desc">{{item.desc}}</p>
        <p class="good-price">
          <span class="now-price">{{item.nowPrice}}</span>
          <span class="origin-price">{{item.orginPrice}}</span>
        </p>
      </div>
      </mt-loadmore>
    </div>
  </div>
</template>
<script>
import topTab from './topTab'
import scrollNavBar from '@/common/scrollNavBar'
// eslint-disable-next-line
import { Loadmore } from 'mint-ui'
// import { setTimeout } from 'timers'
export default {
  data () {
    return {
      titles: [],
      num: 0,
      goods: [
        {
          desc: '泰国椰青 4颗装',
          img: 'static/image/default.jpg',
          orginPrice: '¥59.9',
          nowPrice: '¥49.9'
        }
      ]
    }
  },
  components: {
    topTab,
    scrollNavBar
  },
  created () {
    this.titles = JSON.parse(localStorage.getItem('wy_goodsTitle'))

    for (let i = 0; i < 20; i++) {
      this.num += i
      let obj = {
        desc: '泰国椰青 4颗装' + this.num,
        img: 'static/image/default.jpg',
        orginPrice: '¥59.9',
        nowPrice: '¥49.9',
        num: this.num
      }
      this.goods.push(obj)
    }
  },
  mounted () {
    // better-scroll 上拉下拉
    // let wrapper = document.querySelector('.wrapper')
    // // eslint-disable-next-line
    // let scroll = new BScroll(wrapper,{
    //   click: true,
    //   bounce:true,
    //   bounceTime:300,
    //   pullUpLoad: {
    //     threshold: -20
    //   },
    //   pullDownRefresh: {
    //     threshold: 30,
    //     stop: 0
    //   }
    // })
    // scroll.on('pullingDown',(res)=>{
    //     console.log(1)
    //     scroll.finishPullDown()
    //   }),
    //  scroll.on('pullingUp',(res)=>{
    //     console.log(1)
    //     scroll.finishPullUp()
    //  })
  },
  methods: {
    loadTop () {
      console.log(1)
      let tar = this.$refs.loadmore
      let newArr = []
      setTimeout(function () {
        tar.onTopLoaded()
        for (let i = 0; i < 20; i++) {
          this.num += i
          let obj = {
            desc: '泰国椰青 4颗装' + this.num,
            img: 'static/image/default.jpg',
            orginPrice: '¥59.9',
            nowPrice: '¥49.9',
            num: this.num
          }
          newArr.push(obj)
        }
        this.goods = newArr
        console.log(this.goods)
      }, 1200)
    },
    loadBottom () {
      let that = this
      let tar = this.$refs.loadmore
      setTimeout(function () {
        for (let i = 0; i < 20; i++) {
          this.num = i
          let obj = {
            desc: '泰国椰青 4颗装' + this.num,
            img: 'static/image/default.jpg',
            orginPrice: '¥59.9',
            nowPrice: '¥49.9',
            num: this.num
          }
          that.goods.push(obj)
        }
        this.allLoaded = true
        tar.onBottomLoaded()
      }, 1500)
      // this.$refs.loadmore.onBottomLoaded();
    },
    allLoaded () {
      console.log(1)
    }

  }
}
</script>
<style lang="less" scoped>
@base:37.5rem;
.good-show{
  display: flex;
  flex-direction: column;
  height:100%;
  font-size: 14px;
  .content{
    height: calc(100% - 90px);
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    padding: 6/@base 8/@base;
    box-sizing: border-box;
    overflow-y: scroll
  }
  .good-item{
    // width:50%;
    margin-bottom: 10/@base
  }
  .good-item:nth-child(odd){
    padding-right:4/@base;
    box-sizing: border-box
  }
  .good-item:nth-child(even){
    padding-left:4/@base;
    box-sizing: border-box
  }
  .good-img{
    width: 100%
  }
  .good-desc{
    line-height: 30/@base
  }
  .good-price{
    line-height: 30/@base;
    .now-price{
      font-size: 16/@base;
      color:#b4282d
    }
    .origin-price{
      color:#ccc;
      margin-left:10/@base;
      text-decoration: line-through
    }
  }
}
</style>
