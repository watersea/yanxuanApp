<template>
  <div class="login">
    <top-bar></top-bar>
    <div class='user-handle'>
      <img class="label" src='static/image/icon_00.png' alt="">
      <mt-field label="用户名" placeholder="请输入用户名" complate="off" v-model="userName"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" complate="off" type="password" v-model="passWord"></mt-field>
      <mt-cell style="color:darkred" title="遇到问题？">
        <span style="color: #333">忘记密码</span>
      </mt-cell>
      <mt-button type="danger" size="large" class='btn-sty submit' @click="userLogin">登录</mt-button>
      <mt-button size="large" class='btn-sty register' @click="userRegiter" plain>注册</mt-button>
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
import { Field, Button, cell, Indicator } from 'mint-ui'
import {mapActions, mapState} from 'vuex'

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
  },
  computed: {
    ...mapState({
      isSuccess: state => state.isSuccess
    })
  },
  created () {
    this.$cookies.set('test', '1212')
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    // 用户登录
    userLogin () {
      Indicator.open({
        text: '登录中...',
        spinnerType: 'fading-circle'
      })
      let data = {
        userName: this.userName,
        passWord: this.passWord
      }
      if (this.userName && this.passWord) {
        Indicator.close()
        this.$router.replace('/home/index')
      } else {
        Indicator.close()
        console.log(data)
      }
    },
    userRegiter () {
      this.$router.push('/resgiter')
    }
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
