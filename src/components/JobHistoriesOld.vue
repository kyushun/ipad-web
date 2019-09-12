<template lang="pug">
  .history
    .list-group
      .list-item(v-for="(item, index) in items" :class="{active:showIndex == index}" v-on:click="showIndex = index" :key="item.title")
        b {{ item.title }}
    transition-group(class="details" name="details" tag="div")
      .item(v-for="(item, index) in items" v-if="showIndex == index" :key="item.detail")
        .description(v-html="item.detail")
        .logos(v-if="item.logos")
          img(v-for="logo in item.logos" :src="logo")
</template>

<script>
export default {
  name: "JobHistory",
  data: function() {
    return {
      showIndex: 0,
      items: [
        {
          title: "社内インフラ",
          detail: `
            2016/10 - 2019/05<br />
            ㈱アーバンフューネスコーポレーション にて社内インフラエンジニアとしてアルバイト<br />
            <br />
            主として社内システムの保守・開発を行っていた<br />
            新規システムの導入をする際には検討、比較からテスト、導入までを対応<br />
            <br />
            また、オンプレミスで管理していたサーバーの保守や大規模な入れ替えを複数回チームリーダーとして牽引した
          `
        },
        {
          title: "toB クラウドサービス",
          detail: `
            ㈱アーバンフューネスコーポレーション にて開発・運用されていた toB クラウドサービス「Musubys」の開発に携わる
          `,
          logos: [
            "/img/logos/php.svg",
            "/img/logos/laravel.svg",
            "/img/logos/jquery.svg",
            "/img/logos/aws.svg"
          ]
        },
        {
          title: "クリエイター支援サービス",
          detail: `
            2019/06 - 現在<br />
            ピクシブ㈱ クリエーター事業部 にてアルバイトとして勤務<br />
            クリエイター支援サービス pixivFANBOX・pixivFACTORY・BOOTH の開発・運用に携わる<br />
            <br />
            フロントエンドエンジニアとして新機能の実装やバグの修正などを行っている
          `,
          logos: [
            "/img/logos/php.svg",
            "/img/logos/ruby.svg",
            "/img/logos/rails.svg",
            "/img/logos/es6.svg",
            "/img/logos/ts.svg",
            "/img/logos/react.svg",
            "/img/logos/vue.svg"
          ]
        },
        {
          title: "会議室一覧表示サイネージシステム",
          detail: `
            2017/01 - 2018/04<br />
            ㈱アーバンフューネスコーポレーション にて<br />
            社内の会議室の使用状況を一覧で見ることができるシステムがほしいという要望があがる<br />
            <br />
            個人 (フルスタック) 制作として 会議室一覧表示サイネージシステム「Roomee」を制作
          `,
          logos: [
            "/img/logos/es6.svg",
            "/img/logos/nodejs.svg",
            "/img/logos/react.svg",
            "/img/logos/socketio.svg"
          ]
        },
        {
          title: "ベストパートナー賞 受賞",
          detail: `
            2017/10<br />
            株式会社アーバンフューネスコーポレーション より「ベストパートナー賞」を受賞<br />
            <br />
            <div class="txt-img">
              アーバンフューネスでは毎年、決算期にその年度で最も優れた功績を残した数名の社員に特別賞与付きの表彰がなされる<br />
              通常アルバイトはこの表彰の対象とはならないが、この年は直々に社長より私の功績をたたえていただき受賞となった
              <img src="./img/best-partner.jpg" />
            </div>
          `
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.history {
  display: flex;
  flex-wrap: wrap;
  @include mq() {
    flex-wrap: nowrap;
  }

  .list-group {
    width: 100%;
    @include mq() {
      width: 30%;
    }

    .list-item {
      cursor: pointer;
      margin-bottom: 1rem;
      padding: 1rem 2rem;
      border: solid 1px #e6e7eb;
      border-radius: 4px;
      transition: border-color 0.25s;

      &:hover {
        border-color: #40a9ff;
      }

      &.active {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        &:hover {
          border-color: #e6e7eb;
        }
      }
    }
  }

  .details {
    position: relative;
    margin: 0 0.25rem;
    width: 100%;
    @include mq() {
      margin: 0 5rem;
      width: 60%;
    }

    .item {
      position: relative;

      .logos {
        display: flex;
        margin-top: 1rem;

        img {
          margin-right: 1.5rem;
          height: 2rem;
        }
      }

      .caution {
        position: relative;
        margin: 1rem 0 0 auto;
        padding-left: 0.4rem;
        font-size: 0.5rem;

        &::before {
          position: absolute;
          left: 0;
          content: "*";
        }
      }
    }
  }
}

.details-enter-active {
  animation: details-in 0.5s;
}

.details-leave-active {
  position: absolute;
  animation: details-out 0.25s;
}

@keyframes details-in {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes details-out {
  0% {
    position: absolute;
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    position: absolute;
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>

<style lang="scss">
.txt-img {
  display: flex;
  flex-wrap: wrap;

  @include mq(sm) {
    flex-wrap: nowrap;
  }

  img {
    height: auto;
    max-width: 90vw;
  }
}
</style>
