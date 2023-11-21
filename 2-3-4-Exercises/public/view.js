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
    header(model),
    content(model)
  ])
];

/**
 * Top header of the page
 * @param {object} model
 * @return {vnode}
 */
const header = (model) =>
  h('.p2.shadow-level2.level2', {
    style: 'display: flex; justify-content: center',
    class: 'success'
  }, `Welcome to your ${model.router.params.page} page. Your lucky number is: ${model.random}`);

/**
 * Page content based on the location of the page
 * @param {object} model
 * @return {vnode}
 */
const content = (model) =>
  switchCase(model.router.params.page, {
    home: homeContent,
    about: aboutContent
  })(model);
