<template>
  <div class="bask">
    <div class="top-label">
      <p class="title">让生活更好的N种方法</p>
      <p class="desc">厨房蜜语，满足你的胃</p>
      <div style="padding: 0 20px;">
        <swiper class="swiper-wrapper" ref="swiperBanner" :options="swiperOptionBanner">
          <swiper-slide v-for="(item,index) in swiperimg" :key="index">
            <img @click="$router.push('/404')" class="banner-img" :src="item" alt="">
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="comment">
      <p class="label">TA们的严选生活</p>
      <div class="comment-box">
         <!-- <VirtualCollection
            :cellSizeAndPositionGetter="cellSizeAndPositionGetter"
            :collection="items"
            :height="500"
            :width="330"
        >
            <div slot="cell" slot-scope="props">{{props.data}}</div>
        </VirtualCollection> -->
        <div class="comment-list" ref="commentList" v-for="(item, index) in knowGood" :key="index">
          <img width="100%" :src="item.picUrl" alt="">
          <p class="comment-detail">{{item.content}}</p>
          <div class="user-info">
            <img class="user-header" :src="item.avatar" alt="">
            <span style="font-size:12px;color:#7f7f7f">{{item.uname}}</span>
            <span class="support">
              {{item.supportNum}}
              <i class="iconfont icon-dianzan"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      commentList: [],
      swiperOptionBanner: {
        freeMode: true,
        slidesPerView:2.8,
        spaceBetween: 20
      },
      swiperimg: [
        'https://yanxuan.nosdn.127.net/78cc8a9c97fb73668df4a8d7139cbb52.jpg?imageView&quality=70&thumbnail=240y240',
        'https://yanxuan.nosdn.127.net/fafddacbcb839eed60cb584161b98b0e.jpg?imageView&quality=70&thumbnail=240y240',
        'https://yanxuan.nosdn.127.net/4746402a476bf878f164708ae733b003.jpg?imageView&quality=70&thumbnail=240y240',
        'https://yanxuan.nosdn.127.net/3dd029c391828ef6b4baca760316e41c.jpg?imageView&quality=70&thumbnail=240y240',
        'https://yanxuan.nosdn.127.net/296687ccea3107cb4c8d770fc7bab0cb.jpg?imageView&quality=70&thumbnail=240y240',
        'https://yanxuan.nosdn.127.net/fe6b2fc5d38be8a29c9d4c1a24d0ffc3.jpg?imageView&quality=70&thumbnail=240y240',
        'https://yanxuan.nosdn.127.net/f0fb44bcaa435f377def2cafd8716de0.jpg?imageView&quality=70&thumbnail=240y240',
        'https://yanxuan.nosdn.127.net/368dbbb91121c810fe136a14e5dc7258.jpg?imageView&quality=70&thumbnail=240y240'
      ]
    }
  },
  components: {
   
  },
  mounted () {
    this.$nextTick(()=>{
      console.log(this.$refs.commentList)
      this.waterFall(this.$refs.commentList)
    })
  },
  computed: {
    ...mapState({
      knowGood: state => state.home.knowGood
    })
  },
  methods: {
    waterFall (val) {
      [...val].map((item) => {
        console.log(item)
      })
    }
  }
}
</script>
<style lang="less" scoped>
  @base: 37.5rem;
  .bask{
    overflow: auto
  }
  .top-label{
    background: #fff;
    padding: 20/@base 0;
    margin-bottom: 20/@base;
    .title{
      font-size: 12px;
      color: #7f7f7f;
      margin-bottom: 20/@base
    }
    .desc{
      font-size: 16px;
      color: #333;
      margin-bottom: 20/@base
    }
    .banner-img{
      width: 100%;
      border-radius: 6px
    }
  }
  .comment {
    background: #fff;
    padding: 20/@base 2%;
    .label{
      font-size: 16px;
      color: #333;
      font-weight: bold
    }
    .comment-box{
      margin-top: 15/@base;
      overflow: hidden;
      .comment-list{
        width: 49%;
        float: left;
        box-shadow: 1px 1px 1px #f5f5f5;
        border-radius: 6px;
        padding: 6px 0;
        margin-bottom: 16/@base;
        &:nth-child(odd){
          margin-right: 2%
        }
      }
      .comment-detail{
        font-size: 12px;
        color: #333;
        text-align: left;
        padding: 10/@base 6/@base;
        box-sizing: border-box;
        width: 100%;
        max-height: 48/@base;
        line-height: 18/@base;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2
      }
      .user-header{
        width: 24/@base;
        height: 24/@base;
        border-radius: 50%
      }
      .user-info{
        line-height: 24/@base;
        text-align: left;
        padding-right: 10/@base;
        box-sizing: border-box
      }
      .support{
        float: right;
        font-size: 12px;
        color: #999
      }
    }
  }
</style>
