module.exports = {
  outputDir: "docs",
  css: {
    loaderOptions: {
      scss: {
        data: `@import "~@/style/_variables.scss";`
      }
    }
  }
};
