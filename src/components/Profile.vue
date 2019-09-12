<template lang="pug">
.profile
  .typo
    .name
      | Welcome to my portfolio
      .emphasize
        | Yushun Kotani
    //.detail
      | Tokyo Denki University
      br
      | pixiv Inc.
  //.logos(ref="logos")
    img(v-for="(logo, i) in logos" :src="logo" :style="{top: `${i * 100}px`}")
</template>

<script>
export default {
  name: "Profile",
  data: function() {
    return {
      logos: [
        "/img/logos/php.svg",
        "/img/logos/ruby.svg",
        "/img/logos/rails.svg",
        "/img/logos/es6.svg",
        "/img/logos/ts.svg",
        "/img/logos/react.svg",
        "/img/logos/vue.svg"
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.profile {
  position: relative;
  //background-image: url('/img/bg/light-sky-blue.jpg');
}

.typo {
  .name {
    margin: 1rem 0 4rem;
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 5rem;

    .emphasize {
      color: rgb(0, 112, 243);
    }
  }

  .detail {
    margin: 0;
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 2rem;
  }
}

.logos {
  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    object-position: center center;
    will-change: transform, opacity;
    border-radius: 50%;
    background: white;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.07);
    z-index: -1;
  }
}

.portrait {
  margin: 0 4rem;
  max-height: 700px;
  max-width: 90vw;
}
</style>
