<template>
    <div class="single">
      <div class="user-info">
        <div class="user-header">
          <img src="static/image/default_header.jpg" alt="">
        </div>
        <div class="user-detail">
          <p class="user-name">
            会旋转的冬瓜
          </p>
          <p class="user-class">
            普通用户
          </p>
        </div>
      </div>
      <div class="menu-content">
        <h4 class="zy-title">我的资产</h4>
        <div class='zy-box'>
         <div class='zy-item'>
           <span>¥0</span>
           <span>回馈金</span>
         </div>
         <div class='zy-item'>
           <span>0</span>
           <span>红包</span>
         </div>
         <div class='zy-item'>
           <span>0</span>
           <span>优惠券</span>
         </div>
         <div class='zy-item'>
           <span>¥0</span>
           <span>津贴</span>
         </div>
         <div class='zy-item'>
           <span>0</span>
           <span>礼品卡</span>
         </div>
        </div>
        <ul style="border-top:1px solid  rgba(0,0,0,.15);overflow:hidden">
          <li class="list" v-for="(item, index) in classify" :key="index">
            <p class="bg-img iconfont" :class="item.className"></p>
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
      <div id="quit" class="border-top" @click="loginOut">退出登录</div>
    </div>
</template>
<script>
export default{
  data () {
    return {
      classify: [
        {name: '我的订单', className: 'icon-wodedingdan'},
        {name: '售后服务', className: 'icon-shouhou'},
        {name: '邀请返利', className: 'icon-fanli'},
        {name: '优选购', className: 'icon-youxiangou'},
        {name: '周礼一起拼', className: 'icon-yiqipindan'},
        {name: '积分中心', className: 'icon-jifenshangcheng'},
        {name: '会员俱乐部', className: 'icon-huiyuan'},
        {name: '地址管理', className: 'icon-ziyuan'},
        {name: '帐号安全', className: 'icon-anquan'},
        {name: '帮助与客服', className: 'icon-kefu'},
        {name: '意见反馈', className: 'icon-yijianfankui'}
      ]
    }
  },
  methods: {
    loginOut () {
      this.$cookies.remove('wy_login_access')
      this.$router.replace('/login')
      this.$store.commit('getUserName','登录')
    }
  }
}
</script>
<style lang='less' scoped>
@base:37.5rem;
.wh(@w,@h) {
  width: @w;
  height: @h;
}
.dpl(@m:middle) {
  display: inline-block;
  vertical-align: @m
}
.whb(@w,@h) {
  width: @w/@base;
  height: @h/@base;
}
.els(@w:100%){
  width:@w;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.zy-title{
  line-height: 42/@base;
  text-align: left;
  padding-left:15/@base;
  border-bottom: 1px solid #ccc
}
.zy-box{
  display: flex;
  height:48/@base;
  padding: 20/@base 0;
  .zy-item{
    flex:1;
    display: flex;
    flex-direction: column;
    span{
      line-height: 24/@base;
      flex: 1
    }
  }
}
.single{
  font-size:14px;
  height:100%;
  background: #eaeaea;
  overflow: auto;
  .user-info{
    height:120/@base;
    background: url("/static/image/bg.png") no-repeat;
    background-size: cover;
    box-sizing: border-box;
    padding:15/@base 20/@base;
    line-height: 80/@base;
    text-align: left;
    .user-header{
      height:100%;
      margin-right:20/@base;
      .dpl();
      img{
        .whb(70,70);
        border-radius: 50%;
        vertical-align:-webkit-baseline-middle;
      }
    }
  }
  .user-detail{
    line-height: normal;
    color: #fff;
    font-size:18/@base;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    .dpl();
    .user-class{
      margin-top:5/@base;
      font-size: 16/@base;
    }
  }
  .menu-content{
    background: #fff;
    overflow: hidden;
  }
  .list{
    width:33.3333333333%;
    height:110/@base;
    float: left;
    text-align: center;
    border-bottom: 1px solid rgba(0,0,0,.15);
    border-right: 1px solid rgba(0,0,0,.15);
    box-sizing: border-box;
    padding-top:30/@base;
    color: #666;
    &:nth-child(3n){
      border-right: none;
    }
    .bg-img{
      font-size: 30/@base;
      margin:0 auto 10/@base;
      color: #666;
    }
  }
}
#quit{
  line-height: 50/@base;
  text-align: center;
  width:98%;
  border-radius: 5px;
  margin:30/@base auto 20/@base;
  background: #fff;
}

</style>
