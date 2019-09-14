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
  css: {
    loaderOptions: {
      scss: {
        data: `@import "~@/style/_variables.scss";`
      }
    }
  }
};
