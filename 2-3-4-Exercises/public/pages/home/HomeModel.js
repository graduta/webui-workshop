import {Observable, RemoteData} from '/js/src/index.js';

/**
 * Model representing handlers for the homePage.js
 */
export class HomeModel extends Observable {
  /**
   * @param {Object} model - root model of the application
   */
  constructor(model) {
    super();
    this.model = model;

    this._userName = '';
    this._data = RemoteData.notAsked();
  }

  async fetchData() {
    this._data = RemoteData.loading();
    this.notify();

    const {result, ok} = await this.model.loader.get(`/api/info/WEB-UI`);
    if (!ok) {
      this._data = RemoteData.failure(result);
    } else {
      this._data = RemoteData.success(result);
    }
    this.notify();
  }

  /**
   * Getter for returning the username of the user, or a default message if missing
   * @return {string}
   */
  get userName() {
    return this._userName === '' ? 'No username identified' : this._userName;
  }

  /**
   * Setter to update the value of the username
   * @param {string} username 
   */
  set userName(username) {
    console.log('aici')
    this._userName = username;
    this.notify();
  }

  /**
   * Getter for returning a remote data object with information fetched from server
   * @return {RemoteData}
   */
  get data() {
    return this._data;
  }
}