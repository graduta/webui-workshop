const mocha = require('mocha')
const sinon = require('sinon')
const assert = require('assert');
const {ApplicationService} = require('../lib/ApplicationService.js');

describe('ApplicationService', function () {
  describe('initialisation', function () {
    it('should not error on initialisation', function () {
      assert.doesNotThrow(() => new ApplicationService());
    });
  });
});

describe('ApplicationService', function () {
  describe('#getData()', function () {
    it('should return the correct data', function () {
      const expectedData = {
        name: 'MyWebUI Project',
        version: 0.1,
        author: 'Batman'
      };
      const actualData = (new ApplicationService()).getData();

      assert.deepEqual(expectedData, actualData);
    });
  });
});
