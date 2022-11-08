const {
  disableEsLint,
  override,
  addWebpackAlias,
  addWebpackResolve
} = require('customize-cra')
const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = override(
  disableEsLint(),
  addWebpackAlias({
    src: path.resolve(__dirname, 'src/'),
    '@': path.resolve(__dirname, 'src/')
  }),
  addWebpackResolve({ plugins: [new TsconfigPathsPlugin()] })
)
