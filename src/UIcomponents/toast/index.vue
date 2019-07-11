<template>
  <div class="Q-toast" v-show="show">
      <span class="iconfont" :class="icons[type]"></span>
      <span class="msg">{{message}}</span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      icons: {
        success: 'icon-wancheng',
        error: 'icon-cuowu',
        warn: 'icon-warning',
        notice: 'icon-tips'
      },
      show: false,
      message: 'loading...',
      type: 'success'
    }
  }
}
</script>
<style lang="less" scoped>
  .Q-toast{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 140px;
    height: 140px;
    border-radius: 6px;
    padding: 20px 10px;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    background: rgba(0,0,0,.6);
    span{
      display: block;

    }
    .iconfont{
      font-size: 40px;
      margin-bottom: 16px
    }
    .msg{
      font-size: 20px
    }
  }
</style>
