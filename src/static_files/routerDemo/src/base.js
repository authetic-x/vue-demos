const ELEMENT = document.querySelector('#page')

export class BaseRouter {
  constructor(list) {
    this.list = list
  }

  render(state) {
    let route = this.list.find(route => route.path === state)
    route = route ? route : this.list.find(route => route.path === '*')
    ELEMENT.innerText = route.component
  }
}