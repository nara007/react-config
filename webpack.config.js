const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const ROOR_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOR_PATH, 'app');
const BUILD_PATH = path.resolve(ROOR_PATH, 'build');

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'app.jsx'),
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3001',
      },
    },
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: APP_PATH,
      use: ['babel-loader'],
    },
    {
      test: /\.jsx?$/,
      include: APP_PATH,
      use: ['eslint-loader'],
    },
    ],
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'React-App',
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

};
