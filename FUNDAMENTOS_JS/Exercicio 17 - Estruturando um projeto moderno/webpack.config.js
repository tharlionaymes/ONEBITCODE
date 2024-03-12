const path = require('path')

module.exports = {
    entry: {
        index:"./src/index.js"
    },
    mode:"development",
    module:{
        rules:[{
            test: /\.css$/,
            use:["style-loader", "css-loader"],
        }, 
        
        {   test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }]
    },
    output:{
        filename: "[name].min.js"
    }
}