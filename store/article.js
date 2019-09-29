import { fetchArticle, getArticleDetail } from '~/api'
import { ARTICLE_LIST, DETAIL } from '~/constants'
import markdown from '~/utils/markdown'
import * as CONFIG from '@/config'

export const state = () => ({
  list: [],
  detail: '',
})

export const actions = {
  async ARTICLE_LIST({ commit }) {
    const { result } = await fetchArticle()
    result.data.map(post => {
      post.content = markdown.render(post.content)
      post.thumb = CONFIG.APP.prefix + post.thumb
    })
    commit(ARTICLE_LIST, result)
  },
  async DETAIL({ commit }, params) {
    const { article_id: id } = params
    const { result } = await getArticleDetail(id)
    result.content = markdown.render(result.content)
    result.thumb = CONFIG.APP.prefix + result.thumb
    commit(DETAIL, result)
  },
}

export const mutations = {
  ARTICLE_LIST(state, payload) {
    state.list = payload
  },
  DETAIL(state, payload) {
    state.detail = payload
  },
}

export const getters = {
  articles(state) {
    return state.list
  },
}
