const path = require('path')
module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      postcss: {
        plugins: [require('postcss-px2rem')],
        remUnit: 75
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [path.resolve(__dirname, './src/styles/stylus/common.styl')]
    }
  }
}
