import { fetchSiteInfo } from '~/api'

import { SITE_INFO } from '~/constants'

const state = () => ({
  data: {},
})

const getters = {
  getSiteInfo: state => state.siteInfo,
}

const actions = {
  async SITE_INFO({ commit }) {
    const { result } = await fetchSiteInfo()
    commit(SITE_INFO, result)
  },
}

const mutations = {
  SITE_INFO(state, payload) {
    state.data = payload
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
