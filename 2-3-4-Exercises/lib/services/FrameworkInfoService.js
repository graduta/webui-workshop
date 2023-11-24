const WEB_UI = 'WEB-UI';
const BOOKKEEPING = 'BOOKKEEPING';

/**
 * @class
 * Service for returning information on the framework service
 */
class FrameworkInfoService {
  /**
   * Method to send back data about the project
   * @param {String} name - name of the service to send data about
   * @return {Promise.<String, Error>}
   */
  async getData(name) {
    if (name === WEB_UI) {
      return {
      name: 'MyWebUI Project',
      version: 0.1,
    };
   } else if (name === BOOKKEEPING) {
    return {
      name: 'My Bookkeeping Project',
      version: 3.1,
    };
   } else {
    throw new Error('Unknown name');
   }
  }
}

module.exports = {FrameworkInfoService};
