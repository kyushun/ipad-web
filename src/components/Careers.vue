<template lang="pug">
  .careers.content-wrapper
    .content
      .header
        | Career
      .section.bg-tdu
        .descript
          .title
            | 東京電機大学 未来科学部 情報メディア学科
          .year
            | 2016/04 -
          .detail
            | 将来、Web を通じたインタラクティブメディアが注目されると考え Web 開発を中心に学習を始める。
            br
            | 同年10月より実社会で通用する技術者になるべく、株式会社アーバンフューネスにて SE のアルバイトを始める。
            br
            | 2019年4月にはさらなる一歩を踏み出すべく大学を半年間休学し、ピクシブ株式会社にて正社員と同等の勤務日数・仕事を遂行。
            br
            | 2021年3月 卒業予定。
      .section.bg-urban
        .descript
          .title
            | 株式会社アーバンフューネス IT事業部
          .year
            | 2016/10 - 2019/05
          .detail
            | 株式会社アーバンフューネスコーポレーション にて社内インフラエンジニアとして約2年半、アルバイト勤務
            br
            | 主として社内システムの保守・開発を行っていた
            br
            | 新規システムの導入をする際には検討、比較からテスト、導入までを対応
            br
            | また、オンプレミスで管理していたサーバーの保守や大規模な入れ替えを複数回チームリーダーとして牽引した
      .section.bg-pixiv
        .descript
          .title
            | ピクシブ株式会社 クリエーター事業部
          .year
            | 2019/05 -
          .detail
            | ピクシブ株式会社 クリエーター事業部 にてアルバイトとして勤務
            br
            | クリエイター支援サービス pixivFANBOX・pixivFACTORY・BOOTH の開発・運用に携わる
            br
            | フロントエンドエンジニアとして新機能の実装やバグの修正などを行っている
</template>

<script>
export default {
  name: "Careers"
};
</script>

<style scoped lang="scss">
.careers {
  color: $color-black !important;

  .section {
    position: relative;
    padding: 2rem 2rem;
    display: flex;

    @include mq(sm) {
      padding: 2.5rem 4rem;
    }

    & + .section {
      margin-top: 3rem;
    }

    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 100%;
      width: 100%;
      content: "";
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 12px;
      box-shadow: $shadow-medium;
      z-index: -1;
    }

    &.bg-tdu::before {
      background-image: url("~@/assets/img/bg/tdu_bg.jpg");
    }

    &.bg-urban::before {
      background-image: url("~@/assets/img/bg/urban_bg.jpg");
    }

    &.bg-pixiv::before {
      background-image: url("~@/assets/img/bg/pixiv_bg.jpg");
    }

    .descript {
      flex: 1;
      max-width: 100%;

      .title {
        font-size: 1.5rem;
        font-weight: 900;
      }

      .year {
        color: #fafafa;
        font-size: 1.15rem;
      }
    }
  }
}
</style>
