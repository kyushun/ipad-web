<template lang="pug">
  .wrapper
    Profile#profile.section
    Careers#career.section
    Roomee#roomee.section
</template>

<script>
import Profile from "./Profile";
import Careers from "./Careers";
import Roomee from "./developments/Roomee";

export default {
  name: "Content",
  components: {
    Profile,
    Careers,
    Roomee
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  margin: 110px auto 0;
}

.section {
  & + .section {
    border-top: solid 1px #eee;
  }

  .header {
    margin-bottom: 4rem;
    padding-bottom: 1.5rem;
    color: $color-black;
    font-size: 1.5rem;
    text-align: center;
    border-bottom: solid 1px rgba(86, 86, 86, 0.25);
  }
}

#profile {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 110px);
  max-height: 1080px;
  text-align: center;
}
</style>
