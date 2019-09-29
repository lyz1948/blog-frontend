const isProd = process.env.NODE_ENV === 'production'
const PREFIX = isProd ? 'https://www.ykpine.com/' : 'http://127.0.0.1:5381/'
const API_URL = PREFIX + 'api'

module.exports = {
  APP: {
    prefix: PREFIX,
    apiUrl: API_URL,
  },
}
