export default {
  namespaced: true,
  state: {
    login: {}
  },
  getters: {
    GET_USER_LOGIN: (state) => {
      return state.login
    }
  },
  mutations: {
    CHANGE_USER_LOGIN(state, data) {
      state.login = data
    },
    CHANGE_USER_LOGOUT(state, data) {
      state.login = {}
    }
  },
  actions: {
    ACTIONS_USER_LOGIN({ commit }) {}
  }
}
