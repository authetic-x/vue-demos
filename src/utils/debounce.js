/**
 * {防抖函数}
 *
 * @param {事件处理函数} fn
 * @param {延迟处理时间} delay
 * @returns {包装函数}
 */
export default function debounce(fn, delay) {
  let timeout = null

  // 这里写箭头函数在vue使用会拿不到this值
  return function(...args) {
    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}