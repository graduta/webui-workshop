const path = require('path');
const ApplicationService = require('./lib/ApplicationService.js');
const config = require('./config.js');

const {HttpServer, WebSocket, WebSocketMessage} = require('@aliceo2/web-ui');

const application = new ApplicationService();

const http = new HttpServer(config.http, config.jwt, config.oAuth);
http.addStaticPath(path.join(__dirname, 'public'));

http.get('/getData', (req, res) => application.getData(req, res));

const ws = new WebSocket(http);

setInterval(function() {
  console.log('Sending data')
  const message = new WebSocketMessage();
  message.command = 'random';
  message.payload = (Math.floor(Math.random() * 100)).toString();
  ws.broadcast(message);
}, 5000);
