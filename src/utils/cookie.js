export function getCookie(c_name) {
  if(document.cookie && document.cookie.indexOf(c_name) !== -1) {
    const nameStr = document.cookie.split(';')[0]
    return nameStr ? nameStr.split('=')[1] : ''
  }
  return ''
}

export function setCookie(c_name, value, expires) {
  let date = new Date()
  date.setSeconds(date.getSeconds + expires)
  console.log(date.toUTCString())
  document.cookie = `${c_name}=${escape(value)};Expires=${date.toUTCString()}`
  console.log('set cookie suc: ', document.cookie)
}

export function deleteCookie(c_name) {
  setCookie(c_name, '', -1)
}