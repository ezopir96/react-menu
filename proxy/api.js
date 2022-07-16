module.exports = (app, proxy) => 
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:9000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
module.exports = (app, proxy) => 
    app.use(
      '/api',
      proxy({
        target: 'http://localhost:9000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      })
    )