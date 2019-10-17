import { fetchTag } from '~/api'
import * as types from '~/constants'

const state = () => ({
  isFetch: false,
  data: [],
})

const getters = {
  getTags: state => state.data,
}

const actions = {
  // 获取标签列表
  [types.FETCH_DATA]({ commit }) {
    commit(types.FETCH_DATA, { isFetch: true, data: [] })
    return fetchTag()
      .then(res => {
        const { result } = res
        commit(types.FETCH_DATA, { isFetch: false, data: result.data })
      })
      .catch(err => {
        commit(types.FETCH_DATA, { isFetch: false, data: [] })
        return Promise.reject(err)
      })
  },
}

const mutations = {
  // 标签列表
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
