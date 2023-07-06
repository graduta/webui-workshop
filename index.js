const path = require('path');
const config = require('./config.js');
const random = require('./lib/random.js')

const {HttpServer} = require('@aliceo2/web-ui');

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
    const data = {
        name: 'MyWebUI Project',
        version: 0.1,
        author: 'Batman'
    };

    res.status(200);
    res.json(data);
})