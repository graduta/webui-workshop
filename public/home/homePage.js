import {h} from '/js/src/index.js';
import {info} from '/js/src/icons.js'

// const goToAboutPageBtn = (model) => h('button', {
//     title: "About",
//     onclick: () => {
//         console.log("Takes the user to the about page");
//         model.router.go('/?page=about');
//     },
//     href: '?page=about',
//     }, info())

const setUserNameBtn = (model) => h('button', {
  onclick: () => {
    console.log(model.home.getUserName())
    model.home.setUserName("new name")
  }
},"Set username")

const aboutLink = (model) => h('', 
  h('a', {
    onclick: (e) => {
      model.router.handleLinkEvent(e);
    }, href: '?page=about'
  }, 
  h('li', info()))
)

export const homeContent = (model) => {
  return [
    aboutLink(model),
    setUserNameBtn(model),
    h('p', `Username: ${model.home.getUserName()}`),
  ]
}
