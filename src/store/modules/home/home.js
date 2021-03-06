import axisoRequest from '@/api/request'

export default {
  namespaced: true,
  state: {
    loadingImgSrc: 'static/image/default.jpg',
    title: ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '全球特色'],
    bannerImg: [],
    defaultData: {},
    commonData: {},
    hots: [],
    menuList: [],
    menuCon: [],
    isSecond: false,
    knowGood: []
  },
  mutations: {
    GET_CLASSIFY (state, data) {
      state.menuList = data.list
      state.menuCon = data.content
      state.isSecond = data.isSecond
    },
    GET_HOT (state, data) {
      state.hots = data
    },
    GET_MENU (state, data) {
      state.bannerImg = data.bannerImg
      state.defaultData = data.defaultData
      state.commonData = data.commonData
    },
    GET_KNOW_GOOD (state, data) {
      state.knowGood = data
    }
  },
  actions: {
    getGoodClassify (context, index) {
      axisoRequest({
        url: '/classify.php',
        method: 'get',
        params: {
          index
        }
      }).then(res => {
        context.commit('GET_CLASSIFY', res.data.data)
        // tab切换做本地存储
        let obj = {}
        let lindex = index ? 'L' + index : 'L0'
        obj[lindex] = res.data.data
        // storage 存储方式
        let isHas = JSON.parse(localStorage.getItem('wy_classify_data'))
        if (isHas) {
          isHas[lindex] = obj[lindex]
          localStorage.setItem('wy_classify_data', JSON.stringify(isHas))
        } else {
          localStorage.setItem('wy_classify_data', JSON.stringify(obj))
        }
      })
    },
    getHotSearch (context) {
      axisoRequest({
        url: '/hotSearch.php',
        method: 'get'
      }).then(res => {
        context.commit('GET_HOT', res.data.data)
      })
    },
    getMenu (context, menu) {
      axisoRequest({
        url: '/index.php',
        method: 'get',
        params: {
          menu
        }
      }).then(res => {
        console.log(res)
        context.commit('GET_MENU', res.data.data)
      })
    },
    getKnowGood (context, index) {
      axisoRequest({
        url: '/knowGood.php',
        method: 'get',
        params: {
          index
        }
      }).then(res => {
        console.log(res)
        context.commit('GET_KNOW_GOOD', res.data.data)
      })
    }
  }
}
