<template>
  <div class='default-tmp'>
      <div class="Q-index-label">
        <span class="label-block">
          <img src="static/image/icon_02.png" alt="">
          <span>网易自营品牌</span>
        </span>
        <span class="label-block">
          <img src="static/image/icon_03.png" alt="">
          <span>30天无忧退货</span>
        </span>
        <span class="label-block">
          <img src="static/image/icon_04.png" alt="">
          <span>48小时快速退款</span>
        </span>
      </div>
      <div class="menu-box">
        <span class="item-list" v-for="(item,index) in defaultData.indexIcon" :key="index" >
          <img :src="item.iconLink" alt="">
          <span>{{item.title}}</span>
        </span>
      </div>
      <img width="100%" src="https://yanxuan.nosdn.127.net/65748a92458890e1d754a1e343776992.gif" alt="">
      <!-- style-banner -->
      <div class='style-banner'>
        <div class="style-banner-list" v-for="(item,index) in defaultData.styleBanner" :key="index">
          <p class="style-title">{{item.title}}</p>
          <p class="style-desc">{{item.desc}}</p>
          <p>
            <img :src="(item.picList)[0]" alt="">
            <img :src="(item.picList)[1]" alt="">
          </p>
        </div>
      </div>
      <!-- 私人订制 -->
      <div class="private" v-if="defaultData.personTailor">
        <p class="private-label">私人订制</p>
        <div class="private-swiper">
          <mt-swipe class='banner-box'
            :auto="2000"
            :speed="600">
            <mt-swipe-item
              class="swipe-block"
              v-for="item in 4"
              :key="item">
              <div class="private-item" v-for="(res,index) in personSlice(item, defaultData.personTailor)" :key="index">
                <img :src="res.picList" alt="">
                <p class="private-title">{{res.title}}</p>
                <p class="private-desc">{{res.desc}}</p>
                <p class="private-price">¥{{res.price}}</p>
              </div>
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <!-- 新品首发 -->
      <div class="new-product common-style">
        <p class="new-product-label">
          <span>新品首发</span>
          <span>更多>></span>
        </p>
        <div class="new-product-list">
          <div class="product-item" v-for="(item,index) in defaultData.newProduct" :key="index" v-if="index<6">
            <img :src="item.picList" alt="">
            <p class="product-title">{{item.title}}</p>
            <p class="product-price"> ¥{{item.price}}</p>
            <p class="product-promTag" v-if="item.promTag"> {{item.promTag}}</p>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: ['defaultData'],
  methods: {
    personSlice (item, data) {
      return data.slice((item - 1) * 3, item * 3)
    }
  }
}
</script>
<style lang="less" scoped>
@base:37.5rem;
.is-active{
  background: #fff;
  opacity: 1
}
.common-style{
  background: #fff;
  padding: 10/@base 12/@base;
  box-sizing: border-box
}
.default-tmp{
  background: #f5f5f5
}
.Q-index-label{
  display: flex;
  padding: 12/@base 5/@base;
  font-size: 12/@base;
  background: #fff;
  .label-block{
    flex: 1
  }
  img{
    vertical-align: middle;
    width: 20/@base
  }
}
.menu-box{
  display: flex;
  flex-wrap: wrap;
  font-size: 12/@base;
  background: #fff;
    .item-list{
      flex: 1;
      margin-bottom: 10/@base;
      img{
        width: 70/@base;
        margin-bottom: 10/@base
      }
    }
}
.style-banner{
  display: flex;
  background: #fff;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 10/@base 12/@base 18/@base;
  p{
    text-align: left;
    box-sizing: border-box;
    padding-left: 10/@base
  }
  .style-banner-list{
    margin-bottom: 4/@base;
    padding: 20/@base 0 10/@base;
    box-sizing: border-box;
    width: 49.5%;
    background: #f5f5f5
  }
  .style-banner-list:nth-child(odd){
    margin-right: 1%
  }
  .style-title{
    font-weight: 600;
    margin-bottom: 6/@base
  }
  .style-desc{
    color:#7f7f7f;
    font-size: 12/@base
  }
  img{
    width:70/@base
  }
}
// 私人订制
.private{
  background: #fff;
  margin-top: 20/@base;
  padding-top: 15/@base;
  .private-label{
    line-height: 28/@base;
    text-align: left;
    padding-left: 18/@base;
    font-size: 16/@base
  }
}
.private-swiper{
  height: 210/@base;
  font-size: 12/@base;
  .swipe-block{
    padding: 10/@base 12/@base;
    box-sizing: border-box;
    display: flex
  }
  .private-item{
    flex: 1;
    width: 32%;
    text-align: left;
    .private-title{
      font-size: 14/@base;
      margin-bottom: 6px;
    }
    .private-desc{
      color:#333;
      width:100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 6px
    }
    .private-price{
      color:#b4282d
    }
    img{
      width: 100/@base;
      background: #f5f5f5;
      margin-bottom: 8px
    }
  }
  .private-item:nth-child(odd){
    margin: 0 2%
  }
}
// 新品首发
.new-product{
  background: #fff;
  margin-top: 20/@base;
  text-align: left;
  margin-bottom: 20/@base;
  .new-product-label{
    line-height: 30/@base;
    padding-left: 12/@base;
    font-size: 16/@base;
    margin-bottom: 10/@base;
    .more{
      float: right;
      margin-right: 16/@base
    }
  }
}
.new-product-list{
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  .product-item{
    width: 32%;
    flex: 1;
    margin-bottom: 12/@base
  }
  .product-item:nth-child(odd){
    margin: 0 2%
  }
  .product-title{
    margin: 8/@base 0;
    min-height: 26/@base
  }
  .product-price{
    color: #b4282d;
    font-size: 14/@base
  }
  .product-promTag{
    color: #ce2424;
    border-radius: 6px;
    border: 1px solid #ce2424;
    padding: 2px 4px;
    display: inline-block;
    transform: scale(.8);
    margin-top: 8/@base
  }
  img{
    background: #f5f5f5;
    width: 100/@base
  }
}
</style>
