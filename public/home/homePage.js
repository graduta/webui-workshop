import {h} from '/js/src/index.js';
import {info} from '/js/src/icons.js'

const usernameForm = (model) => h('form', 
  {onsubmit: (e) => {
    e.preventDefault(); 
    model.saveUserName()}}, 
  [
  h("label.label", "Enter a username"),
  h("input.input[type=text][placeholder=username]", {
    oninput: (e) => model.setUserName(e.target.value),
    value: model.getUserName()
  }),
  h("button.button[type=submit]", 'submit')],
)

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
    usernameForm(model),
    setUserNameBtn(model),
    h('p', `Username: ${model.getUserName()}`),
  ]
}
