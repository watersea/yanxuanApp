<template>
  <div class="rank-list">
    <div class="top-desc" :style="{'background-color':bgColor}">
        <span class="rank" :style="bgStyleFun(val)">{{val}}</span>
        <p class="rank-title">{{data.contentLabel}}</p>
        <p class="rank-desc">
          {{data.content}}
        </p>
    </div>
    <div class="rank-good">
        <img class='good-img' :src="data.picUrl" alt="">
        <div class="rank-good-detail">
            <p class="title">{{data.title}}</p>
            <p class="desc">{{data.desc}}</p>
            <p class="about">
              <span>回购指数：</span>
              <img v-if="data.markOne" src="" alt="">
            </p>
            <p class="about"><span>口碑指数：</span> </p>
            <p>
              <span class="now-price">¥{{data.nowPrice}}</span>
              <span class="orgin-price" v-if="data.orginPrice">¥{{data.orginPrice}}</span>
            </p>

        </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '',
      bgColor:'#dacebe',
    }
  },
  props: ['data','val'],
  methods: {
    bgStyleFun (index) {
      let name = ''
      switch (Number(index)) {
        case 1:
          name='icon_07.png'
          this.bgColor = '#ebb237'
        break;
        case 2:
          name='icon_08.png'
          this.bgColor = '#a7b6c9'
        break;
        case 3:
          name='icon_09.png'
          this.bgColor = '#c28851'
        break;
        default:
          name='icon_06.png'
          this.bgColor = '#dacebe'
      }
      return {
        'background': `url('static/image/${name}') no-repeat`,
        'backgroundSize': '100% 100%'
       
      }

    }
  }
}
</script>
<style lang="less" scoped>
  @base: 37.5rem;
  .rank-list{
    width: 96%;
    margin: 0 auto;
    border-radius: 5px;
    text-align: left;
    background: #fff;
    margin-top: 10px;
    .top-desc{
      position: relative;
      padding: 8/@base;
      color: #fff;
      font-size: 12px;
      .rank{
        display: block;
        position: absolute;
        top: 0;
        left: 10/@base ;
        width: 19/@base;
        height: 21/@base;
        text-align: center;
        line-height: 21/@base;
        background: url('/static/image/icon_07.png') no-repeat;
        background-size: 100% 100%;
      }
      .rank-title{
        font-size: 14px;
        padding-left: 30/@base;
        margin-bottom: 10/@base
      }
      .rank-desc{
        line-height: 16/@base
      }
    }
    .rank-good{
      display: flex;
      padding: 10px 0;
      .good-img{
        width: 125/@base
      }
      .rank-good-detail{
        flex: 1;
        padding: 12px 0;
        margin-left: 12/@base;
        .title{
          color: #2a2a2a;
          font-size: 14px
        }
        .desc{
          color: #949494;
          font-size: 12px;
          margin: 6/@base 0;
        }
        .about{
          font-size: 12px;
          color: #c9a85f;
          margin-bottom: 6px
        }
        .now-price{
          color: #d7282d;
          font-size: 17px;
          margin-right: 5px
        }
        .orgin-price{
          color: #a5a5a5;
          font-size: 12px;
          text-decoration: line-through
        }
      }
    }
  }
</style>
