const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    uniqueName: "shell"
  },
  plugins: [
    new ModuleFederationPlugin({
      shared: {
        "@angular/core": {singleton: true, strictVersion: true},
        "@angular/common": {singleton: true, strictVersion: true},
        "@angular/router": {singleton: true, strictVersion: true}
      },
      remotes: {
        "mfe1": "mfe1@http://localhost:3001/remoteEntry.js",
      }
    })
  ]
}
