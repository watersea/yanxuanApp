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
    getMenu (context, index) {
      axisoRequest({
        url: 'banner_top.php',
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
