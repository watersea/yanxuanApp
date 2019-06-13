<template>
  <div class='seach'>
    <div class='inner-box' @click="$router.push('/search')">
      <span class="iconfont icon-sousuo"></span>
      <span>搜索商品，共{{num}}款好物</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 2000
    }
  }
}
</script>
<style lang="less" scoped>
@base:37.5rem;
.seach{
  background:#b4282d;
  padding: 10/@base 15/@base;
  border-bottom:1px solid #f5f5f5;
  .inner-box{
    width: 100%;
    background: #fff;
    border-radius: 6px;
    line-height: 32/@base
  }
}
</style>
