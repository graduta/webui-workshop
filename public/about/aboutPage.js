import {h, iconHome, iconDataTransferDownload} from '/js/src/index.js';

export default content = (model) =>
  h('.w-100', [
    createButtonGroup(model),
    createTable(model.about.data)
  ]);

/**
 * Method to create a button group
 * * button to navigate to home page
 * * button to get data about the project
 * @param {Object} model
 * @return {vnode}
 */
const createButtonGroup = (model) =>
  h('.btn-group.w-100', [
    h('button.btn.btn-success', {
      onclick: () => model.router.go('?page=home')
    }, [
      iconHome(), ' ', 'Home'
    ]),
    h('button.btn.btn-primary', {
      onclick: () => model.about.getData()
    }, [
      'Info', ' ', iconDataTransferDownload()
    ]),
  ]);

/**
 * Method to build a table based on a give JSON
 * @param {JSON} data
 * @return {vnode}
 */
const createTable = (data) =>
  h('table.table.shadow-level2', {style: 'white-space: pre-wrap;'}, [
    h('tbody',
      Object.keys(data).map((columnName) => h('tr', [
        h('th', columnName),
        h('td', data[columnName])
      ]))
    ),
  ]);
