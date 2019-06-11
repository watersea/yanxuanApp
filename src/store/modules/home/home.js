import axisoRequest from '@/api/request'

export default {
  namespaced: true,
  state: {
    title: [],
    bannerImg: [],
    hots: []
  },
  mutations: {
    GET_HOT (state, data) {
      state.hots = data
    },
    GET_MENU (state, data) {
      state.title = data.title
      state.bannerImg = data.bannerImg
    }
  },
  actions: {
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
