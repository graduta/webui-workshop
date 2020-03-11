# Workshop: Back-end (30 mins)
- [Workshop: Back-end (30 mins)](#workshop-back-end-30-mins)
  - [Configure nodemon](#configure-nodemon)
  - [Add HTTP Requests](#add-http-requests)
  - [ConsulConnector.js](#consulconnectorjs)
  - [RemoteData](#remotedata)
  - [Web Sockets](#web-sockets)
    - [WebSockets Server side](#websockets-server-side)
    - [WebSockets Client Side](#websockets-client-side)
  
## Configure nodemon
* Install it as a dev dependency: `npm install --save-dev nodemon`
  
* Add command for running [nodemon](https://nodemon.io/) in your package.json file: 
```
dev: "nodemon --watch index.js --watch lib --watch config.js index.js"
```
* Usage: `npm run dev`
* This will enable us to make changes to the server without having to restart it as it will be done automatically

## Add HTTP Requests 
By making use of the documentation: [HTTP AJAX](https://github.com/AliceO2Group/WebUi/blob/dev/Framework/docs/guide/async-calls.md#frontend---async-calls-ajax) (15 min)  

* Add an `HTTP GET` method in `api.js` to retrieve a mocked JSON with information about your application
* Use the newly created http method in `About.js`
* Method should update your data variable to contain the result of the request
* Use `Debug` tools from your browser and check network calls to see if data is received correctly

* See if the table in `about` page is getting updated on press of button
* Make use of `this.notify()` in your `getData()` method from Class About
  
## ConsulConnector.js
* (Demo Only) Use `ConsulConnector.js` to retrieve data about framework

## RemoteData
* Make use of [RemoteData](https://github.com/AliceO2Group/WebUi/blob/dev/Framework/docs/guide/async-calls.md#remotedata) to display information to the user when request is in different states:
  * NotAsked
  * Loading
  * Error
  * Successful

## Web Sockets
### [WebSockets Server side](https://github.com/AliceO2Group/WebUi/blob/dev/Framework/docs/guide/websockets.md#backend---websocket-module)
* Add a websocket on the server side, `api.js`, and bind it to the server
* Use it to send every 5 seconds a random number as a message under a certain command

### [WebSockets Client Side](https://github.com/AliceO2Group/WebUi/blob/dev/Framework/docs/guide/websocket-client.md#frontend---websocket-client)
* Make use of `WebSocketClient.js` and add it to your `Model.js`;
* Add a new component in the header of `view.js` with the random number received via websocket
* Use DebugTools to watch all numbers sent via webSockets