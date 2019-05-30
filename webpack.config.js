const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    cdtsnext: ['./src/CDTS/cdtsnext.ts', '@babel/polyfill'],
    democomponents: './src/DemonstrationComponents/democomponents.ts',
    wetGcweb: './src/wet-gcweb-components/wetGcweb.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: '[name]'
  },
  devServer: {
    // contentBase: [path.join(__dirname, "test/html"), path.join(__dirname, "dist"), path.join(__dirname, "test"), path.join(__dirname, "test/json"), path.join(__dirname, "test/js")],
    contentBase: path.join(__dirname, 'src/html'),
    openPage: 'splash.html'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true
    }),
    new CopyPlugin([
      {
        from: 'src/html/*.html',
        to: 'html/[name].[ext]',
        toType: 'template'
      }
    ])
  ]
}
