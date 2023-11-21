import {h} from '/js/src/index.js';

/**
 * Main view layout
 * @return {vnode} application view to be drawn according to model
 */
export default () => [
  h('.flex-column.absolute-fill', [
    header(),
    content()
  ])
];

/**
 * Top header of the page
 * @return {vnode}
 */
const header = () =>
  h('.p2.shadow-level2.level2', {
    style: 'display: flex; justify-content: center'
  }, 'Welcome to your home page');

/**
 * Page content
 * @return {vnode}
 */
const content = () => h('', 'Add your content here');
