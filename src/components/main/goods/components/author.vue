<template>
  <div class="author">
    <div class="author-info">
      <img class="author-header" :src="data.avatar" alt="">
      <div class="author-name">
        <p class="name">{{data.name}}</p>
        <p class="time">{{formatFun(data.time)}}</p>
      </div>
    </div>
    <img width="100%" :src="data.picUrl" alt="">
    <p class="title">{{data.title}}</p>
    <p class="desc" v-html="contentFun(data.content)"></p>
    <p style="padding:10px 15px">
      <span class="user-handle">
        <i class="iconfont icon-dianzan"></i>
        {{data.supportNum}}
      </span>
      <span class="user-handle">
        <i class="iconfont icon-liuyan"></i>
        留言
      </span>
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  props: ['data'],
  methods: {
    contentFun (val) {
      return val.replace(/\n/g,"<br/>")
    },
    formatFun (val) {
      let date = new Date(val)
      let month = date.getMonth()+1
      let fmonth = month > 9 ? month : '0'+month
      let day = date.getDate()
      return `${fmonth}-${day}`
    }
  }
}
</script>
<style lang="less" scoped>
  @base: 37.5rem;
  .author{
    padding-top: 14/@base;
    background: #fff;
    text-align: left;
    border-bottom: 1px solid #f1f1f1;
    .author-info{
      padding: 4px 15/@base 8px
    }
    .author-header{
      width: 32/@base;
      height: 32/@base;
      border-radius: 50%;
      margin-right: 10/@base
    }
    .author-name{
      display: inline-block;
      vertical-align: middle;
      font-size: 12px;
      .name{
        color: #333;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 6/@base
      }
      .time{
        color: #999
      }
    }
    .title{
      padding: 0 12/@base;
      font-size: 18px;
      color: #333;
      font-weight: bold;
      margin: 12/@base 0;
      text-align: center
    }
    .desc{
      padding: 0 12/@base;
      font-size: 15px;
      color: #333;
      line-height: 26px
    }
    .user-handle{
      color: #666;
      margin-right: 10/@base;
      .iconfont{
        color: #999
      }
    }
  }
</style>
