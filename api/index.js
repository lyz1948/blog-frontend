import axios from 'axios'
import { getStatus } from '~/utils'
const CONFIG = require('~/config')

const service = axios.create({
  baseURL: CONFIG.APP.apiUrl,
  timeout: 10000
})

service.interceptors.request.use(config => {
  return config
})

service.interceptors.response.use(response => {
  if (getStatus(response)) {
    return Promise.resolve(response.data)
  } else {
    return Promise.reject(response.data)
  }
})

// 获取站点信息
export const fetchSiteInfo = () => {
  return service.get('/site')
}

// 获取标签列表
export const fetchTag = () => {
  return service.get('/tag')
}

// 获取分类列表
export const fetchCategory = () => {
  return service.get('/category')
}

// 获取文章列表
export const fetchArticle = () => {
  return service.get('/article')
}

// 获取文章详情
export const getArticleDetail = id => {
  return service.get(`/article/${id}`)
}
