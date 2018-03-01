const path = require('path');

module.exports = {
    entry: {
        bundle: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'}
            ]
        }]
    }
};