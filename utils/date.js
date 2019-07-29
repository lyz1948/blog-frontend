export const formatTime = (date, fmt) => {
  date = new Date(date)
  if (/(Y+)/i.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  const o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`, 'gi').test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      )
    }
  }
  return fmt
}

// 格式化时间
export function formatPassTime(time, option) {
  const d = new Date(time)
  const now = Date.now()
  const diff = (now - d) / 1000

  if (diff < 30) {
    return 'now'
  }
  if (diff < 3600) {
    return Math.ceil(diff / 60) + 'minutes ago'
  }
  if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + 'hours ago'
  }
  if (diff < 3600 * 24 * 2) {
    return 'one day ago'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

export function parseTime(time, fmt) {
  if (arguments.length === 0) {
    return null
  }

  fmt = fmt || '{y}-{m}-{d} {h}:{i}:{s}'

  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }

  const fmtObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }

  const timeStr = fmt.replace(/{y|m|d|h|i|s|a+}/g, (res, key) => {
    let val = fmtObj[key]
    if (key === 'a') {
      return ['一', '二', '三', '四', '五', '六', '日'][val - 1]
    }
    if (res.length > 0 && val < 10) {
      val = '0' + val
    }
    return val || 0
  })
  return timeStr
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
