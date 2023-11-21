const {WebSocketMessage} = require('@aliceo2/web-ui');
const log = new (require('@aliceo2/web-ui').Log)('Application');

/**
 * Gateway for all Application calls
 */
class ApplicationService {
  constructor() {
  }

  /**
   * Method to send back data about the project
   * @param {Request} req 
   * @param {Response} res 
   */
  getData(req, res) {
    const data = {
      name: 'MyWebUI Project',
      version: 0.1,
      author: 'Batman'
    };

    res.status(200);
    res.json(data);
  }
}

module.exports = ApplicationService;
