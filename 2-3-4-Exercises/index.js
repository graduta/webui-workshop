const path = require('path');
const config = require('./config.js');

const {HttpServer, WebSocket, WebSocketMessage} = require('@aliceo2/web-ui');
const {FrameworkInfoController} = require('./lib/controllers/FrameworkInfoController.js');
const {FrameworkInfoService} = require('./lib/services/FrameworkInfoService.js');

const http = new HttpServer(config.http);
const ws = new WebSocket(http);

const infoService = new FrameworkInfoService();
const infoController = new FrameworkInfoController(infoService);

http.addStaticPath(path.join(__dirname, 'public'));
http.get('/info/:name', infoController.getDataHandler.bind(infoController));

setInterval(function() {

  console.log('Sending data')
  const message = new WebSocketMessage();
  message.command = 'random';
  message.payload = (Math.floor(Math.random() * 100)).toString();
  ws.broadcast(message);

}, 5000);
