import {h} from '/js/src/index.js';
import {iconPerson} from '/js/src/icons.js'

const dataNotAskedWarning = () => h('p', "Click to fetch data.")
const dataLoadingWarning = () => h('.loader')
const dataFailureWarning = (error) => h('p', `${error}`)

const aboutTable = (model) => {
  const remoteData = model.getData();

  if (remoteData.isNotAsked()) return dataNotAskedWarning();
  if (remoteData.isLoading()) return dataLoadingWarning();
  if (remoteData.isFailure()) return dataFailureWarning(remoteData.payload);

  const data = remoteData.payload;
  return h(
    'table',
    [
      h('tr', Object.keys(data).map(key => h('th', `${key}`))),
      h('tr', Object.values(data).map(value => h('td', `${value}`)))
    ]
  )
}

const fetchDataButton = (model) => {
  return h('button', {
    onclick: () => model.fetchDataFromServer(), 
    disabled: model.getData().isLoading()
  }, 'Fetch Data')
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