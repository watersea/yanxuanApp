<template>
  <div class="top-bar">
    <span class='top-bar-l' @click="$router.push('home/index')">
      <img src="static/image/icon_home.png" alt="">
    </span>
    <span class='top-bar-m'>
      <img src="static/image/icon_title.png" alt="">
    </span>
    <span class='top-bar-r'>
      <img class="search" @click="$router.push('/search')" src="static/image/icon_search.png" alt="">
      <img class="shop" @click="$router.push('home/shopCar')" src="static/image/icon_shop.png" alt="">
    </span>
  </div>
</template>
<style lang='less' scoped>
@base:37.5rem;
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
