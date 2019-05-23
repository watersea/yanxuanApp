<template>
  <div class="login">
    <top-bar></top-bar>
    <div class='user-handle'>
      <img class="label" src='static/image/icon_00.png' alt="">
      <mt-field label="用户名" placeholder="请输入用户名" complate="off" v-model="userName"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" complate="off" type="password" v-model="passWord"></mt-field>
      <mt-cell style="color:darkred" title="遇到问题？" is-link>
        <span style="color: #333">忘记密码</span>
      </mt-cell>
      <mt-button type="danger" size="large" class='btn-sty submit'>登录</mt-button>
      <mt-button size="large" class='btn-sty register' plain>注册</mt-button>
      <div class='third-login'>
        <span class="ospan">
          <img src="/static/image/QQ.png" alt="">
          <span>QQ</span>
        </span>
        <span class="ospan">
          <img src="/static/image/WB.png" alt="">
          <span>微博</span>
        </span>
        <span class="ospan" style="border:none">
          <img src="/static/image/WX.png" alt="">
          <span>微信</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { Field, Button, cell } from 'mint-ui'
export default {
  data () {
    return {
      userName: '',
      passWord: ''
    }
  },
  components: {
    Field,
    Button,
    cell
  }
}
</script>
<style lang="less" scoped>
@base:37.5rem;
.login{
  position: relative;
  height:100%;
  background:#f7f7f7;
  .user-handle{
      padding:0 20/@base;
  };
  .label{
    width: 96/@base;
    display: block;
    margin: 40/@base auto 50/@base;
  }
  .submit{
    background: #b4282d;
    margin:35/@base 0 25/@base
  }
  .register{
    color:#b4282d;
    border-color: #b4282d
  }
}
.third-login{
  position: absolute;
  bottom: 5%;
  left: 0;
  width:100%;
  text-align: center;
  font-size:14/@base;
  .ospan{
    width:80/@base;
    display: inline-block;
    border-right:1px solid #ccc
  }
  img{
    vertical-align: middle;
    width:20/@base;
    margin-right:4/@base
  }
}
</style>
