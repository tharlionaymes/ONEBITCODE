const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
  },
  mode: 'development',
  module:{
    rules:[{
      //expressão regular
      test: /\.css$/, //Pega apenas os que terminam com ".css"
      use:["style-loader", "css-loader"]
    }]
  }
}
