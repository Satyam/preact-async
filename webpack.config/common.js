const webpack = require('webpack');
const path = require('path');

const join = path.join;
const root = process.cwd();
const absPath = relative => join(root, relative);

module.exports = version => [
  'webClient',
  'webServer',
].map((bundle) => {
  const aliases = {
    _client: absPath('client'),
    _store: absPath('client/store'),
    _components: absPath('client/components'),
    _server: absPath('server'),
    _utils: absPath('client/utils'),
    react: 'preact-compat',
    'react-dom': 'preact-compat',
  };
  return {
    entry: {
      [bundle]: ['babel-polyfill', absPath({
        webClient: 'webClient/index.jsx',
        webServer: 'webServer/index.js',
      }[bundle])],
    },
    output: {
      path: absPath('bundles'),
      filename: '[name].js',
      publicPath: '/bundles/',
      chunkFilename: `${bundle}.[id].js`,
    },
    target: {
      webClient: 'web',
      webServer: 'node',
    }[bundle],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(version),
        },
        PORT: JSON.stringify(process.env.npm_package_myWebServer_port),
        HOST: JSON.stringify(process.env.npm_package_myWebServer_host),
        ROOT_DIR: JSON.stringify(root),
        BUNDLE: JSON.stringify(bundle),
      }),
    ],
    resolve: {
      alias: aliases,
      extensions: ['.js', '.jsx'],
    },
    stats: { children: false },
  };
});
