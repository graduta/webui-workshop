// Your code goes here

const {HttpServer, WebSocket, WebSocketMessage, Log} = require('@aliceo2/web-ui');

const logger = new Log('workshop-2023');

const http = new HttpServer({
  port: 8080
}, {
  expiration: '60s'
});

http.addStaticPath('public');

http.get('/hello-world', (_, res) => {
  res.status(200).json({message: 'Hello World!'});
}, {public: true});

http.get('/hello-private', (_, res) => {
  res.status(200).json({message: 'Hi, there'})
});

const ws = new WebSocket(http);

ws.bind('hello', (message) => {
  console.log('Server received:', message);
  logger.info('test')
  return new WebSocketMessage().setCommand('hello-back').setPayload("hello back");
});