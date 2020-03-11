import {h, info, iconPerson} from '/js/src/index.js';

export default (model) =>
  [
    createButtonGroup(model),
    h('.w-100', model.home.getUserName())
  ];

/**
 * Method to create a button group
 * @param {Object} model
 * @return {vnode}
 */
const createButtonGroup = (model) =>
  h('.w-100', [
    h('.btn-group', [
      h('button.btn.btn-primary', {
        onclick: () => model.router.go('?page=about'),
        title: 'About'
      }, [
        'About', ' ', info()
      ]),
      h('button.btn.btn-default', {
        onclick: () => model.home.setUserName('GeorgeR')
      }, iconPerson())
    ])
  ]);