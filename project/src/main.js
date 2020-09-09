import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as fb from 'firebase'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyBiDPH_54nIPSwmGTAF_JFVvUQS9aUVy14",
      authDomain: "instagram-443d6.firebaseapp.com",
      databaseURL: "https://instagram-443d6.firebaseio.com",
      projectId: "instagram-443d6",
      storageBucket: "instagram-443d6.appspot.com",
      messagingSenderId: "869152853043",
      appId: "1:869152853043:web:dee86d7b72c7917231e746"
    })

  }
}).$mount('#app')
