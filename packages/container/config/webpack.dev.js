const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const Dotenv = require('dotenv-webpack');
//const apiURL = require('dotenv').config();
// const Dotenv = require('dotenv-webpack');
//const apiUrl = process.env.API_URL;
//console.log(apiURL);

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8010/',
  },
  devServer: {
    port: 8010,
    historyApiFallback: true,
  },
  plugins: [
   //new Dotenv(),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8011/remoteEntry.js',
        auth: 'auth@http://localhost:8012/remoteEntry.js',
        dashboard: 'dashboard@http://localhost:8013/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
  }),
  new Dotenv()
  ],
};

module.exports = merge(commonConfig, devConfig);
