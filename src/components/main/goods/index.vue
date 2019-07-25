<template>
  <div class='goods'>
    <good-bar></good-bar>
    <scroll-nav-bar :title="title" v-if="title.length > 0" @change='changeMenu' :index="1"></scroll-nav-bar>
    <div class="content">
      <!-- <transition :name="direction"> -->
        <!-- <keep-alive> -->
          <router-view class="contentView"></router-view>
        <!-- </keep-alive> -->
      <!-- </transition> -->
    </div>
  </div>
</template>
<script>
import goodBar from '@/common/goodTopBar'
import scrollNavBar from '@/common/scrollNavBar'
import horizalCom from './components/horizalCom'
import veritalCom from './components/veritalCom'
import recomHeader from './components/recomHeader'
import author from './components/author'
import rankList from './components/rankList'
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      num: 0,
      // direction: "slide-right",
      title: ['推荐', '好货内部价', '回购榜', '晒单', '开发者日记', '达人', 'HOME'],
      titleArr: ['Recommend', 'Purchasing', 'Buy', 'Bask', 'Diary', 'Doyen', 'Index']
    }
  },
  components: {
    goodBar,
    scrollNavBar,
    horizalCom,
    veritalCom,
    recomHeader,
    author,
    rankList
  },
  watch: {
    $route (to, from) {
      console.log(1)
      // const toDepth = to.path.split( "/" ).length
      // const fromDepth = from.path.split( "/" ).length
      // console.log(to)
      // if (to.path === "/") {
      //   this.direction = "slide-right"
      // } else if (from.path === "/") {
      //   this.direction = "slide-left"
      // }else{
      //   this.direction = toDepth < fromDepth ? "slide-right" : "slide-left"
      // }
    }
  },
  created () {
    this.getKnowGood()
    console.log()
  },
  methods: {
    ...mapActions({
      getKnowGood: 'home/getKnowGood'
    }),
    changeMenu (index) {
      this.getKnowGood(index)
      let name = `goods${this.titleArr[index]}`
      this.$router.push({
        name
      })
    }
  }
}
</script>
<style lang="less" scoped>
  @base: 37.5rem;
  /deep/ .ospan{
    color:#666
  }
  .contentView{
    height: 100%
  }
  .goods{
    height: 100%;
    display: flex;
    background: #f5f5f5;
    flex-direction: column;
    .content{
      flex: 1
    }
  }

.appView {
  position: absolute;
  width:100%;
  transition: transform 0.3s ease-out
}
.slide-left-enter{
  transform: translate(100%, 0)
}
.slide-left-leave-active{
  transform: translate(-50%, 0)
}
.slide-right-enter {
  transform: translate(-50%, 0)
}
.slide-right-leave-active{
  transform: translate(100%, 0)
}
</style>
