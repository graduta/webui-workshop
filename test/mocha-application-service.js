const mocha = require('mocha')
const sinon = require('sinon')
const assert = require('assert');
const {ApplicationService} = require('../lib/ApplicationService.js');

const expectedApplicationServiceData = {
  name: 'MyWebUI Project',
  version: 0.1,
  author: 'Batman'
};

describe('ApplicationService', function () {
  describe('initialisation', function () {
    it('should not error on initialisation', function () {
      assert.doesNotThrow(() => new ApplicationService());
    });
  });

  describe('#getData()', function () {
    it('should return the correct data', () => {
      const actualData = (new ApplicationService(expectedApplicationServiceData)).getData();
      assert.deepEqual(expectedApplicationServiceData, actualData);
    });
  });
});
