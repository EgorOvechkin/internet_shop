const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack-dev.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true },
  inline: true,
}).listen(8000, 'localhost', function (error, result) {
  if (error) {
    return console.log(error)
  }
  console.log('Listening at http://localhost:8000/')
})
