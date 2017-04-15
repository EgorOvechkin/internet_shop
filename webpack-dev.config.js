const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath:'/build/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('develop')
      }
    })
  ],
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    rules: [ {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: [ 'react-hot-loader', 'babel-loader' ]
    }, {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }, {
      test: /\.(png|jpg)$/,
      use: 'file-loader?name=images/icons/[name].[ext]?[hash]'
    }]
  }
}
