<template>
  <div class='bot-bar'>
    <router-link
      v-for="(item, index) in tabs"
      :key="index"
      tag='div'
      class="menu-block"
      :to="item.link">
      <span class="iconfont" :class="item.icon"></span>
      <span>{{item.name}}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 0,
      tabs: [
        {
          name: '首页',
          link: 'index',
          icon: 'icon-shouye'
        }, {
          name: '分类',
          link: 'classify',
          icon: 'icon-fenlei'
        }, {
          name: '识物',
          link: 'goods',
          icon: 'icon-14'
        }, {
          name: '购物车',
          link: 'shopCar',
          icon: 'icon-27'
        }, {
          name: '个人',
          link: 'single',
          icon: 'icon-geren'
        }
      ]
    }
  },
  methods: {
    changeTab (index) {
      this.num = index
    }
  }
}
</script>
<style lang="less" scoped>
@base:37.5rem;
  .bot-bar{
    display: flex;
    height:56/@base;
    padding-top:6/@base;
    padding-bottom:6/@base;
    box-sizing: border-box;
    border-top:1px solid #ccc;
    .menu-block{
      flex: 1
    }
    .iconfont{
      font-size:24/@base
    }
    span{
      display:block;
      height:50%;
      font-size: 14px;
      line-height:22/@base;
    }
  }
  .router-link-active{
    color:#b4282d
  }
</style>
