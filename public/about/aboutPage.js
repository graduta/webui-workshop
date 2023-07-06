import {h} from '/js/src/index.js';
import {iconPerson} from '/js/src/icons.js'

const aboutTable = (model) => {
  const data = model.getData();
  return h(
    'table',
    [
      h('tr', Object.keys(data).map(key => h('th', `${key}`))),
      h('tr', Object.values(data).map(value => h('td', `${value}`)))
    ]
  )
}

const fetchDataButton = (model) => {
  return h('button', {onclick: () => model.fetchDataFromServer()}, 'Fetch Data')
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
  fetchDataButton(model),
  aboutTable(model),
]