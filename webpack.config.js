const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/frontend/src/index.jsx`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: `${__dirname}/app/frontend/static/frontend`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin()],
    usedExports: true,
    sideEffects: true
  }
};
