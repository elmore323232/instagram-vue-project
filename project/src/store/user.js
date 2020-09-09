import * as fb from 'firebase'

class User {
    constructor(id) {
        this.id = id
    }
}

export default {
    state: {
        user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },

    },
    actions: {
        async registerUser({ commit }, { email, password }) {
            commit('setLoading', true)
            try {
                const user = await fb.auth().createUserWithEmailAndPassword(email, password)
                commit('setUser', new User(user.uid))
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                throw error

            }
        },
        async loginUser({ commit }, { email, password }) {
            commit('setLoading', true)
            try {
                const user = await fb.auth().signInWithEmailAndPassword(email, password)
                commit('setUser', new User(user.uid))
                commit('setLoading', false)
                console.log(user)

            } catch (error) {
                commit('setLoading', false)
                console.log(error)

                throw error
            }

        },
        autoLoginUser ({commit}, payload){
            commit('setUser', new User(payload.uid))
        },

    },
    modules: {
    }
}
