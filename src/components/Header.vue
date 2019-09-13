<template lang="pug">
transition(name="scroll")
  .header(v-if="show")
    .content
      .title
        | Portfolio
      .section
        a(href="#profile" v-smooth-scroll)
          div Profile
        a(href="#jobs" v-smooth-scroll)
          div Job History
        a(href="#roomee" v-smooth-scroll)
          div Development
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return {
      show: false
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
  top: 1.5rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  width: 75%;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.content {
  display: flex;
  justify-content: space-between;

  .title {
    padding: 0.5rem 1rem;
    font-weight: bold;
  }

  .section {
    display: none;
    overflow-x: auto;

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
        background-color: rgba(64, 158, 255, 0.25);
      }
    }
  }
}

.scroll-enter-active {
  animation: scroll-in 0.5s;
}
.scroll-leave-active {
  animation: scroll-in 0.5s reverse;
}
@keyframes scroll-in {
  0% {
    transform: translateY(-60px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
