import {h, switchCase} from '/js/src/index.js';

/**
 * Main view layout
 * @param {object} model - representing current application state
 * @return {vnode} application view to be drawn according to model
 */
export default (model) => [
  h('.flex-column.absolute-fill', [
    header(model),
    content(model)
  ])
];

/**
 * Top header depending on the query string handler by router model
 * @param {object} model
 * @return {vnode}
 */
const header = (model) => h('', [
  switchCase(model.router.params.page, {
    home: () => h('.w-100.bg-white.flex-row.p2.shadow-level2.level2', {
      style: 'display: flex; justify-content: center'
    }, 'Welcome to your home page')
  })(model)
]);

/**
 * Page content depending on the query string handler by router model
 * @param {object} model
 * @return {vnode}
 */
const content = (model) => [
  switchCase(model.router.params.page, {
    home: () => h('', 'Add your content here')
  })(model)
];
