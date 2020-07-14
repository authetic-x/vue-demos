import {BaseRouter} from './base'

export default class HashRouter extends BaseRouter {
  constructor(list) {
    super(list)
    this.handler()
    window.addEventListener('hashchange', e => {
      this.handler()
    })
  }

  getState() {
    const hash = location.hash
    return hash ? hash.slice(1) : '/'
  }

  handler() {
    this.render(this.getState())
  }

  getUrl(path) {
    let href = location.href
    let i = href.indexOf('#')
    let base = i !== -1 ? href.slice(0, i) : href
    return base + '#' + path
  }

  push(path) {
    location.hash = path
  }

  replace(path) {
    location.replace(this.getUrl(path))
  }

  go (n) {
    window.history.go(n)
  }
}