import {h, iconHome, iconDataTransferDownload} from '/js/src/index.js';
import {createBrowserFetcher} from 'puppeteer';

export default (model) =>
  h('.w-100', [
    createButtonGroup(model),
    model.about.data.match({
      NotAsked: () => h('.warning', 'Data? What Data?'),
      Loading: () => h('', 'Loading'),
      Success: (data) => createTable(data),
      Failure: (error) => h('.danger', error),
    })
  ]);

/**
 * Method to create a group of buttons
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
    h('tbody', Object.keys(data).map((key) => createRow(key, data[key])))
  ]);

/**
 * Method to build a row based on key and value from data
 * @param {string} columnName 
 * @param {JSON} data 
 */
const createRow = (rowName, value) =>
  h('tr', [
    h('th', rowName),
    h('td', value)
  ]);