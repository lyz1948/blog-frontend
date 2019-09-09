import { fetchCategory } from '~/api'

import { CATEGORY_LIST } from '~/constants'

export const state = () => ({
  list: []
})

export const actions = {
  async CATEGORY_LIST({ commit }) {
    const { result } = await fetchCategory()
    console.log(result)
    commit(CATEGORY_LIST, result)
  }
}

export const mutations = {
  CATEGORY_LIST(state, payload) {
    state.list = payload
  }
}
