<template>
  <div class="top-bar">
    <span class='top-bar-l' @click="$router.push('/home/index')">
      <img src="static/image/icon_home.png" alt="">
    </span>
    <span class='top-bar-m'>
      <span class="common-font active" style="margin-right: 8px">发现</span>
      <span class="common-font">甄选家</span>
    </span>
    <span class='top-bar-r'>
      <img class="search" @click="$router.push('/search')" src="static/image/icon_search.png" alt="">
      <img class="shop" @click="$router.push('/home/shopCar')" src="static/image/icon_shop.png" alt="">
    </span>
  </div>
</template>
<style lang='less' scoped>
@base:37.5rem;
.common-font{
  font-size: 14px;
  color: #7F7F7F
}
.active{
  color: #b4282d;
  font-weight: bold;
  font-size: 20/@base
}
.top-bar{
  height:48px;
  line-height:48px;
  text-align: center;
  background:#fafafa;
  border-bottom:1px solid #ccc;
  display: flex;
  span{
    height: 100%;
    flex: 1
  }
  .top-bar-l{
    text-align: left;
    img{
      vertical-align: middle;
      margin-left: 20/@base;
      width:24/@base
    }
  }
  .top-bar-m{
    img{
      vertical-align: middle;
      width:86/@base
    }
  }
  .top-bar-r{
    text-align: right;
    img{
      vertical-align: middle;
      width:24/@base;
      margin-right:16/@base
    }
  }
}
</style>
