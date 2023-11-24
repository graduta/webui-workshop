/**
 * @class
 * Controller class for retrieving information about the framework that is being developed
 */
class FrameworkInfoController {

  /**
   * @constructor
   * Constructor for the FrameworkInfoController
   * @param {FrameworkInfoService} infoService - service to be used to retrieve data of the framework
   */
  constructor(infoService) {

    this._infoService = infoService;
  }

  /**
   * Handler to verify request and respond to the user
   * @param {Request} req - HTTP request ExpressJS object
   * @param {Response} res - HTTP response ExpressJS object
   * @return {function}
   */
  async getDataHandler(req, res) {
    const {name} = req.params;
    if (!name) {
      res.status(422).json({message: 'Invalid name provided'});
      return;
    }
    try {
      const data = await this._infoService.getData(name);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(502).json({message: 'service unavailable'});
    }
  }
}

module.exports = {FrameworkInfoController};