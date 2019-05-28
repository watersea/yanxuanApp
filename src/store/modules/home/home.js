import axisoRequest from '@/api/request'

export default {
  namespaced: true,
  state: {
    title: [],
    bannerImg: []
  },
  mutations: {
    GET_MENU (state, data) {
      state.title = data.title
      state.bannerImg = data.bannerImg
    }
  },
  actions: {
    getMenu (context) {
      axisoRequest({
        url: 'banner_top.php',
        method: 'get'
      }).then(res => {
        console.log(res)
        context.commit('GET_MENU', res.data)
      })
    }
  }
}
