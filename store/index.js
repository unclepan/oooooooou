export const actions = {
  async nuxtServerInit({ commit }, { req, app }) {
    // const periodicalListRes = await app.$axios({
    //   method: 'get',
    //   url: '/api/periodical',
    //   params: {
    //     page: 1,
    //     per_page: 5
    //   }
    // })
    // console.log(periodicalListRes)
    // commit(
    //   'geo/setPosition',
    //   status === 200 ? { city, province } : { city: '', province: '' }
    // )
    // const {
    //   status: status2,
    //   data: { menu }
    // } = await app.$axios.get('geo/menu')
    // commit('home/setMenu', status2 === 200 ? menu : [])
    // const {
    //   status: status3,
    //   data: { result }
    // } = await app.$axios.get('/search/hotPlace', {
    //   params: {
    //     city: app.store.state.geo.position.city.replace('市', '')
    //   }
    // })
    // commit('home/setHotPlace', status3 === 200 ? result : [])
  }
}
