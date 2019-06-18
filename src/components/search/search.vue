<template>
  <div class='search'>
    <div class='q-search'>
       <div class="q-input">
          <img src="static/image/icon_search.png" alt="">
          <input type="text" name="" id="" placeholder="请输入商品名称" v-model.trim="keyWord" @keydown.13="search">
       </div>
       <span class='q-cancel' @click="$router.go(-1)">取消</span>
    </div>
    <div class='history-record' v-show="historySearch.length > 0">
      <p class='label'>
        <span>历史搜索</span>
        <img @click="delFun" src="static/image/del.png" alt="">
      </p>
      <p style="padding:10px 12px">
        <span class='item' v-for="(item,index) in historySearch" :key="index">{{item}}</span>
      </p>
    </div>
    <div class='hot-search'>
      <p class='label'>
        <span>热门搜索</span>
      </p>
      <p style="padding:10px 12px">
        <a class='item' v-for="(item,index) in hots" :key="index" :href="item.link">
          <span>{{item.keyWord}}</span>
        </a>
      </p>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      keyWord: '',
      value: '',
      historySearch: []
    }
  },
  computed: {
    ...mapState({
      hots: state => state.home.hots
    })
  },
  created () {
    this.$store.dispatch('home/getHotSearch')
    this.getHistory()
  },
  methods: {
    getHistory () {
      let localHistory = localStorage.getItem('wy_keyWord')
      if (localHistory) {
        this.historySearch = JSON.parse(localHistory)
      }
    },
    delFun () {
      localStorage.removeItem('wy_keyWord')
      this.historySearch = []
    },
    search () {
      if (this.keyWord.length < 1) {
        return false
      }
      if (!this.historySearch.includes(this.keyWord)) {
        this.historySearch.push(this.keyWord)
        localStorage.setItem('wy_keyWord', JSON.stringify(this.historySearch))
      }
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
