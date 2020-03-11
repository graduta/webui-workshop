import {Observable} from '/js/src/index.js';

/**
 * Model representing About
 */
export default class About extends Observable {
  /**
   * @param {Object} model
   */
  constructor(model) {
    super();
    this.model = model;
    this.data = {};
    this.requestedTimes = 0;
  }

  /**
   * Method to send back data about the project
   * @return {JSON}
   */
  getData() {
    this.requestedTimes++;
    this.data = {
      name: 'MyWebUI Project',
      version: 0.1,
      author: 'Batman'
    };
    this.notify();
  }
}