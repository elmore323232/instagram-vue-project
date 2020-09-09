import Vue from 'vue'
import user from './userprofile'
import Vuex from 'vuex'
import user from './user'
import shared from './shared'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
<<<<<<< HEAD
    shared
=======
>>>>>>> levkin_branch
  }
})
