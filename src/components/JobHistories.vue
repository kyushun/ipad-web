<template lang="pug">
  .jobs.content-wrapper
    .content
      .header
        | Job History
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
            | 2016/10 - 2019/05
          .detail
            | ピクシブ株式会社 クリエーター事業部 にてアルバイトとして勤務
            br
            | クリエイター支援サービス pixivFANBOX・pixivFACTORY・BOOTH の開発・運用に携わる
            br
            | フロントエンドエンジニアとして新機能の実装やバグの修正などを行っている
</template>

<script>
export default {
  name: "JobHistories"
};
</script>

<style scoped lang="scss">
.jobs {
  color: $color-black !important;

  .section {
    position: relative;
    margin: 0 2rem;
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

    &.bg-urban::before {
      background-image: url("/img/bg/mauve.jpg");
    }

    &.bg-pixiv::before {
      background-image: url("/img/bg/light-sky-blue.jpg");
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
