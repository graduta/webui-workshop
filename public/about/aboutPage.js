import {h} from '/js/src/index.js';
import {iconPerson} from '/js/src/icons.js'

const aboutTable = (model) => {
  const details = model.about.getDetails();
  return h(
    'table',
    [
      h('tr', Object.keys(details).map(key => h('th', `${key}`))),
      h('tr', Object.values(details).map(value => h('td', `${value}`)))
    ]
  )
}

const homeLink = (model) => h('', 
  h('a', {
    onclick: (e) => {
      model.router.handleLinkEvent(e);
    }, href: '?page=home'
  }, 
  h('li', iconPerson()))
)

export const aboutContent = (model) => [
  homeLink(model),
  aboutTable(model)
]