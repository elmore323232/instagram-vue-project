import Vue from 'vue'
import userprofile from './userprofile'

import user from './user'
import Vuex from 'vuex'
import shared from './shared'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    shared,
    userprofile,
  }
})
