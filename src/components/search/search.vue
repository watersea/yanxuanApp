<template>
  <div class='search'>
    <div class='q-search'>
       <div class="q-input">
          <img src="/static/image/icon_search.png" alt="">
          <input type="text" name="" id="" placeholder="请输入商品名称">
       </div>
       <span class='q-cancel' @click="$router.go(-1)">取消</span>
    </div>
    <div class='history-record'>
      <p class='label'>
        <span>历史搜索</span>
        <img src="/static/image/del.png" alt="">
      </p>
      <p style="padding:10px 12px">
        <span class='item'>aj</span>
        <span class='item'>阿迪</span>
        <span class='item'>耐克</span>
        <span class='item'>短袖</span>
      </p>
    </div>
    <div class='hot-search'>
      <p class='label'>
        <span>热门搜索</span>
      </p>
      <p style="padding:10px 12px">
        <span class='item'>aj</span>
        <span class='item'>阿迪</span>
        <span class='item'>耐克</span>
        <span class='item'>短袖</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
<style lang="less" scoped>
  .search{
    font-size: 14px
  }
  .q-search{
    background: #b4282d;
    padding:14px 5px;
    color:#fff;
  }
  .q-input{
    line-height: 30px;
    display: inline-block;
    background: #fff;
    border-radius: 5px;
    width: 85%;
    padding-left: 10px;
    box-sizing: border-box;
    img{
      vertical-align: text-top;
      width: 16px;
      margin-right:10px
    }
    input{
      width:85%;
      border-radius: 5px;
      border:none;
      height: 30px
    }
  }
  .q-cancel{
    display: inline-block;
    width: 12%;
    text-align: center
  }
  .mint-search{
    font-size: 14px;
    height: auto
  }
  .label{
    overflow: hidden;
    padding: 5px;
    background: #f5f5f5;
    span{
      display: inline-block;
      vertical-align: middle;
      line-height:26px
    }
    img{
      float:right;
      width: 26px
    }
  }
  .item{
    color: #666;
    display: inline-block;
    border: 1px solid #666;
    padding: 4px 6px;
    border-radius: 4px;
    margin-right: 5px;
    margin-bottom: 10px
  }
</style>
