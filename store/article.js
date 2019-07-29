import { fetchArticle, getArticleDetail } from '~/api'
import { ARTICLE_LIST, DETAIL } from '~/constants'
import markdown from '~/utils/markdown'

export const state = () => ({
  list: [],
  detail: ''
})

export const actions = {
  async ARTICLE_LIST({ commit }) {
    const { result } = await fetchArticle()
    result.data.map((post) => {
      post.content = markdown.render(post.content)
    })
    commit(ARTICLE_LIST, result)
  },
  async DETAIL({ commit }, params) {
    const { article_id: id } = params
    const { result } = await getArticleDetail(id)
    result.content = markdown.render(result.content)
    commit(DETAIL, result)
  }
}

export const mutations = {
  ARTICLE_LIST(state, payload) {
    state.list = payload
  },
  DETAIL(state, payload) {
    state.detail = payload
  }
}

export const getters = {
  articles(state) {
    return state.list
  }
}
