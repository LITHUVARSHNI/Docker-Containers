// ambassador/server.js
const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer();

const backendUrl = 'http://backend:3001'; // Service name from docker-compose.yml

app.all('*', (req, res) => {
    proxy.web(req, res, { target: backendUrl });
});

const PORT = 80;
app.listen(PORT, () => {
    console.log(`Ambassador is running on http://localhost:${PORT}`);
});
