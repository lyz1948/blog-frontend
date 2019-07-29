import { fetchTag } from '~/api'

import { TAG_LIST } from '~/constants'

export const state = () => ({
  list: []
})

export const actions = {
  async TAG_LIST({ commit }) {
    const { result } = await fetchTag()
    commit(TAG_LIST, result)
  }
}

export const mutations = {
  TAG_LIST(state, payload) {
    state.list = payload
  }
}
