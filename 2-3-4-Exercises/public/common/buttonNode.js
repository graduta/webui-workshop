import {h} from '/js/src/index.js';

/**
 * @typedef {ButtonDefinition}
 * 
 * @param {string | Array<String|vnode>} labelContent - name to display on button
 * @param {string} title - title to display on button on hover effect
 * @param {Array<string>} classList - list of style classes to be applied
 * @param {function} onclick - action to execute when clicking the button
 */

const buttonNode = (buttonDefinition) => {
  const {title = '', labelContent, onclick, classList = []} = buttonDefinition;
  return h('button.btn.', {
    classList: classList.join(' '),
    onclick: () => onclick(),
    title
  }, labelContent);
}

export {buttonNode};