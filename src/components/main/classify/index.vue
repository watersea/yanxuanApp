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
      <div class='menu-detail'>
        <img class='banner' :src="menuCon.bannerUrl" alt="">
        <div class='goods'>
          <!-- 不带分类的 -->
          <ul v-if="!isSecond">
            <li v-for="(item,index) in menuCon.category" :key="index">
                <img style="margin-bottom:10px" :src="item.bannerUrl" alt="">
                <span>{{item.name}}</span>
            </li>
          </ul>
          <!-- 带有分类的 -->
          <div v-else v-for="(item,index) in menuCon.category" :key="index">
            <p class="label">{{item.name}}</p>
            <ul>
              <li v-for="(items,index) in item.list" :key="index">
                <img style="margin-bottom:10px" :src="items.bannerUrl" alt="">
                <span>{{items.name}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import search from '@/common/search'
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
    this.getClassify()
  },
  methods: {
    ...mapMutations([
      'GET_CLASSIFY'
    ]),
    ...mapActions({
      getClassify: 'getGoodClassify'
    }),
    changeMenus (index) {
      // 多次点击同一个tab不发送请求
      if (this.num === index) {
        return
      }
      this.num = index
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
          width: 100%
        }
      }
      img{
          width:80/@base
      }
    }
  }
}
</style>
