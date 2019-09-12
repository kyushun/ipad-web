<template lang="pug">
  .wrapper
    Profile#profile.section
    JobHistories#jobs.section
    //.section.content-wrapper
      .content
        .header
          | Developments
    Roomee.section
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

#product {
  .list {
    display: flex;
    flex-wrap: wrap;
    @include mq() {
      flex-wrap: nowrap;
    }

    .card {
      box-flex: 1;
      margin: 0.5rem 1rem;
      padding: 1rem 2rem;
      width: 100%;
      text-align: center;
      font-weight: 300;
      border-radius: 4px;
      border: solid 1px #eee;
      transition: all 0.25s;

      &:hover {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      }

      .title {
        margin: 0 0 0.5rem;
        font-weight: 500;
      }
    }
  }
}
</style>
