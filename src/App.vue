<template lang="pug">
  #app
    Header
    Content
</template>

<script>
import Header from "./components/Header";
import Content from "./components/Content";

export default {
  name: "app",
  components: {
    Header,
    Content
  }
};
</script>

<style lang="scss">
#app {
  //font-family: "Avenir", Helvetica, Arial, sans-serif;
  //font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', HiraginoCustom, 'Hiragino Kaku Gothic ProN', YuGothic, 'Yu Gothic Medium', Meiryo, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
