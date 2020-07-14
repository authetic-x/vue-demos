import {BaseRouter} from './base'

export default class HistoryRouter {
  constructor(list) {
    super(list)
    this.handler()
    window.addEventListener('popstate', e => {
      this.handler()
    })
  }

  getState() {
    const path = location.pathname
    return path ? path : '/'
  }

  handler() {
    this.render(this.getState())
  }

  push(path) {
    // 不会触发popstate事件
    history.pushState(null, null, path)
    this.handler()
  }

  replace(path) {
    // 不会触发popstate事件
    history.replaceState(null, null, path)
    this.handler()
  }

  go(n) {
    history.go(n)
  }
}