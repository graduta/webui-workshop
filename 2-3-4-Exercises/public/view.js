import {h, switchCase} from '/js/src/index.js';

/**
 * Main view layout
 * @param {object} model - representing current application state
 * @return {vnode} application view to be drawn according to model
 */
export default (model) => [
  h('.flex-column.absolute-fill', [
    header(),
    content()
  ])
];

/**
 * Top header of the page
 * @param {object} model
 * @return {vnode}
 */
const header = () =>
  h('.p2.shadow-level2.level2', {
    style: 'display: flex; justify-content: center'
  }, 'Welcome to your home page');

/**
 * Page content
 * @param {object} model
 * @return {vnode}
 */
const content = () => h('', 'Add your content here');
