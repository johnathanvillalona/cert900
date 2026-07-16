// Standard Expo Babel config. The "@" alias is handled in metro.config.js
// (resolver.resolveRequest) so path separators normalize correctly on Windows.
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
  }
}
