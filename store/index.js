import { fetchSiteInfo } from '~/api'
import * as types from '~/constants'

const state = () => ({
  isFetch: false,
  data: {},
})

const getters = {
  getSiteInfo: state => state.data,
}

const actions = {
  [types.FETCH_DATA]({ commit }) {
    commit(types.FETCH_DATA, { isFetch: true, data: {} })
    return fetchSiteInfo()
      .then(res => {
        const { result } = res
        commit(types.FETCH_DATA, { isFetch: false, data: result })
      })
      .catch(err => {
        commit(types.FETCH_DATA, { isFetch: false, data: {} })
        return Promise.reject(err)
      })
  },
}

const mutations = {
  [types.FETCH_DATA](state, payload) {
    const { isFetch, data } = payload
    state.isFetch = isFetch
    state.data = data
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
