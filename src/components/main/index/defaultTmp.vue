<template>
  <div class='default-tmp'>
      <div class="Q-index-label">
        <span class="label-block">
          <img src="static/image/icon_02.png" alt="">
          <span>网易自营品牌</span>
        </span>
        <span class="label-block">
          <img src="static/image/icon_03.png" alt="">
          <span>30天无忧退货</span>
        </span>
        <span class="label-block">
          <img src="static/image/icon_04.png" alt="">
          <span>48小时快速退款</span>
        </span>
      </div>
      <div class="menu-box">
        <span class="item-list" v-for="(item,index) in defaultData.indexIcon" :key="index" >
          <img :src="item.iconLink" alt="">
          <span>{{item.title}}</span>
        </span>
      </div>
      <img width="100%" src="https://yanxuan.nosdn.127.net/65748a92458890e1d754a1e343776992.gif" alt="">
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: ['defaultData']
}
</script>
<style lang="less" scoped>
@base:37.5rem;
.Q-index-label{
  display: flex;
  padding: 12/@base 5/@base;
  font-size: 12/@base;
  .label-block{
    flex: 1
  }
  img{
    vertical-align: middle;
    width: 20/@base
  }
}
.menu-box{
  display: flex;
  flex-wrap: wrap;
  font-size: 12/@base;
    .item-list{
      flex: 1;
      margin-bottom: 10/@base;
      img{
        width: 70/@base;
        margin-bottom: 10/@base
      }
    }
}
</style>
