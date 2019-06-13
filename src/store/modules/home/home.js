import axisoRequest from '@/api/request'

export default {
  namespaced: true,
  state: {
    title: [],
    bannerImg: [],
    hots: [],
    menuList: [],
    menuCon: [],
    isSecond: false
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
      state.title = data.title
      state.bannerImg = data.bannerImg
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
        let isHas = JSON.parse(localStorage.getItem('wy_classify_data'))
        if (isHas) {
          isHas[lindex] = obj[lindex]
          localStorage.setItem('wy_classify_data', JSON.stringify(isHas))
        } else {
          localStorage.setItem('wy_classify_data', JSON.stringify(obj))
        }
        // console.log(res)
      })
    },
    getHotSearch (context) {
      axisoRequest({
        url: '/hotSearch.php',
        method: 'get'
      }).then(res => {
        context.commit('GET_HOT', res.data)
      })
    },
    getMenu (context, index) {
      axisoRequest({
        url: '/api',
        method: 'get',
        params: {
          index
        }
      }).then(res => {
        console.log(res)
        context.commit('GET_MENU', res.data)
      })
    }
  }
}
