<template>
  <div
    class="app"
    @click="isInternalLink && click($event)"
    :style="{ 'background-image': this.image ? `url(${image})` : null }"
  >
    <router-link v-if="link && isInternalLink" :to="link" class="app-link">
    </router-link>
    <a
      v-if="link && !isInternalLink"
      :href="link"
      target="_blank"
      class="app-link"
    ></a>
    <p class="name"><slot></slot></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component
export default class AppIcon extends Vue {
  @Prop() private link?: string;
  @Prop() private image?: string;
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  @Emit() click(e: MouseEvent): void {}

  get isInternalLink() {
    return this.link ? !/^https?:\/\//.test(this.link) : false;
  }
}
</script>

<style scoped lang="scss">
// z-index: 5
.app-link {
  cursor: inherit;
  position: absolute;
  left: 0;
  top: 0;
  width: var(--app-icon-size);
  height: var(--app-icon-size);
  border-radius: var(--app-icon-radius);
  z-index: 5;
}

.app {
  position: relative;
  margin: var(--app-icon-margin);
  width: var(--app-icon-size);
  height: var(--app-icon-size);
  border-radius: var(--app-icon-radius);
  background-color: #eee;
  background-image: url('../assets/icons/default-icon.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 1;
  transition: transform 1s, filter 0.25s;

  &:hover {
    filter: brightness(80%);
  }

  .name {
    position: absolute;
    margin: 0;
    bottom: -1.75em;
    left: 50%;
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 600;
    text-shadow: 0px 0px 11px rgba(0, 0, 0, 0.2);
    white-space: nowrap;
    transform: translateX(-50%);
    pointer-events: none;
  }
}
</style>
