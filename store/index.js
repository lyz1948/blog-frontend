import { fetchSiteInfo } from '~/api'

import { SITE_INFO } from '~/constants'

export const state = () => ({
  siteInfo: {},
})

export const actions = {
  async SITE_INFO({ commit }) {
    const { result } = await fetchSiteInfo()
    commit(SITE_INFO, result)
  },
}

export const mutations = {
  SITE_INFO(state, payload) {
    state.siteInfo = payload
  },
}
