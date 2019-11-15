/**
 *格式化时间
 *yyyy-MM-dd hh:mm:ss
 */
const formatDate = (time, fmt) => {
  if (time === undefined || '') {
    return
  }
  const padLeftZero = (str) => {
    return ('00' + str).substr(str.length)
  }
  const date = new Date(time)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

/*
 * 隐藏用户手机号中间四位
 */
const hidePhone = (phone) => {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

const judNull = (opt) => {
  if (!opt) {
    return '0'
  } else {
    return opt
  }
}

export { formatDate, hidePhone, judNull }
