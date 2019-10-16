import { fetchArticle, getArticleDetail } from '~/api'
import { ARTICLE_LIST, ARTICLE_DETAIL } from '~/constants'
import markdown from '~/utils/markdown'
import * as CONFIG from '@/config'

// 处理代码与缩略图
const formatArticle = list => {
  list.map(post => {
    post.content = markdown.render(post.content)
    post.thumb = CONFIG.APP.prefix + post.thumb
  })
  return list
}

const state = () => ({
  articles: null,
  article: '',
})

const getters = {
  getArticles: state => state.articles && state.articles.data,
  getArticle: state => state.article,
}

const actions = {
  async ARTICLE_LIST({ commit }, querys) {
    const { result } = await fetchArticle(querys)
    result.data = formatArticle(result.data)

    commit(ARTICLE_LIST, result)
  },
  async ARTICLE_DETAIL({ commit }, param) {
    const { article_id: id } = param
    const { result } = await getArticleDetail(id)
    const [data] = formatArticle([result])
    commit(ARTICLE_DETAIL, data)
  },
  async ARTICLE_CATEGORY({ dispatch }, id) {
    await dispatch(ARTICLE_LIST, { category: id })
  },
}

const mutations = {
  ARTICLE_LIST(state, payload) {
    state.articles = payload
  },
  ARTICLE_DETAIL(state, payload) {
    state.article = payload
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
