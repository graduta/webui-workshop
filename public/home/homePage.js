import {h} from '/js/src/index.js';
import {info} from '/js/src/icons.js'

const setUserNameBtn = (model) => h('button', {
  onclick: () => {
    console.log(model.getUserName())
    model.setUserName("new name")
  }
},"Set username")

const aboutLink = (router) => h('', 
  h('a', {
    onclick: (e) => {
      router.handleLinkEvent(e);
    }, href: '?page=about'
  }, 
  h('li', info()))
)

export const homeContent = (model, router) => {
  return [
    aboutLink(router),
    setUserNameBtn(model),
    h('p', `Username: ${model.getUserName()}`),
  ]
}
