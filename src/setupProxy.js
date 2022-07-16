const { createProxyMiddleware: proxy } = require('http-proxy-middleware')

const api = require('../proxy/api')
const login = require('../proxy/login')

module.exports = app => {
  api(app, proxy), login(app, proxy)
}
