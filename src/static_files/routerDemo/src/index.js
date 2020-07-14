import hashRouter from './hashRouter'
import historyRouter from './historyRouter'
import routeList from './routerList'

const MODE = 'hash'

class WebRouter {
  constructor({mode = 'hash', routeList}) {
    this.router = mode === 'hash' ? new hashRouter(routeList) : new historyRouter(routeList)
  }

  push(path) {
    this.router.push(path)
  }

  replace(path) {
    this.router.replace(path)
  }

  go(n) {
    this.router.go(n)
  }
}

const webRouter = new WebRouter({
  mode: MODE,
  routeList
})

document.querySelector('.btn-list').addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    const url = e.target.dataset.url
    !url.indexOf('/') ? webRouter.push(url) : webRouter.go(url)
  }
})

document.querySelector('.replace-btn').addEventListener('click', e => {
  webRouter.replace('/')
})