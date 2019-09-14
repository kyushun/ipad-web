<template lang="pug">
.profile
  .typo
    .name
      | front-end &amp; back-end CREATOR
      .emphasize
        | Yushun Kotani
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style scoped lang="scss">
.profile {
  position: relative;
}

.typo {
  .name {
    margin: 1rem 0 4rem;
    font-size: 4.25rem;
    font-weight: 700;
    line-height: 5.5rem;

    .emphasize {
      color: rgba(0, 0, 0, 0);
      font-size: 5.5rem;
      background-color: rgb(109, 230, 245);
      background-image: url("~@/assets/img/bg/profile_text.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
