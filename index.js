const path = require('path');
const config = require('./config.js');
const random = require('./lib/random.js')
const {ApplicationService} = require('./lib/ApplicationService.js');
const {WebSocket, WebSocketMessage} = require('@aliceo2/web-ui');
const {HttpServer} = require('@aliceo2/web-ui');

const app = new ApplicationService();

const http = new HttpServer(config.http, config.jwt, config.oAuth);
http.addStaticPath(path.join(__dirname, 'public'));

http.get('/data', async (req, res) => {
    // Introduce a fake lag
    await new Promise(r => setTimeout(r, 300));

    // Sometimes, fake a failure
    const fail = random.randomIntFromInterval(1, 5) == 5
    if (fail) {
        res.send(418);
        return;
    }

    // Otherwise, return as normal
    const data = app.getData()
    res.status(200);
    res.json(data);
})

const ws = new WebSocket(http);
const wsTimer = setInterval(() => ws.broadcast(
    new WebSocketMessage()
        .setCommand('random-num')
        .setPayload({num: random.randomIntFromInterval(1, 100)})
        .setBroadcast()
    ), 1000   
);