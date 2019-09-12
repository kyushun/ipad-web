<template lang="pug">
  .roomee.content-wrapper
    .content
      .header
        | office echo
        .detail
          | フルスタック開発の会議室サイネージシステム
      .desc1
        img(src="/img/roomee/s_top.png")
        .text
          .title
            | 急な来客でも焦る必要はありません。
            br
            | office echo が今の会議室の使用状況をわかりやすく表示。お客様を長時間待たせることはもうありません。
      .t-top
        .text
          .title
            | テーブルモードでは、会議室・天気・鉄道の遅延情報が閲覧できます。
            br
            | Google Nest Hub や Amazon Echo Show のオフィス利用を想定して開発されました。
        img(src="/img/roomee/t_top.png")
    .pv
      .content
        | PV
        .video-wrapper
          .play-btn(v-if="!pvPlaying" v-on:click="playPV")
            img(src="/img/play-button.svg")
          video(poster="/img/roomee/pv-sc.jpg" src="/img/roomee/pv.mp4" v-play="pvPlaying" controlsList="nodownload")
</template>

<script>
export default {
  name: "Roomee",
  data: function() {
    return {
      pvPlaying: false
    };
  },
  methods: {
    playPV: function() {
      this.pvPlaying = true;
    }
  },
  directives: {
    play: function(el, binding) {
      if (binding.value) {
        el.play();
        el.controls = true;
      } else {
        el.pause();
        el.controls = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.roomee {
  // 共通部分
  .desc1,
  .t-top {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    @include mq() {
      flex-wrap: nowrap;
    }

    img {
      margin: 0 auto;
      max-width: 100%;
      @include mq() {
        max-width: 75%;
      }
    }

    .text {
      margin: 0 auto;
      text-align: center;
      @include mq() {
        text-align: left;
      }

      .title {
        color: rgba(0, 0, 0, 0);
        font-size: 3rem;
        font-weight: 800;
        line-height: 3.4rem;
        background-repeat: no-repeat;
        background-size: cover;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  // 個別部分
  .desc1 {
    img {
      order: 2;
      @include mq() {
        margin: 0 2rem 0 -25%;
        order: 1;
      }
    }

    .text {
      order: 1;

      .title {
        background-image: url("/img/bg/portage.jpg");
      }
    }
  }

  .t-top {
    margin-top: 10rem;

    .text {
      order: 1;

      .title {
        background-image: url("/img/bg/portage.jpg");
      }
    }

    img {
      order: 2;
      @include mq() {
        margin: 0 -25% 0 2rem;
        order: 1;
      }
    }
  }

  .pv {
    margin-top: 4rem;
    color: $color-black;
    font-size: 2.5rem;
    font-weight: 700;
    background-image: url("/img/bg/royal-heath.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    .video-wrapper {
      position: relative;

      .play-btn {
        cursor: pointer;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.75rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        border: solid 2px #409eff;
        background: white;
        opacity: 0.7;
        filter: alpha(opacity=70);
        transition: all 0.25s;
        z-index: 99;

        &:hover {
          opacity: 1;
          filter: alpha(opacity=100);
        }

        img {
          padding: 0.2rem 0 0.2rem 0.4rem;
          width: 3rem;
        }
      }

      video {
        margin-top: 0.75rem;
        width: 100%;
        border-radius: 12px;
        box-shadow: $shadow-medium;
        background: white;
      }
    }
  }
}
</style>
