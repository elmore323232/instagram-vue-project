import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default({
  state: {
    userName: 'levkin_hookah',
    userDescription: 'its test user description',
    userIcon: 'https://pbs.twimg.com/media/EcZzOJbXgAEpndc.jpg',
    userImages: [
        {
            date: '',
            src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            comments: [
                {
                    userName: '',
                    comment: '',
                }
            ]
        },
        
        {
            date: '',
            src: 'https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG',
            comments: [
                {
                    userName: '',
                    comment: '',
                }
            ]
        },
        
        {
            date: '',
            src: 'https://tinypng.com/images/social/website.jpg',
            comments: [
                {
                    userName: '',
                    comment: '',
                }
            ]
        },
        
    ],
    postCounter: 0,
    followersCounter: 0,
    followCounter: 0,
  },
  mutations: {
  },
  actions: {
  },

  getters: {
      getUser(state) {
          return {
              username: state.userName,
              userDescription: state.userDescription,
              userImages: state.userImages,
              userIcon: state.userIcon,
              postCounter: state.postCounter,
              followersCounter: state.followCounter,
              followCounter: state.followCounter,
          }
      },
  }
})
