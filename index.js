const path = require('path');
const config = require('./config.js');

const {HttpServer} = require('@aliceo2/web-ui');

const http = new HttpServer(config.http, config.jwt, config.oAuth);
http.addStaticPath(path.join(__dirname, 'public'));

http.get('/data', async (req, res) => {
    await new Promise(r => setTimeout(r, 1000));
    const data = {
        name: 'MyWebUI Project',
        version: 0.1,
        author: 'Batman'
      };
  
      res.status(200);
      res.json(data);
})