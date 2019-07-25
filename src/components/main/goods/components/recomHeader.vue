<template>
  <div class="recom-header">
    <div class="top-row">
      <img class="label-icon" src="static/image/recommend.png" alt="">
      <div class="row-right">
        <div class="recom-info">
            <p class="disInlineBlock">
               <span class='about-num'>95.3W</span>
               <span class="about-text">阅读</span>
            </p>
            <p class="disInlineBlock">
               <span class="about-num">8345</span>
               <span class="about-text">转发</span>
            </p>
            <p class="disInlineBlock">
               <span class="about-num">12.4W</span>
               <span class="about-text">订阅</span>
            </p>
        </div>
        <span class="add-look">
            <i class="iconfont icon-icon-test"></i>
            订阅
        </span>
      </div>
    </div>
    <p class="title">网易员工精选</p>
    <p class="desc">在网易自家员工眼里，什么最值得买？订阅此专栏，每天发现一件精选好货，享受一个特惠福利！</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: ''
    }
  }
}
</script>
<style lang="less" scoped>
  @base: 37.5rem;
  .disInlineBlock{
    display: inline-block;
    vertical-align: middle;
  }
  .recom-header{
    background: #fff;
    padding: 15/@base;
    text-align: left;
    margin-top: 10/@base;
    border-bottom: 1px solid #f1f1f1;
    .label-icon{
      width: 80/@base;
      border-radius: 50%;
      margin-right: 12/@base
    }
    .top-row{
      display: flex
    }
    .row-right{
      position: relative;
      flex: 1
    }
    .recom-info{
      display: flex;
      .about-num{
       color: #333;
       font-size: 15px;
       font-weight: 600;
       margin-bottom: 6px
      }
      .about-text{
        color: #999;
        font-size: 12px
      }
      p{
        flex: 1;
        span{
          display: block;
          width: 100%;
          text-align: center
        }
      }
    }
    .add-look{
      position: absolute;
      right: 15/@base;
      bottom: 0;
      background: #ce2424;
      color: #fff;
      font-size: 14px;
      border-radius: 14px;
      width: 60/@base;
      padding: 4/@base 10/@base;
      text-align: center
    }
  }
  .title{
    margin: 20/@base 0 12/@base;
    font-size: 24px;
    font-weight: bold
  }
  .desc{
    font-size: 12px;
    line-height: 18px;
    color: #666
  }
</style>
