const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({ auth: null })

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app, req }) {
    let auth = false
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = await app.$axios.$get(`/api/users/is/login/${parsed.auth}`)
      } catch (err) {
        // No valid cookie found
        auth = false
      }
    }
    commit('setAuth', auth)
  }
}
