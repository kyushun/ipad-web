<template lang="pug">
  .wrapper
    .profile
      .name
        | Yushun
        br
        | Kotani
      img.portrait(src="../assets/portrait.png")
</template>

<script>
export default {
  name: "Content"
};
</script>

<style scoped lang="scss">
.wrapper {
  margin: 2rem auto;
  max-width: 1400px;
}

.profile {
  display: flex;
  justify-content: center;

  .name {
    @include mq() {
      padding: 10rem;
    }
    font-size: 4rem;
    font-weight: bold;
  }

  .portrait {
    max-height: 100px;
  }
}
</style>
