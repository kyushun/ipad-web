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
html,
body,
#app {
  margin: 0;
  height: 100%;
  width: 100%;
}

body {
  cursor: url('./assets/cursor.png'), auto;
  color: #333;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #111;
}
</style>
