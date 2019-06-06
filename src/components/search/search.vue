<template>
  <div class='search'>
    <mt-search
    v-model="value"
    cancel-text="取消"
    placeholder="请输入商品关键字">
    </mt-search>
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
import { Search } from 'mint-ui'
export default {
  data () {
    return {
      value: ''
    }
  },
  components: {
    Search
  }
}
</script>
<style lang="less" scoped>
  .search{
    font-size: 14px
  }
  .mint-search{
    font-size: 14px;
    height: auto;
  }
  /deep/ .mint-searchbar{
    background: #b4282d
  }
  /deep/ .mint-searchbar-cancel{
      color: #fff
  }
  /deep/ .mintui-search{
    font-size: 20px !important;
    margin-right: 10px;
    color: #999
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
