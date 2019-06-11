<template>
  <div class="user-resgiter">
    <top-bar></top-bar>
    <div class='user-handle'>
      <img class="label" src='static/image/icon_00.png' alt="">
      <mt-field label="用户名" placeholder="请输入用户名" complate="off" v-model.trim="userName"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" complate="off" type="password" v-model.trim="passWord"></mt-field>
      <mt-field label="确认密码" placeholder="请确认密码" complate="off" type="password" v-model.trim="passWordAgain"></mt-field>
      <mt-button size="large" class='btn-sty register' @click="userRegiter" plain>注册</mt-button>
      <mt-button size="large" class='btn-sty go-login' @click="$router.push('/')" plain>已有账号，去登录</mt-button>
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
import { Field, Button, cell, Toast } from 'mint-ui'
import {mapActions, mapState} from 'vuex'

export default {
  data () {
    return {
      userName: '',
      passWord: '',
      passWordAgain: ''
    }
  },
  components: {
    Field,
    Button,
    cell
  },
  computed: {
    ...mapState({
      isSuccess: state => state.isSuccess
    })
  },
  created () {
    // this.$cookies.set('test', '1212')
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    // 用户登录
    userRegiter () {
      if (this.userName.length < 1) {
        Toast({
          message: '请输入用户名！',
          position: 'middle'
        })
        return
      }
      if (this.passWord.length < 1) {
        Toast({
          message: '请输入密码！',
          position: 'middle'
        })
        return
      }
      if (this.passWordAgain.length < 1) {
        Toast({
          message: '请确认密码！',
          position: 'middle'
        })
        return
      }
      if (this.passWord !== this.passWordAgain) {
        Toast({
          message: '两次密码输入不一致！',
          position: 'middle'
        })
        return
      }
      let data = {
        userName: this.userName,
        passWord: this.passWord
      }
      this.$store.dispatch('resgiter', data)
    }
  }
}
</script>
<style lang="less" scoped>
@base:37.5rem;
.user-resgiter{
  position: relative;
  height:100%;
  background:#f7f7f7;
  .user-handle{
    padding:0 20/@base
  };
  .label{
    width: 96/@base;
    display: block;
    margin: 40/@base auto 50/@base;
  }
  .register{
    margin-top:50/@base;
    color:#fff;
    background-color: #b4282d;
    border-color: #b4282d
  }
}
.go-login{
  margin-top:20/@base;
  color:#fff;
  background-color: #b4282d;
  border-color: #b4282d
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
