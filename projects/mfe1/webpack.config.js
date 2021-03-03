const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    uniqueName: "mfe1"
  },
  plugins: [
    new ModuleFederationPlugin({
      shared: {
        "@angular/core": {singleton: true, strictVersion: true},
        "@angular/common": {singleton: true, strictVersion: true},
        "@angular/router": {singleton: true, strictVersion: true}
      }
    })
  ]
}
