const withImages = require('next-images');
const withPWA = require('next-pwa');

module.exports = withImages(
  withPWA({
    reactStrictMode: true,
    webpack(config, options) {
      return config;
    },
    pwa: {
      dest: 'public',
    },
  }),
);
