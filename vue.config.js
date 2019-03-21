const path = require('path')
module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('postcss-px2rem')()]
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
