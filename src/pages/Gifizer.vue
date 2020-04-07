<template>
  <Article title="Gifizer" class="gifizer">
    <div class="gifizer-container">
      <h1 class="gifizer-title">Gifizer</h1>
      <h2 class="gifizer-subtitle">Faster and simpler gif converter</h2>
      <a
        class="gifizer-gh gifizer-button"
        href="https://github.com/kyushun/gifizer"
        target="_blank"
      >
        <figure class="gifizer-gh-icon"></figure>
        <p class="gifizer-gh-text">Github</p>
      </a>
      <a
        class="gifizer-dl gifizer-button"
        href="https://github.com/kyushun/gifizer/releases/latest"
        target="_blank"
      >
        <figure class="gifizer-dl-icon"></figure>
        <p class="gifizer-dl-text">Download</p>
      </a>
      <figure class="gifizer-image"></figure>
    </div>
  </Article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Article from '../components/Article/Article.vue';

@Component({
  components: {
    Article
  }
})
export default class Gifizer extends Vue {}
</script>

<style scoped lang="scss">
.gifizer {
  height: 100%;
  overflow-x: hidden;

  a:link,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  &-container {
    position: relative;
    margin: 0 auto;
    max-width: 980px;
    width: 90%;

    @include mq(md) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  &-title {
    padding-top: 100px;
    font-size: 48px;
  }

  &-subtitle {
    font-size: 21px;
  }

  &-image {
    position: absolute;
    top: 0;
    right: -300px;
    width: 980px;
    height: calc(784 / 1224 * 980px);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url('../assets/gifizer/gifizer.png');

    @include mq(md) {
      position: static;
      width: 100%;
      height: 0;
      padding-top: calc(784 / 1224 * 100%);
    }
  }

  &-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 40px;
    border-radius: 40px;
    border: solid 3px #000;
    transition: box-shadow 0.25s;
  }

  &-gh,
  &-dl {
    &-icon {
      display: inline-block;
      margin-right: 10px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }

    &-text {
      display: inline;
      font-size: 21px;
      font-weight: 600;
    }
  }

  &-gh {
    margin-top: 30px;

    &-icon {
      width: 20px;
      height: calc(64 / 64 * 20px);
      background-image: url('../assets/gifizer/github.png');
    }
  }

  &-dl {
    margin-top: 15px;

    &-icon {
      width: 15px;
      height: calc(64 / 64 * 15px);
      background-image: url('../assets/gifizer/dl.png');
    }
  }
}
</style>
