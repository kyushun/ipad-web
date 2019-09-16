<template lang="pug">
  .header
    .bg
    .content
      .title
        | Yushun Kotani's Portfolio
      .last-edited-at
        | 最終更新: {{ lastUpdatedAt }}
      .section
        a(href="#profile" v-smooth-scroll="{ offset: -110 }")
          div Top
        a(href="#career" v-smooth-scroll)
          div Career
        a(href="#roomee" v-smooth-scroll)
          div Development
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return {
      show: false,
      lastUpdatedAt: (() => {
        /*globals APP_DEPLOYED_AT */
        const dt = new Date(APP_DEPLOYED_AT);
        return [
          dt.getFullYear(),
          ("0" + (dt.getMonth() + 1)).slice(-2),
          ("0" + dt.getDate()).slice(-2)
        ].join("/");
      })()
    };
  },
  methods: {
    display: function() {
      this.show = true;
    }
  },
  mounted: function() {
    setTimeout(this.display, 1000);
  }
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: -3rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 3.5rem 1rem 0.5rem;
  z-index: 999;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;

  @include mq(sm) {
    padding: 3.5rem 2rem 0.5rem;
  }

  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgba(255, 255, 255, 0.7);
    z-index: -1;

    &::after {
      position: absolute;
      content: "";
      top: 100%;
      width: 100%;
      height: 1px;
      background-color: rgba(29, 29, 31, 0.1);
    }
  }

  .content {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 2;

    @include mq(sm) {
      width: 75%;
    }

    .title {
      padding: 0.5rem 1rem 0.5rem 0;
      font-weight: 900;
    }

    .last-edited-at {
      padding: 0.25rem;
      font-size: 0.5rem;
      font-weight: 300;
      border: solid 1px #ccc;
      border-radius: 6px;
    }

    .section {
      display: none;
      overflow-x: auto;
      flex: 1;
      justify-content: flex-end;

      @include mq() {
        display: flex;
      }

      a {
        padding: 0.5rem 1rem;
        cursor: pointer;
        color: $color-black;
        text-decoration: none;
        white-space: nowrap;
        border-radius: 8px;
        transition: background-color 0.25s;

        &:hover {
          background-color: rgba(0, 0, 0, 0.08);
        }
      }
    }
  }
}
</style>
