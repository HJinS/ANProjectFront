require("dotenv").config();

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: process.env.SERVER_IP,
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })

    );
};