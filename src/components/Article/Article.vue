<template>
  <div class="article">
    <header class="article__header">
      <div class="article__header-title">{{ title }}</div>
    </header>
    <div class="article__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Article extends Vue {
  @Prop() private title!: string;
}
</script>

<style scoped lang="scss">
.article {
  margin: 0 auto;

  // z-index: 10000
  &__header {
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 0.5rem;
    width: 100%;
    height: 55px;
    border-bottom: solid 1px #ddd;
    background-color: rgba(245, 245, 245, 0.75);
    backdrop-filter: blur(15px);
    z-index: 10000;

    &-title {
      max-width: 980px;
      margin: 0 auto;
      font-size: 21px;
      font-weight: 700;
      line-height: 55px;
      letter-spacing: -0.5px;
    }
  }

  &__content {
    padding-top: 55px;
  }
}
</style>
