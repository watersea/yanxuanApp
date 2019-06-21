<template>
  <div class='classify'>
    <search></search>
    <div class='content'>
      <div class='menu-list'>
        <ul>
            <li
              @click="changeMenus(index)"
              v-for="(item,index) in menuList"
              :class="num === index ? 'active': ''"
              :key="index">
                <span>{{item.name}}</span>
              </li>
        </ul>
      </div>
      <div class='menu-detail wrapper'>
        <div class=''>
        <img class='banner' :src="menuCon.bannerUrl" alt="">
        <div class='goods'>
          <!-- 不带分类的 -->
          <ul v-if="!isSecond">
            <li v-for="(item,index) in menuCon.category" :key="index">
              <img @click="jumpDetail(menuCon.category,0,item.name)" style="margin-bottom:10px" :src="loadingImgSrc" v-lazyImg="item.bannerUrl" alt="">
              <span>{{item.name}}</span>
            </li>
          </ul>
          <!-- 带有分类的 -->
          <div v-else v-for="(item,index) in menuCon.category" :key="index">
            <p class="label">{{item.name}}</p>
            <ul style="display:flex;flex-wrap:wrap">
              <li v-for="(items,k) in item.list" :key="k" >
                <img @click="jumpDetail(menuCon.category,1,items.name)" style="margin-bottom:10px" :src="loadingImgSrc" alt="" v-lazyImg="items.bannerUrl">
                <span>{{items.name}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import search from '@/common/search'
import BScroll from 'better-scroll'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('home')

export default {
  data () {
    return {
      num: 0
    }
  },
  components: {
    search
  },
  computed: {
    ...mapState([
      'menuList',
      'menuCon',
      'isSecond'
    ])
  },
  created () {
    this.loadingImgSrc = this.$store.state.home.loadingImgSrc
    this.getClassify()
  },
  mounted () {
    let wrapper = document.querySelector('.wrapper')
    // eslint-disable-next-line
    let scroll = new BScroll(wrapper,{
      click: true
    })
  },
  methods: {
    ...mapMutations([
      'GET_CLASSIFY'
    ]),
    ...mapActions({
      getClassify: 'getGoodClassify'
    }),
    pullingDown () {
      console.log(1)
    },
    jumpDetail (lists, type, name) {
      let titles = []
      if (type === 0) {
        lists.forEach(ele => {
          titles.push(ele.name)
        })
      } else {
        lists.forEach(ele => {
          (ele.list).forEach(item => {
            titles.push(item.name)
          })
        })
      }
      /*
      * 运用localstorage解决params刷新值丢失问题，
      * 还有另一种方法  就是跳转到goodshow页面时触发getClassify请求，前提是跳转时要带着
      * 左侧的index值
      *
      */
      localStorage.setItem('wy_goodsTitle', JSON.stringify(titles))
      this.$router.push({
        name: 'good_show',
        query: {
          name: encodeURIComponent(name)
        }
      })
    },
    changeMenus (index) {
      // 多次点击同一个tab不发送请求
      if (this.num === index) {
        return
      }
      this.num = index
      /*
      * H5 Storge本地缓存方法
      * 一种基于storage实现过期时间的方法
      * 以此为例：我们在存储本地数据初始创建的时候，获取本地时间转时间戳，设置相应的字段与数据一起保存
      * 这里我们只在第一次创建storage的时候保存时间，在获取storage的时候，获取本地时间与缓存时间做对比
      * 当与我们预期的时间不符的时候，重新发送数据请求，removeItem()更新我们的本地数据缓存
      */
      let localData = localStorage.getItem('wy_classify_data')
      let formatData = JSON.parse(localData)
      let lindex = 'L' + index
      if (formatData[lindex]) {
        this.GET_CLASSIFY(formatData[lindex])
      } else {
        this.getClassify(index)
      }
    }
  }
}
</script>
<style lang="less" scoped>
@base:37.5rem;
.classify{
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden
}
.active{
  color: #b4282d
}
.content{
  display: flex;
  float: 1;
  .menu-list{
    width: 90/@base;
    border-right: 1px solid #f5f5f5;
    ul{
      display: flex;
      height: 100%;
      flex-direction: column
    }
    li{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #f5f5f5;
      span{
        display: block
      }
    }
    li:last-child{
      border-bottom: none
    }
  }
  .menu-detail{
    overflow: auto;
    flex: 1;
    .banner{
      width: 96%;
      margin-top:12/@base;
      border-radius: 5px
    }
    .label{
      font-size: 14/@base;
      text-align: left;
      padding-left: 15/@base;
      line-height: 36/@base;
      border-bottom: 1px solid #f5f5f5;
      font-weight: 600;
      margin-bottom: 12/@base
    }
    .goods{
      margin-top: 15/@base;
      border-top: 1px solid #f5f5f5;
      ul{
        overflow: hidden;
        margin-bottom: 15/@base
      }
      li{
        width: 33.2222%;
        margin-bottom: 15/@base;
        text-align: center;
        float: left;
        span{
          display: inline-block;
          width: 80%;
          overflow: hidden
        }
      }
      img{
          width:80/@base
      }
    }
  }
}
</style>
