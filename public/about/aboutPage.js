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

const homeButtonOnClick = () => {
  console.log("Takes the user back to home")
  model.router.go('?page=home');
}

const homeButton = h(
  'button', {
    title: "Home",
    onclick: homeButtonOnClick
  }, 
  iconPerson()
)

export const aboutContent = (model) => [
  homeButton,
  aboutTable(model)
]