<template lang="pug">
  .jobs.content-wrapper
    .content
      .header
        | Job History
      .section
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
        .images
          img(src="/img/server.jpg")
      .section
        .images
          img.no-shadow(src="/img/logos/pixiv.svg")
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
  background-image: url("/img/bg/mauve.jpg");

  .section {
    display: flex;
    align-items: center;

    & + .section {
      margin-top: 10rem;
    }

    .images {
      flex: 1;
      width: 50%;
      text-align: center;

      img {
        max-width: 80%;
        max-height: 300px;
        border-radius: 12px;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);

        &.no-shadow {
          box-shadow: none;
        }
      }
    }

    .descript {
      flex: 1;
      max-width: 50%;

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
