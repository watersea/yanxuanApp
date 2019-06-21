<template>
  <div class="container">
    <div class="content" ref='content'>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <bottom-tab></bottom-tab>
  </div>
</template>
<script>
import bottomTab from './bottomTab'
export default {
  data () {
    return {}
  },
  created () {
    if (this.$cookies.isKey('wy_login_access')) {
      let loginInfo = this.$cookies.get('wy_login_access')
      let userName = loginInfo.userName
      this.$store.commit('getUserName', userName)
    }
  },
  components: {
    bottomTab
  }
}
</script>
<style>
  .container{
    font-size:14px;
    text-align: center;
    display: flex;
    height:100%;
    flex-direction: column
  }
  .content{
    overflow: hidden;
    flex: 1
  }
</style>
