# Introductory NodeJS exercises

### 0. Setup and Helpful links
- https://github.com/AliceO2Group/WebUi/tree/dev/Framework#backend-guide
- https://expressjs.com/en/api.html#req
- https://expressjs.com/en/api.html#res

1. Fork the repository and clone your forked version locally.
2. Go to the directory of the project: `cd webui-workshop/0-Introductory-Exercises`
3. Install the project dependencies via: `npm ci`. More dependencies will be installed during the exercises

### 1. Deploy a WebUI HTTP Server
By making use of `@aliceo2/webui` library, use the provided HTTP server to deploy a:
- static `Hello World` HTML page.
- API `GET` route with a `Hello World!` message.

### 2. Add a JWT configuration
All ALICE user interfaces are restricted based on JsonWebTokens (JWT). Look through the implementation of the earlier used server, and add a token configuration that is to expire after `30s`.

Demonstrate that the configuration set works by proving the token is not valid anymore on the API endpoint.

### 3. Add a WebSocket server
To your index file, add a WebSocket server which handles a command `hello`. 

Once the server receives a message on `hello`, it should:
- print to the console the message received
- reply to the client with a `hello-back` command.

The client, in turn should print the `hello-back` response.

<sub>Hint: Similar to HTTP server, the WebSocket server will expect a token.</sub> 

### 4. Use the Logger library
Replace your `console.log` by the logger library provided by the `@aliceo2/webui`