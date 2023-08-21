const path = require('path');

module.exports = {

  entry: "./src/index.js", // Your entry point file

  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output filename
  },
  resolve: {
    fallback: {
      "zlib": false,
    "querystring": require.resolve("querystring-es3"),
    "path": require.resolve("path-browserify"),
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
      https: require.resolve('https-browserify'),
      url: require.resolve('url/'),
      os: require.resolve('os-browserify/browser'),
      util: require.resolve('util/'),
    },
  },
};
