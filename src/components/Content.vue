<template lang="pug">
  .wrapper
    #profile.section
      .name
        .detail
          | Tokyo Denki University
          br
          | pixiv Inc.
        | Yushun
        br
        | Kotani
      img.portrait(src="../assets/portrait.png")
    #jobs.section
      .header Job History
      JobHistories
</template>

<script>
import JobHistories from "./JobHistories";

export default {
  name: "Content",
  components: {
    JobHistories
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  margin: 110px auto 0;
  max-width: 1200px;
}

.section {
  & + & {
    margin-top: 3rem;
  }

  .header {
    margin: 1rem 0;
    font-size: 2rem;
    text-align: center;
  }
}

#profile {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .name {
    margin: 0 4rem;
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    line-height: 5rem;

    .detail {
      margin: 1rem 0;
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  .portrait {
    margin: 0 4rem;
    max-height: 700px;
    max-width: 90vw;
  }
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
