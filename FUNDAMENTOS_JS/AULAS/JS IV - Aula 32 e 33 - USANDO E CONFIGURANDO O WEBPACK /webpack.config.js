const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    hello: './src/hello.js' //outro ponto de entrada
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].min.js'
  },
  mode: 'development'
}
