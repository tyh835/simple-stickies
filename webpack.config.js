const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
  ],
  entry: ['@babel/polyfill', `${__dirname}/app/frontend/src/index.jsx`],
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
        test: /\.(sa|sc|c)ss$/,
        use: [
           MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
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
  }
};
