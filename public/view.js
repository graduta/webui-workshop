import {h, switchCase} from '/js/src/index.js';
import {homeContent} from './home/homePage.js';
import {aboutContent} from './about/aboutPage.js';

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
  h('.p2.shadow-level2.level2#myheader', {
    style: 'display: flex; justify-content: center;'
  }, `Welcome to ${model.router.params.page}`);

/**
 * Page content
 * @param {object} model
 * @return {vnode}
 */
const content = (model) => switchCase(model.router.params.page, {
  home: () => homeContent(model.home, model.router),
  about: () => aboutContent(model.about, model.router),
},  () => h('p', 'print default'))();
