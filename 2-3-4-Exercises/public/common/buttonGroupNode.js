import {h} from '/js/src/index.js';
import { buttonNode } from './buttonNode.js';

/**
 * Method to create a virtual node containing a group of buttons
 * @param {Array<ButtonDefinition>} buttonsDefinitions - list of buttons to display in group
 * @return {vnode}
 */
export const buttonGroupNode = (buttonsDefinitions) =>
  h('.w-100', [
    h('.btn-group', [
      buttonsDefinitions.map((buttonDefinition) => buttonNode(buttonDefinition))
    ])
  ]);