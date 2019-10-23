export * from './date'

const ERR_NO = 200

export const getStatus = res => {
  return !!res.status && res.data && Object.is(res.status, ERR_NO)
}

export const formatQuery = (url, querys) => {
  if (Object.prototype.toString.call(querys) !== '[object Object]') {
    return url
  }
  if (JSON.stringify(querys) === '{}') {
    return url
  }
  let str = ''
  for (const key in querys) {
    str += `&${key}=${querys[key]}`
  }
  return url.indexOf('?') !== -1 ? url + str : url + '?' + str.substring(1)
}

export const scrollTitle = text => {
  let timerId
  const loopTitle = () => {
    clearTimeout(timerId)
    document.title = text.substring(1, text.length) + text.substring(0, 1)
    text = document.title.substring(0, text.length)
    timerId = setTimeout(loopTitle, 500)
  }
  loopTitle()
}
