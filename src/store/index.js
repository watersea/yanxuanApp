import Vue from 'vue'
import Vuex from 'vuex'
import state from './rootModule/state'
import getters from './rootModule/getter'
import mutations from './rootModule/mutations'
import actions from './rootModule/actions'

// module block
import home from './modules/home/home'

// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    home
  }
})
