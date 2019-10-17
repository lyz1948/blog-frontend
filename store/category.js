import { fetchCategory } from '~/api'
import * as types from '~/constants'

const state = () => ({
  isFetch: false,
  data: [],
})

const getters = {
  getCategories: state => state.data,
}

const actions = {
  // 获取分类列表
  [types.FETCH_DATA]({ commit }) {
    commit(types.FETCH_DATA, { isFetch: true, data: [] })
    return fetchCategory()
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
  // 分类列表
  [types.FETCH_DATA](state, payload) {
    const { isFetch, data } = payload
    state.data = data
    state.isFetch = isFetch
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
