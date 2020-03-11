import {Observable, RemoteData} from '/js/src/index.js';

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
    this.data = RemoteData.notAsked();
    this.requestedTimes = 0;
  }

  /**
   * Method to make an HTTP Request for data
   * @return {JSON}
   */
  async getData() {
    this.data = RemoteData.loading();
    this.requestedTimes++;

    this.notify();

    const {result, ok} = await this.model.loader.get(`/api/getData`);
    if (!ok) {
      this.data = RemoteData.failure(result);
    } else {
      this.data = RemoteData.success(result);
    }
    this.notify();
  }
}