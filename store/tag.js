import { fetchTag } from '~/api'

import { TAG_LIST } from '~/constants'

const state = () => ({
  tag: null,
})

const getters = {
  getTags: state => state.tag && state.tag.data,
}

const actions = {
  async TAG_LIST({ commit }) {
    const { result } = await fetchTag()
    commit(TAG_LIST, result)
  },
}

const mutations = {
  TAG_LIST(state, payload) {
    state.tag = payload
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
