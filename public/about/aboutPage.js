import {h} from '/js/src/index.js';
import {iconPerson} from '/js/src/icons.js'

const aboutTable = (model) => {
  const details = model.getDetails();
  return h(
    'table',
    [
      h('tr', Object.keys(details).map(key => h('th', `${key}`))),
      h('tr', Object.values(details).map(value => h('td', `${value}`)))
    ]
  )
}

const homeLink = (router) => h('', 
  h('a', {
    onclick: (e) => {
      router.handleLinkEvent(e);
    }, href: '?page=home'
  }, 
  h('li', iconPerson()))
)

export const aboutContent = (model, router) => [
  homeLink(router),
  aboutTable(model)
]