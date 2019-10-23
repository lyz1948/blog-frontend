import * as types from '~/constants'
import * as CONFIG from '~/config'
import markdown from '~/utils/markdown'
import { fetchArticle, getArticleDetail } from '~/api'

// 处理代码与缩略图
const formatArticle = list => {
  list.map(post => {
    // 相关文章
    if (post.related) {
      post.related.map(it => {
        it.thumb = CONFIG.APP.prefix + it.thumb
      })
    }
    post.content = markdown.render(post.content)
    post.thumb = CONFIG.APP.prefix + post.thumb
  })
  return list
}

// 默认参数
const getDateOption = () => ({
  data: [],
  pagination: {},
})

const state = () => ({
  articles: null,
  article: '',
  list: {
    isFetch: false,
    data: getDateOption(),
  },
  detail: {
    isFetch: false,
    data: {},
  },
})

const getters = {
  getArticles: state => state.list.data,
  getArticle: state => state.detail.data,
}

const actions = {
  // 获取文章列表
  [types.FETCH_DATA]({ commit }, params = {}) {
    const isStart = !params.page || params.page === 1
    const isLoadMore = params.page && params.page > 1

    isStart && commit(types.FETCH_DATA, { isFetch: true, data: getDateOption() })

    return fetchArticle(params)
      .then(res => {
        const { result } = res
        // 加工数据
        result.data = formatArticle(result.data)
        isLoadMore ? commit(types.UPDATA_DATA, { isFetch: false, data: result }) : commit(types.FETCH_DATA, { isFetch: false, data: result })
      })
      .catch(err => {
        commit(types.FETCH_DATA, { isFetch: false, data: getDateOption() })
        return Promise.reject(err)
      })
  },
  // 文章详情
  [types.FETCH_DETAIL]({ commit }, param) {
    const { article_id: id } = param
    commit(types.FETCH_DETAIL, { isFetch: false, data: {} })

    return getArticleDetail(id)
      .then(res => {
        const { result } = res
        const [data] = formatArticle([result])
        commit(types.FETCH_DETAIL, { isFetch: false, data })
      })
      .catch(error => {
        commit(types.FETCH_DETAIL, { isFetch: false, data: {} })
        return Promise.reject(error)
      })
  },
}

const mutations = {
  // 文章列表
  [types.FETCH_DATA](state, payload) {
    const { isFetch, data } = payload
    state.list.data = data
    state.list.isFetch = isFetch
  },
  // 更新文章列表
  [types.UPDATA_DATA](state, payload) {
    console.log('payload', payload)
    const { isFetch, data } = payload
    state.list.isFetch = isFetch
    state.list.data.data.push(data)
  },

  // 文章详情
  [types.FETCH_DETAIL](state, payload) {
    const { isFetch, data } = payload
    state.detail.isFetch = isFetch
    state.detail.data = data
  },
  // 更新文章详情
  [types.UPDATE_DETAIL](state, payload) {
    const { id } = payload
    state.list.data.forEach(article => {
      if (article.id === id) {
        state.detail.data = article
      }
    })
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
