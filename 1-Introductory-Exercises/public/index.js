 // Little hack to get token from URL
 const url = new URL(window.location);
 const token = url.searchParams.get('token');
 
 // Connect to WebSocket
 let webSocketConnector = new WebSocket('ws://localhost:8080?token=' + token);
 
 // Send message when connection open
 webSocketConnector.onopen = function () {
   console.log('Connected');
   webSocketConnector.send('{"command":"hello", "payload":"hello, world!", "token": "' + token + '"}');
 };
 // Send message when connection open
 webSocketConnector.onmessage = function (message) {
   console.log(message)
 };
 