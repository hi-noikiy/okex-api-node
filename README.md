# okex-api-node
okex websocket api for node.js. Bitcoin, Ether and EOS trading

A Node.js reference implementation of the bitfinex API

Official documentation at [], incluce other version for java/pytho

## Installation
```bash
   npm i okex-api-node
```

```js
const OKEX = require('okex-api-node');
const okex = new OKEX({
    apiKey: '',
    secretKey: '',
    ws: {}
});

```