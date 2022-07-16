module.exports = (app, proxy) => 
  app.use(
    '/fetch',
    proxy({
      target: 'http://localhost:9090',
      changeOrigin: true,
      pathRewrite: {
        '^/fetch': ''
      }
    })
  )
module.exports = (app, proxy) =>
    app.use(
      '/fetch',
      proxy({
        target: 'http://localhost:9090',
        changeOrigin: true,
        pathRewrite: {
          '^/fetch': ''
        }
      })
    )
