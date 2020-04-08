const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const withImages = require('next-images');

module.exports = withImages({
  webpack(config, options) {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }
    return config;
  },
  target: 'serverless',
});
