<template lang="pug">
  .wrapper
    Profile#profile.section
    JobHistories#jobs.section
    //.section.content-wrapper
      .content
        .header
          | Developments
    Roomee#roomee.section
    //#development.section
      .header Development
</template>

<script>
import Profile from "./Profile";
import JobHistories from "./JobHistories";
import Roomee from "./developments/Roomee";

export default {
  name: "Content",
  components: {
    Profile,
    JobHistories,
    Roomee
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  margin: 110px auto 0;
  //max-width: 1200px;
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
  max-height: 900px;
  text-align: center;
}
</style>
