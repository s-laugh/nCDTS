const path = require('path');

module.exports = {
    mode : 'development',
    entry: {
      cdtsnext : ['./src/cdtsnext.js', 'babel-polyfill'], 
      democomponents : './src/DemonstrationComponents/democomponents.js'},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        // contentBase: [path.join(__dirname, "test/html"), path.join(__dirname, "dist"), path.join(__dirname, "test"), path.join(__dirname, "test/json"), path.join(__dirname, "test/js")],
        contentBase: path.join(__dirname, "test"),
        openPage: 'html/index.html'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
          }
        ]
      }
};