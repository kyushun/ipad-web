<template>
  <Article :title="$route.name">
    <div class="not-found">
      <figure class="not-found-image"></figure>
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
export default class UnderConstruction extends Vue {}
</script>

<style scoped lang="scss">
.not-found {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ddd;

  &-image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 75px;
    height: 75px;
    background-image: url('../assets/404.svg');
    transform: translate(-50%, -50%);
  }
}
</style>
