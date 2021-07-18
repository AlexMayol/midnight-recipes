const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['unsplash.com', 'images.unsplash.com'],
  },
}
