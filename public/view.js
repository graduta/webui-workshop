import {h, switchCase} from '/js/src/index.js';
import homeContent from './home/homePage.js';
import aboutContent from './about/aboutPage.js';
/**
 * Main view layout
 * @param {object} model - representing current application state
 * @return {vnode} application view to be drawn according to model
 */
export default (model) => [
  h('.flex-column.absolute-fill', [
    header(model.router.params.page),
    content(model)
  ])
];

/**
 * Top header of the page
 * @param {object} model
 * @return {vnode}
 */
const header = (page) =>
  h('.p2.shadow-level2.level2', {
    style: 'display: flex; justify-content: center',
    class: 'success'
  }, `Welcome to your ${page} page`);

/**
 * Page content
 * @param {object} model
 * @return {vnode}
 */
const content = (model) =>
  switchCase(model.router.params.page, {
    home: homeContent,
    about: aboutContent
  })(model);