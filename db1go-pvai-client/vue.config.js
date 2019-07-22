module.exports = {
    devServer: {
      port: 4200,
      proxy: {
        '^/api': {
          target: 'http://localhost:8080/',
          ws: true,
          changeOrigin: true
        }
      }
    }
  }