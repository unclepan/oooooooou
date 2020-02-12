export const state = () => ({ userInfo: {} })

export const mutations = {
  setUserInfo(state, val) {
    state.userInfo = val
  }
}
