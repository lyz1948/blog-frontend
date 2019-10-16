import { fetchCategory } from '~/api'

import { CATEGORY_LIST } from '~/constants'

const state = () => ({
  category: null,
})

const getters = {
  getCategories: state => state.category && state.category.data,
}

const actions = {
  async CATEGORY_LIST({ commit }) {
    const { result } = await fetchCategory()
    commit(CATEGORY_LIST, result)
  },
}

const mutations = {
  CATEGORY_LIST(state, payload) {
    state.category = payload
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
