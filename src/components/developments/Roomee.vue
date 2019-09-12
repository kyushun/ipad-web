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
    .pv
      .content
        | PV
        .video-wrapper
          img.play-btn(src="/img/play-button.svg" v-if="!pvPlaying" v-on:click="playPV")
          video(poster="/img/bg/royal-heath.jpg" src="/img/roomee/pv.mp4" v-play="pvPlaying" controlsList="nodownload")
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
  .desc1 {
    display: flex;
    flex-wrap: wrap;
    @include mq() {
      flex-wrap: nowrap;
    }

    img {
      margin: 0 auto;
      max-width: 100%;
      order: 2;
      @include mq() {
        margin: 0 2rem 0 -25%;
        max-width: 75%;
        order: 1;
      }
    }

    .text {
      margin: 0 auto;
      color: $color-black;
      order: 1;
      text-align: center;
      @include mq() {
        text-align: left;
      }

      .title {
        color: rgba(0, 0, 0, 0);
        font-size: 3rem;
        font-weight: 800;
        line-height: 3.4rem;
        background: rgb(135, 226, 240);
        background-image: url("/img/bg/portage.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-clip: text;
        -webkit-text-fill-color: transparent;
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
        position: absolute;
        width: 60px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
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
