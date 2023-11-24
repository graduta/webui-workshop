import {h} from '/js/src/index.js';

/**
 * Method to build a table based on a give JSON
 * @param {JSON} data
 * @return {vnode}
 */
export const jsonToTable = (data) =>
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