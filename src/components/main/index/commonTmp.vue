<template>
  <div class='common'>
    <div class="common-list" v-for="(item,index) in commonData" :key="index">
      <div class="label">
        <p class="label-name">{{item.category.labelName}}</p>
        <p class="label-desc">{{item.category.labelDesc}}</p>
      </div>
      <div class="good-box" style="text-align:left">
        <div class="good-list" v-for="(res,k) in item.itemList" :key="k">
          <img width="100%" style="background: #f5f5f5" v-lazyImg="res.imgUrl" :src="lazyImg" alt="">
          <p class='good-desc'>{{res.desc}}</p>
          <p class="good-name">{{res.name}}</p>
          <p style="text-align: left;margin-bottom:8px">
            <span class="good-now-price">¥{{res.goodNowPrice}}</span>
            <span class="good-orgin-price" v-if="res.goodNowPrice < res.goodOrginPrice">¥{{res.goodOrginPrice}}</span>
          </p>
          <span v-if="res.promTag" class="good-promTag">{{res.promTag}}</span>
          <span class="colorNum" v-if="res.colorNum">{{res.colorNum}}色可选</span>
          <span class="colorNum" v-else-if="res.productPlace">{{res.productPlace}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  props: ['commonData'],
  computed: {
    ...mapState({
      lazyImg: state => state.home.loadingImgSrc
    })
  }
}
</script>
<style lang="less" scoped>
@base:37.5rem;
  .common{
    color: #ccc;
    background: #f5f5f5;
  }
  .common-list{
    background: #fff;
    padding: 12px 2%;
    box-sizing: border-box;
    margin-top: 15px;
    .label{
      margin-bottom: 12px
    }
    .label-name{
      color: #333;
      font-size: 16px;
      margin-bottom: 8px;
    }
    .label-desc{
      font-size: 12px;
      color: #999
    }
    .good-box{
      overflow: hidden;
    }
    .good-list{
      position: relative;
      width: 49%;
      float: left;
      margin-bottom: 10px;
      &:nth-child(odd){
        margin-right: 2%
      }
      .good-desc{
        font-size: 12px;
        background: #F1ECE2;
        color: #9F8A60;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 6px 8/@base;
        box-sizing: border-box
      }
      .good-name{
        font-size: 14px;
        color: #333;
        overflow: hidden;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 12px 0 6px;
        text-align: left
      }
      .good-now-price{
        color: #b4282d;
        font-size: 16px
      }
      .good-orgin-price{
        text-decoration: line-through;
        color: #999
      }
      .good-promTag{
        display: inline-block;
        border: 1px solid #CE2424;
        color: #CE2424;
        border-radius: 10/@base;
        font-size: 10px;
        margin-left: -4/@base;
        padding: 2px 6px;
        transform: scale(.8)
      }
      .colorNum{
        display: inline-block;
        width: 12px;
        text-align: center;
        position: absolute;
        top: 5px;
        left: 5px;
        color: #b4a078;
        border: 1px solid #b4a078;
        font-size: 12px;
        background: #fff;
        padding: 2px;
        transform: scale(.9)
      }
    }
  }
</style>
