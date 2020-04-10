<template>
  <div class="about">
    <Article title="About me">
      <div class="about__me">
        <p class="about__me-unv">Tokyo Denki University</p>
        <h2 class="about__me-name">Yushun Kotani</h2>
      </div>
      <div class="about__iam">
        <div class="about__iam-section">
          <h2 class="about__iam-header">I am...</h2>
          <ul class="about__iam-list">
            <li>
              Belong to Web Engineering Laboratory at Tokyo Denki University.
            </li>
          </ul>
        </div>
        <div class="about__iam-section">
          <h2 class="about__iam-header">I was...</h2>
          <ul class="about__iam-list">
            <li>
              A system engineer at Urban Funes Corp. and developed the BtoB
              cloud service for three years.
            </li>
            <li>
              A web engineer at pixiv Inc. and developed several web services.
            </li>
          </ul>
        </div>
      </div>
    </Article>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Article from '../components/Article/Article.vue';

@Component({
  components: {
    Article
  }
})
export default class About extends Vue {}
</script>

<style scoped lang="scss">
.about {
  &__me {
    padding: 6rem;
    white-space: nowrap;

    @include mq() {
      padding: 4rem 1rem;
    }

    &-unv {
      font-size: 28px;
      font-weight: 700;
      text-align: center;

      @include mq() {
        font-size: 19px;
      }
    }

    &-name {
      margin-top: 0.4em;
      font-size: 96px;
      font-weight: 700;
      line-height: 1;
      text-align: center;

      @include mq() {
        font-size: 40px;
      }
    }
  }

  &__iam {
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    @include mq() {
      padding: 0 1rem;
      flex-wrap: wrap;
    }

    &-section {
      width: 100%;
    }

    &-header {
      font-size: 28px;
      line-height: 1.5;
    }

    &-list {
      //padding-left: 1em;

      li {
        list-style-type: none;
        line-height: 1.5;
      }
    }
  }
}
</style>
