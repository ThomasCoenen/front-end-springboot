//const { createProxyMiddleware } = require('http-proxy-middleware');

import { createProxyMiddleware } from 'http-proxy-middleware';


module.exports = function (app) {
    app.use(
        createProxyMiddleware(["/api", "/otherApi"], { target: "http://localhost:8080" })
    );
};