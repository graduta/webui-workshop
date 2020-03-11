const path = require('path');
const config = require('./config.js');

const {HttpServer, WebSocket, WebSocketMessage} = require('@aliceo2/web-ui');

const http = new HttpServer(config.http, config.jwt, config.oAuth);
http.addStaticPath(path.join(__dirname, 'public'));

http.get('/getData', getData);

const ws = new WebSocket(http);

setInterval(function() {
  console.log('Sending data')
  const message = new WebSocketMessage();
  message.command = 'random';
  message.payload = (Math.floor(Math.random() * 100)).toString();
  ws.broadcast(message);
}, 5000);


/**
 * Method to send back data about the project
 * @param {Request} req 
 * @param {Response} res 
 */
function getData(req, res) {
  const data = {
    name: 'MyWebUI Project',
    version: 0.1,
    author: 'Batman'
  };
  res.status(200).json(data);
}