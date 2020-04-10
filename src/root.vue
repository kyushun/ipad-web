<template>
  <div id="app" :style="style">
    <IPad></IPad>
  </div>
</template>

<script lang="ts">
import 'ress';
import { Component, Vue } from 'vue-property-decorator';
import IPad from './pages/IPad.vue';
import * as Const from './lib/Const';

@Component({
  components: {
    IPad
  }
})
export default class Root extends Vue {
  private style = {
    '--ipad-screen-size': Const.ipadScreenSize + 'px',
    '--app-icon-size': Const.appIconSize + 'px',
    '--app-icon-margin': Const.appIconMargin + 'px',
    '--app-icon-radius': Const.appIconRadius + 'px'
  };
}
</script>

<style lang="scss">
/* noto-sans-jp-regular - japanese_latin */
@font-face {
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  src: local('Noto Sans Japanese Regular'), local('NotoSansJapanese-Regular'),
    url('/fonts/noto-sans-jp-v25-japanese_latin-regular.woff2') format('woff2');
}
/* noto-sans-jp-700 - japanese_latin */
@font-face {
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  src: local('Noto Sans Japanese Bold'), local('NotoSansJapanese-Bold'),
    url('/fonts/noto-sans-jp-v25-japanese_latin-700.woff2') format('woff2');
}

html,
body,
#app {
  margin: 0;
  height: 100%;
  width: 100%;
}

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, Roboto, 'Noto Sans JP',
    sans-serif;
  cursor: url('./assets/cursor.png'), auto;
  color: #333;

  &.no-scroll {
    overflow: hidden;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #111;
}

#loader {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 50000;
  transition: opacity 0.75s;

  &.loaded {
    opacity: 0;

    .loader-image {
      opacity: 0;
    }
  }

  .loader-image {
    width: 75px;
    height: 75px;
    background-image: url('/loader.svg');
    background-repeat: no-repeat;
    background-size: contain;
    transition: opacity 0.2s;
  }
}
</style>
