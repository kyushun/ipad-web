<template>
  <router-link to="/" class="indicator-link">
    <div class="indicator" @click="click">
      <div class="icon"></div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class AppIcon extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  @Emit() click(): void {}
}
</script>

<style scoped lang="scss">
// z-index: 10000
.indicator {
  position: fixed;
  padding: 10px;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  transform-origin: center;
  width: 30px;
  height: 30px;
  border: solid 4px #222;
  border-radius: 50%;
  transition: all 0.25s;
  box-sizing: content-box;
  z-index: 10000;

  &:hover {
    width: 35px;
    height: 35px;
  }

  &-link {
    cursor: inherit;
  }

  .icon {
    height: 100%;
    width: 100%;
    background-image: url('../assets/icons/home.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
