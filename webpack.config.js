const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      https: require.resolve('https-browserify'),
      querystring: require.resolve('querystring-es3'),
      url: require.resolve('url/'),
      stream: require.resolve('stream-browserify'),
      os: require.resolve('os-browserify/browser'),
      path: require.resolve('path-browserify'),
      util: require.resolve('util/'),
    },
  },
};
