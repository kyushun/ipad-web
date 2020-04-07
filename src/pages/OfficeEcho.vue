<template>
  <Article class="oe" title="office echo">
    <section class="oe__header">
      <figure class="oe__header-logo" ref="headerTransitionFlag"></figure>
      <div class="oe__header-viewer">
        <figure
          class="oe__header-table"
          :style="{ width: headerImgWidth + '%' }"
        ></figure>
      </div>
    </section>
    <section class="oe__viewer">
      <h2 class="oe__viewer-title headline">
        予定にない急な来客、 <br />あなたは対応できますか？
      </h2>
      <p class="oe__viewer-content">
        「いまどこの会議室が空いているのだろう」と、いちいち Google
        カレンダーを開いて確認する必要はもうありません。 Office Echo では GSuite
        (Google カレンダー)
        と連携しリアルタイムで会議室の使用状況を確認することができます。急いでいるときでもすぐに確認できるように配色や表示される情報の抽出にもこだわっています。会議室選びに時間を掛ける時代はもう終わりました。
      </p>
      <div class="oe__viewer-image-container">
        <div class="oe__viewer-image-content">
          <div class="oe__viewer-caption-container">
            <figure class="oe__viewer-caption-next"></figure>
            <figure class="oe__viewer-caption-ui"></figure>
            <figure class="oe__viewer-caption-info"></figure>
          </div>
          <figure class="oe__viewer-image"></figure>
        </div>
      </div>
    </section>
    <section class="oe__table">
      <h2 class="oe__table-title headline">
        デスクの上でも、スマホでも、<br />場所の制限はありません
      </h2>
      <div class="oe__table-summary">
        <h3 class="oe__table-sub-title sub-headline">
          テーブルモードを<br />用意しました
        </h3>
        <p class="oe__table-content">
          このモードでは会議室の使用状況だけでなく、天気や電車の遅延情報などを確認することができます。オフィス版の
          Google Nest Hub や Echo Show だと思って使ってみてください。
        </p>
      </div>
      <div class="oe__table-image-container">
        <div class="oe__table-image-content">
          <div class="oe__table-sp-container">
            <figure class="oe__table-sp-image"></figure>
            <figure class="oe__table-sp-caption"></figure>
          </div>
          <div class="oe__table-tab-container">
            <figure class="oe__table-tab-image"></figure>
            <figure class="oe__table-tab-caption"></figure>
          </div>
        </div>
      </div>
    </section>
    <section class="oe__price">
      <h2 class="oe__price-title headline">Everything is Free.</h2>
      <p class="oe__price-content">
        Office Echo はすべての機能を完全無料で提供いたします。 またプログラムは
        OSSとして公開する予定ですのでセキュリティの観点や機能拡張の観点からも安心してお使いいただけます。
      </p>
    </section>
    <section class="oe__footnote">
      <ul>
        <li>提供・公開日時は未定です</li>
        <li>
          Goole カレンダー、GSuite、Google Nest Hub は、Google LLC
          の商標または登録商標です。
        </li>
        <li>Echo Show は、Amazon LLCの商標です。</li>
        <li>画像は開発中のものです。</li>
        <li>仕様は予告なく変更することがあります。</li>
      </ul>
    </section>
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
export default class OfficeEcho extends Vue {
  private headerImgWidth = 0;

  mounted() {
    setTimeout(() => {
      const $flag = this.$refs.headerTransitionFlag as HTMLElement;
      const observer = new IntersectionObserver(
        changes => {
          this.headerImgWidth = changes[0].isIntersecting ? 0 : 100;
        },
        {
          root: null,
          rootMargin: `-${$flag.offsetHeight + 55}px 0px 0px`
        }
      );
      observer.observe($flag);
    }, 650);
  }
}
</script>

<style scoped lang="scss">
.oe {
  overflow: hidden;

  .headline {
    font-size: 64px;
    line-height: 1.2;

    @include mq(md) {
      font-size: 48px;
    }

    @include mq(sp) {
      font-size: 28px;
    }
  }

  .sub-headline {
    font-size: 48px;
    line-height: 1.2;

    @include mq(md) {
      font-size: 36px;
    }

    @include mq(sp) {
      font-size: 24px;
    }
  }

  &__header {
    &-logo {
      margin: 80px auto 0;
      width: 350px;
      height: calc(576 / 2230 * 350px);
      background-repeat: none;
      background-size: 100% auto;
      background-image: url("../assets/oe/oe_logo.png");

      @include mq(sp) {
        margin: 40px auto 0;
        width: 300px;
        height: calc(576 / 2230 * 300px);
      }
    }

    &-image-container {
      position: relative;
    }

    &-viewer {
      position: relative;
      margin: 80px auto 0;
      width: 980px;
      height: calc(1312 / 1708 * 980px);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      background-image: url(../assets/oe/oe_viewer.png);

      @include mq(md) {
        width: 90%;
        height: 0;
        padding-top: calc(1312 / 1708 * 90%);
      }

      @include mq(sp) {
        margin: 40px auto 0;
      }
    }

    &-table {
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top left;
      background-image: url(../assets/oe/oe_table.png);
      transition: width 1s;
    }
  }

  &__viewer {
    margin-top: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include mq(sp) {
      margin-top: 80px;
    }

    &-title {
      text-align: center;
    }

    &-content {
      margin-top: 1em;
      width: 90%;
      max-width: 700px;
      font-size: 17px;
    }

    &-image {
      &-container {
        margin-top: 60px;

        @include mq(sp) {
          margin-top: 0;
          width: 90%;
        }
      }

      &-content {
        position: relative;
        right: 30%;

        @include mq(md) {
          right: 35%;
        }

        @include mq(sp) {
          right: 0;
        }
      }
    }

    &-caption {
      &-container {
        position: absolute;
        top: 0;
        right: -200px;
        display: flex;
        height: 830px;
        flex-direction: column;
        justify-content: space-evenly;

        @include mq(md) {
          height: 560px;
        }

        @include mq(sp) {
          position: relative;
          margin: 20px 0 10px;
          left: 0;
          height: auto;
          flex-direction: row;
          flex-wrap: wrap;
        }

        figure {
          background-repeat: no-repeat;
          background-position: center center;

          @include mq(sp) {
            margin: 5px 0;
          }
        }
      }

      &-next {
        width: 108px;
        height: 46px;
        background-size: 108px 46px;
        background-image: url(../assets/oe/caption-next.png);
      }

      &-ui {
        width: 141px;
        height: 46px;
        background-size: 141px 46px;
        background-image: url(../assets/oe/caption-ui.png);
      }

      &-info {
        width: 135px;
        height: 44px;
        background-size: 135px 44px;
        background-image: url(../assets/oe/caption-info.png);
      }
    }

    &-image {
      width: 1080px;
      height: calc(1312 / 1708 * 1080px);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      background-image: url(../assets/oe/oe_viewer.png);

      @include mq(md) {
        width: 730px;
        height: calc(1312 / 1708 * 730px);
      }

      @include mq(sp) {
        width: 100%;
        height: 0;
        padding-top: calc(1312 / 1708 * 100%);
      }
    }
  }

  &__table {
    display: flex;
    margin-top: 160px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include mq(sp) {
      margin-top: 80px;
    }

    &-title {
      text-align: center;
    }

    &-summary {
      display: flex;
      align-items: center;
      margin-top: 80px;
      width: 90%;
      max-width: 980px;

      @include mq(sp) {
        display: block;
        margin-top: 40px;
      }
    }

    &-sub-title {
      width: 420px;

      @include mq(md) {
        width: 320px;
      }
    }

    &-content {
      flex: 1;
    }

    &-image {
      &-container {
        margin-top: 40px;

        @include mq(sp) {
          width: 90%;
        }
      }

      &-content {
        position: relative;
        left: 35%;

        @include mq(md) {
          left: 40%;
        }

        @include mq(sp) {
          left: 0;
        }

        figure {
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center center;
        }
      }
    }
    &-sp {
      &-container {
        position: absolute;
        left: -320px;
        top: calc(830px / 2 - 550px / 2);

        @include mq(sp) {
          position: static;
        }
      }

      &-image {
        width: 280px;
        height: calc(2140 / 1076 * 280px);
        background-image: url(../assets/oe/oe_sp.png);

        @include mq(sp) {
          margin: auto;
        }
      }

      &-caption {
        margin: 1em auto 0;
        width: 96px;
        height: 21px;
        background-image: url(../assets/oe/caption-sp.png);
      }
    }

    &-tab {
      &-container {
        @include mq(sp) {
          margin-top: 30px;
        }
      }

      &-image {
        width: 1080px;
        height: calc(1312 / 1708 * 1080px);
        background-image: url(../assets/oe/oe_table.png);

        @include mq(sp) {
          width: 100%;
          height: 0;
          padding-top: calc(1312 / 1708 * 100%);
        }
      }

      &-caption {
        margin: 1em auto 0;
        width: 125px;
        height: 23px;
        background-image: url(../assets/oe/caption-tab.png);

        @include mq(md) {
          margin-left: 240px;
        }

        @include mq(sp) {
          margin-left: auto;
        }
      }
    }
  }

  &__price {
    margin-top: 160px;

    @include mq(sp) {
      margin-top: 80px;
    }
    &-title {
      text-align: center;
    }

    &-content {
      margin: 0.5em auto 0;
      max-width: 700px;
      width: 90%;
      text-align: center;
    }
  }

  &__footnote {
    margin-top: 160px;
    padding: 30px;
    background-color: #eee;

    @include mq(sp) {
      margin-top: 80px;
    }

    ul {
      margin: 0 auto;
      width: 90%;
      max-width: 980px;

      li {
        padding: 2px 0;
        font-size: 9px;
        list-style: none;
      }
    }
  }
}
</style>
