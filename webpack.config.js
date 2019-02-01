module.exports = {
  entry: `${__dirname}/app/frontend/src/index.jsx`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
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
