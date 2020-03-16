import {Observable} from '/js/src/index.js';

/**
 * Model representing handlers for the homePage.js
 */
export default class Home extends Observable {
  /**
   * @param {Object} model
   */
  constructor(model) {
    super();
    this.model = model;

    this.userName = '';
  }

  /**
   * Method to return the current username as a string
   * @return {string}
   */
  getUserName() {
    return this.userName === '' ? 'No username identified' : this.userName;
  }

  /**
   * Method to set the username
   * @param {string} name 
   */
  setUserName(name) {
    this.userName = name;
    this.notify();
  }
}