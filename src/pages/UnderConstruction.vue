<template>
  <Article :title="$route.name">
    <div class="not-found">
      <h1 class="under-construction">Under Construction</h1>
      <h1 class="comming-soom">Coming Soon</h1>
    </div>
  </Article>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Article from "../components/Article/Article.vue";

@Component({
  components: {
    Article
  }
})
export default class UnderConstruction extends Vue {}
</script>

<style scoped lang="scss">
.not-found {
  padding: 3rem;
  text-align: center;
  background: rgb(246, 216, 73);
  text-transform: uppercase;

  .under-construction {
    display: inline-block;
    padding: 0 0.75em;
    color: rgb(246, 216, 73);
    background: rgb(0, 0, 0);
  }
}
</style>
