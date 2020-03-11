# Development Process
- [Development Process](#development-process)
  - [Unit Tests](#unit-tests)
    - [Create a service class](#create-a-service-class)
    - [Create a test file](#create-a-test-file)
    - [Configure tests](#configure-tests)
  - [Integration Tests](#integration-tests)
    - [Install dependencies](#install-dependencies)
    - [Create a test file](#create-a-test-file-1)
    - [Add checks for your UI components](#add-checks-for-your-ui-components)
  - [Code Coverage](#code-coverage)
  - [GitHub Actions](#github-actions)
  - [Contributing to AliceO2Group/WebUI](#contributing-to-aliceo2groupwebui)

## Unit Tests
### Create a service class
* Create a new folder `lib` at the root of your project
* In `lib`, create a new file `ApplicationService.js`
* Within the newly created file, create a class and add a method which will return the JSON with data about the application from `index.js`
* Update `index.js` to make use of this new class and method
  
### Create a test file
* Create a new folder `test` at the root of your project
* Create a new file `mocha-application-service.js`
* Write a test which checks correct initialization of the service
* Write a test which checks the method added, returns the expected JSON
  
### Configure tests
* Add command for running mocha tests in your `package.json` file
```
"test": "mocha --exit test/**/mocha-*"
```
* Install `mocha` as a dev dependency:
```
npm install --save-dev mocha
```
* Install `sinon` as a dev dependency:
```
npm install --save-dev sinon
```
* Import both new dependencies into your test file;
* Run tests via: `npm run test`

## Integration Tests
### Install dependencies
* Install puppeteer:
```
npm install --save-dev puppeteer
```
### Create a test file
* Create a new file `mocha-index.js` within your test directory
* In the `before` step:
  * make use of [puppeteer](https://github.com/puppeteer/puppeteer) to setup a test-browser
  * make use of [spawn library](https://nodejs.org/api/child_process.html) to run your server
* Add a test which checks that it successfully connected to your application

### Add checks for your UI components
* Add multiple tests to check if: 
  * Buttons were successfully created
  * Buttons have as `classList` the elements you set
  * Buttons behavior works as expected

## Code Coverage
* Install [nyc](https://istanbul.js.org/) as a dependency
```
npm install --save-dev nyc
```
* Add a new command in your `package.json` file: 
```
"coverage": "nyc npm run test"
```
* Run command as: `npm run coverage`

## [GitHub Actions](https://help.github.com/en/actions)
* Create 2 new directories at the root of your project: `.github/workflows`
* Create a new file, `.gh-action.yml`, in the newly created directory `.github/workflows`
* Add a criteria for workflow to be triggered on each push to your branch
* Add 2 new jobs:
  * Run tests on a `macOS-latest` machine
  * Run tests on a `ubuntu-18.04` machine
* Commit & Push your changes;
* Go to "Actions" in the github repository and follow the progress of your workflow on your branch

## Contributing to AliceO2Group/WebUI
* In order to make contributions to the framework, on top of an admin review, we have putin place multiple automated checks such as ESLint and minimum CodeCoverage for the newly added changes;
* More details can be found here: [Development Environment](https://github.com/AliceO2Group/WebUi/blob/dev/Framework/docs/guide/devel.md#development-environment)
  