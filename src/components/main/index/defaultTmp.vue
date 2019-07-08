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
        <p class="common-label">
          <span>新品首发</span>
          <span class="look-more">
            <span>更多</span>
            <span class="iconfont icon-icon_arrow_right"></span>
          </span>
        </p>
        <div class="new-product-list">
          <div class="product-item" v-for="(item,index) in defaultData.newProduct" :key="index" v-if="index<6">
            <img :src="item.picList" alt="">
            <p class="product-title textLeft">{{item.title}}</p>
            <p class="product-price textLeft"> ¥{{item.price}}</p>
            <p class="product-promTag textLeft" v-if="item.promTag"> {{item.promTag}}</p>
          </div>
        </div>
      </div>
      <!-- 人气推荐 -->
      <div class="recommend common-style">
        <p class="common-label">
          <span>人气推荐</span>
          <span class="look-more">
            <span>更多</span>
            <span class="iconfont icon-icon_arrow_right"></span>
          </span>
        </p>
        <div class="recommend-good">
          <div v-for="(item,index) in defaultData.popularItem" :key="index" :class="index===0 ? '':'good-common' ">
            <div v-if="index===0" class="good-first">
              <div class="good-block" style="width:40%">
                <img width="100%" :src="item.picList" alt="">
              </div>
              <div class="good-block" style="width:60%">
                <span class="recommend-first-promTag">{{item.promTag}}</span>
                <p class="recommend-first-title">{{item.title}}</p>
                <p class="recommend-first-desc">{{item.desc}}</p>
                <p class="recommend-first-price">¥&nbsp;{{item.price}}</p>
              </div>
            </div>
            <div v-else class="good-common-box">
               <img width="100%" :src="item.picList" alt="">
               <p class="recommend-title textLeft">{{item.title}}</p>
               <p class="recommend-price textLeft"> ¥{{item.price}}</p>
               <p class="recommend-promTag textLeft" v-if="item.promTag"> {{item.promTag}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 类目热销榜 -->
      <div class="hot-sell common-style">
        <p class="common-label">
          <span>类目热销榜</span>
        </p>
        <div class="hot-block">
          <div
            v-for="(item, index) in defaultData.categoryHotSell"
            :key="index"
            :class="index<2? 'hot-top': 'hot-common'"  >
            <div v-if="index < 2" class="">
              <span>
                {{item.title}}
              </span>
              <img :src="item.imgUrl" alt="">
            </div>
            <div v-else>
              <p>{{item.title}}</p>
              <img width="100%" :src="item.imgUrl" alt="">
            </div>
          </div>
        </div>
      </div>
      <!-- 福利社 -->
      <div class="activity-module common-style">
        <div class="activity-list" v-for="(item,index) in defaultData.activityModule" :key="index" :style="{'backgroundColor':color[index]}">
          <div class="activity-detail">
            <p>{{item.title}}</p>
            <p>{{item.desc}}</p>
            <p>{{item.promTag}}</p>
          </div>
          <img :src="item.imgUrl" alt="">
        </div>
      </div>
      <!-- 制造商 -->
      <div class="maker common-style">
         <p class="common-label">
          <span>品牌制造商直供</span>
          <span class="look-more">
            <span>更多</span>
            <span class="iconfont icon-icon_arrow_right"></span>
          </span>
        </p>
        <div class="maker-box">
          <div class="maker-list" v-for="(item,index) in defaultData.tagList" :key="index">
            <div class=maker-pos>
              <p class="maker-title">{{item.title}}</p>
              <p class="maker-price">{{item.price}}元起</p>
            </div>
            <img width="100%" :src="item.imgUrl" alt="">
          </div>
        </div>
      </div>
      <!-- 专题精选 -->
      <div class="special common-style">
        <p class="common-label">
          <span>专题精选</span>
          <span class="look-more">
            <span>更多</span>
            <span class="iconfont icon-icon_arrow_right"></span>
          </span>
        </p>
        <div class="special-content">
          <div class="special-list" v-for="(item, index) in defaultData.specialModule" :key="index">
            <img width="100%" :src="item.imgUrl" alt="">
            <p>{{item.title}}</p>
            <p class="special-desc">{{item.desc}}</p>
          </div>
        </div>
      </div>
      <!-- 众筹 -->
      <div class="zhongchou common-style">
        <p class="common-label" style="border-bottom:1px solid #f5f5f5">
          <span>众筹</span>
          <span class="look-more">
            <span>更多</span>
            <span class="iconfont icon-icon_arrow_right"></span>
          </span>
        </p>
        <div class="zhongchou-box">
          <div class="zc-list" v-for="(item,index) in defaultData.zhongChou" :key="index">
            <img class="zcImg" :src="item.imgUrl" alt="">
            <div class=zc-detail>
              <p class="zc-title">{{item.title}}</p>
              <p class="zc-price">¥{{item.price}}</p>
              <p class="zc-progress">
                <span class="progress-line">
                  <span class="progress-num" :style="{'width':item.progress+'%'}"></span>
                </span>
                <span>{{item.progress}}%</span>
              </p>
              <p class="zc-supportNum">
                {{item.supportNum}}人已支持
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 商品列表 -->
      <div class="goods-example">
        <div class='good-item' v-for="(item,index) in defaultData.goodsList" :key="index">
          <img width="100%" :src="item.bannerImg" alt="">
          <div class="good-item-box">
            <div class="good-second-list"  v-for="(res,i) in item.list" :key="i">
              <img width="100%" :src="res.goodImg" alt="">
              <span class="good-colorNum" v-if="Number(res.colorNum)!== 0">{{res.colorNum}}色可选</span>
              <p class="good-name">{{res.goodName}}</p>
              <p class="good-desc">{{res.goodDesc}}</p>
              <p>
                <span class="good-nowPrice">¥{{res.goodPrice}}</span>
                <span class="good-orginPrice">¥{{res.orginPrice}}</span>
              </p>
          </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      color: ['#ebeff6', '#eaf3e7', '#f8efee', '#f9f3e5']
    }
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
.textLeft{
  text-align: left
}
.common-style{
  background: #fff;
  padding: 10/@base 12/@base;
  box-sizing: border-box
}
.common-label{
    line-height: 30/@base;
    padding-left: 12/@base;
    font-size: 16/@base;
    margin-bottom: 10/@base;
    .look-more{
      float: right;
      font-size: 14px;
      color: #666;
      margin-right:24/@base;
      position: relative;
      .iconfont{
        position: absolute;
        top: 0;
        right: -18/@base
      }
    }
  }
.good-block{
  float: left
}
.good-first{
  overflow: hidden;
  background: #FEF0DF;
  border-radius: 4px
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
  margin-bottom: 20/@base
}
.new-product-list{
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  .product-item{
    width: 32%;
    text-align: center;
    margin-bottom: 12/@base
  }
  .product-item:nth-child(3n-1){
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
    margin-top: 8/@base;
    float: left
  }
  img{
    background: #f5f5f5;
    width: 100%
  }
}
.recommend{
  text-align: left;
  background: #fff;
  margin-top: 20/@base;
  margin-bottom: 20/@base;
  .recommend-first-promTag{
    color: #B4282D;
    border: 1px solid #B4282D;
    background: #fff;
    font-size: 12px;
    display: inline-block;
    padding: 2px 3px;
    margin-top: 30/@base;
    transform: scale(.8)
  }
  .recommend-first-title{
    width: 90%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 6px 0
  }
  .recommend-first-desc{
    width: 90%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
    color: #7f7f7f;
    margin-bottom:6px
  }
  .recommend-first-price{
    color: #B4282D;
    font-size: 16px
  }
  .good-common{
    display: inline-block;
    width: 32%;
    .recommend-title{
      margin: 8/@base 0;
      min-height: 26/@base
    }
    .recommend-price{
      color: #b4282d;
      font-size: 14/@base
    }
    .recommend-promTag{
      color: #ce2424;
      border-radius: 6px;
      border: 1px solid #ce2424;
      padding: 2px 4px;
      display: inline-block;
      transform: scale(.8);
      margin-top: 8/@base;
      max-width: 80%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      float: left
    }
  }
  .good-common:nth-child(odd){
    margin: 0 2%
  }
}
.hot-sell{
  text-align: left;
  background: #fff;
  margin-top: 20/@base;
  margin-bottom: 20/@base;
  overflow: hidden;
}
.hot-top{
  display: inline-block;
  width:49%;
  background: #F9F3E4;
  span{
    float: left;
    margin-top: 40px;
    margin-left: 15/@base;
    display: inline-block;
    position: relative;
    &:after{
      content: "";
      display: block;
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 70%;
      height: 4px;
      background: #000;
    }
  }
  img{
    float: right;
    width: 100/@base
  }
}
.hot-top:nth-child(2){
  background: #EBEFF6;
  margin-left: 2%
}
.hot-common{
  float: left;
  width: 23.5%;
  margin-top: 10/@base;
  background: #f5f5f5;
  margin-right: 2%;
  padding-top: 10px;
  text-align:center
}
.hot-common:nth-child(4n+2){
  margin-right: 0
}
// 福利社
.activity-module{
  text-align: left;
  background: #fff;
  margin-top: 20/@base;
  margin-bottom: 20/@base;
  overflow: hidden;
}
.activity-list{
  width:49%;
  float: left;
  text-align: right;
  position: relative;
  margin-bottom: 8/@base;
  img{
    height: 110/@base
  }
  &:nth-child(odd){
    margin-right: 2%
  }
  .activity-detail{
    position: absolute;
    top: 20/@base;
    left:10/@base;
    text-align: left;
    p:nth-child(1){
      font-size: 16px
    }
    p:nth-child(2){
      font-size: 12px;
      color: #7f7f7f;
      margin: 6/@base 0
    }
    p:nth-child(3){
      color:#B4282D;
      font-size: 12px
    }
  }
}
.maker{
  text-align: left;
  background: #fff;
  margin-top: 20/@base;
  margin-bottom: 20/@base;
  overflow: hidden;
  .maker-list{
    position: relative;
    width: 49.5%;
    float: left;
    &:nth-child(odd){
      margin-right: 1%
    }
  }
  .maker-pos{
    position: absolute;
    top: 10/@base;
    left: 0;
    text-align: center;
    width: 100%;
    .maker-title{
      font-size: 16px;
      margin-bottom: 5px
    }
    .maker-price{
      font-size: 12px;
      color: #7f7f7f
    }
  }
}
.special{
  text-align: left;
  background: #fff;
  margin-top: 20/@base;
  margin-bottom: 20/@base;
  overflow: hidden;
  .special-content{
    width: 100%;
    height:210/@base;
    white-space: nowrap;
    overflow-x:scroll
  }
  .special-list{
    display: inline-block;
    vertical-align: middle;
    width:75%;
    margin-right: 20/@base;
    border-radius: 6px;
    background: #f5f5f5;
    &:last-child{
      margin-right:0;
    }
    .special-desc{
      font-size: 12px;
      color: #7f7f7f
    }
    img{
      border-top-left-radius: 6px;
      border-top-right-radius: 6px
    }
    p{
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 6px;
      box-sizing: border-box
    }
  }
}
.zhongchou{
  text-align: left;
  background: #fff;
  margin-top: 20/@base;
  margin-bottom: 20/@base;
}
.zc-list{
  display: flex;
  margin-bottom: 15/@base;
  .zcImg{
    width:100/@base;
    height:100/@base;
    background: #f5f5f5
  }
  .zc-detail{
    flex: 1;
    box-sizing: border-box;
    padding-left: 14/@base;
    font-size: 12px;
    .zc-title{
      font-size: 14px;
      font-weight: 600;
      margin-top: 8px
    }
    .zc-price{
      font-size: 16px;
      color: #B4282D;
      margin:6px 0
    }
    .zc-progress{
      margin: 8px 0
    }
    .progress-line{
      display: inline-block;
      width: 170/@base;
      height: 10px;
      background: #f5f5f5;
      vertical-align: middle;
      border-radius: 6px;
    }
    .progress-num{
      display: inline-block;
      vertical-align: top;
      height: 100%;
      border-radius: 6px;
      background: #ffa10d;
    }
  }
}
.good-item{
  background: #fff;
  margin-top: 20/@base;
  .good-item-box{
    width: 100%;
    overflow-x: scroll;
    white-space: nowrap;
    padding: 6px;
    box-sizing: border-box;
  }
  .good-second-list{
    display: inline-block;
    width: 120/@base;
    margin-right: 14/@base;
    text-align: left;
    position: relative;
    img{
      background: #f5f5f5
    }
    .good-colorNum{
      position: absolute;
      top: -2px;
      left: 2px;
      color: #b4a078;
      border: 1px solid #b4a078;
      width: 12px;
      text-align: center;
      padding: 6px 4px;
      transform: scale(.6);
      white-space: normal;
    }
    .good-name{
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      box-sizing: border-box;
      padding: 2px 4px;
      margin-bottom: 4px
    }
    .good-desc{
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      font-size: 12px;
      color: #7f7f7f;
      box-sizing: border-box;
      padding: 2px 4px;
      margin-bottom: 6px
    }
    .good-nowPrice{
      color: #B4282D;
      margin-right:6px;
      margin-left:6px
    }
    .good-orginPrice{
      color: #7f7f7f;
      text-decoration: line-through
    }
  }
}
</style>
