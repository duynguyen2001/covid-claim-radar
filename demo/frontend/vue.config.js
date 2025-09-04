module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/covid-claim-radar/'
    : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null
  }
}
