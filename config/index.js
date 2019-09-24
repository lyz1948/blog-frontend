const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  APP: {
    apiUrl: isProd ? 'https://www.ykpine.com/api/' : 'http://127.0.0.1:5381/api/'
  }
}
