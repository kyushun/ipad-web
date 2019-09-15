const webpack = require("webpack");

module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(options => {
      options[0].minify = {
        removeComments: true,
        collapseWhitespace: false,
        removeAttributeQuotes: false,
        collapseBooleanAttributes: false,
        removeScriptTypeAttributes: false
      };
      return options;
    });
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        APP_DEPLOYED_AT: JSON.stringify(new Date())
      })
    ]
  },
  css: {
    loaderOptions: {
      scss: {
        data: `@import "~@/style/_variables.scss";`
      }
    }
  }
};
