export default {
    state: {
        error: null,
        loading: false,
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        clearError(state) {
            state.error = null
        },
    },
    actions: {
    },
    getters:{
        loading(state){
            return state.loading
        }
    }
  }