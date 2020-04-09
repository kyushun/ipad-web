<template>
  <div class="lockscreen" @click="click">
    <figure class="padlock"></figure>
    <div class="clock">{{ time }}</div>
    <div class="date">{{ date }}</div>
    <div class="to-unlock">
      Yushun Kotani の<wbr />ポートフォリオへようこそ<br />
      <span class="small">タップしてロック解除</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator';

@Component({})
export default class LockScreen extends Vue {
  private date = '';
  private time = '';
  private tick: number | undefined;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  @Emit() click(): void {}

  created() {
    this.setDate();
    this.setTime();
  }

  mounted() {
    this.tick = setInterval(() => {
      this.setTime();
    }, 1000);
  }

  beforeDestroy() {
    clearInterval(this.tick);
  }

  setDate(_date: Date = new Date()) {
    this.date = `
      ${_date.getMonth() + 1}月${_date.getDate()}日 ${
      ['日', '月', '火', '水', '木', '金', '土'][_date.getDay()]
    }曜日`;
  }

  setTime(_date: Date = new Date()) {
    this.time = `${_date.getHours()}:${('0' + _date.getMinutes()).slice(-2)}`;
  }
}
</script>

<style scoped lang="scss">
// z-index: 30000
.lockscreen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #000;
  background-image: url('../assets/wallpaper-lock.jpg');
  z-index: 30000;
  transition: transform 0.75s;
  will-change: transform;

  &-enter,
  &-leave-to {
    transform: translateY(-105vh);
  }

  .padlock {
    position: relative;
    left: 8px;
    margin: 75px auto 0;
    padding-left: 12px;
    background-size: 572px 104px;
    width: 52px;
    height: 52px;
    background-position: 0px 0px;
    background-repeat: no-repeat;
    background-image: url('../assets/padlock.png');
    animation: padlock-open 0.4s steps(1) 0.75s forwards;
    animation-play-state: running;

    @keyframes padlock-open {
      0% {
        background-position: 0px 0px;
      }
      4.54545% {
        background-position: -52px 0px;
      }
      9.09091% {
        background-position: -104px 0px;
      }
      13.63636% {
        background-position: -156px 0px;
      }
      18.18182% {
        background-position: -208px 0px;
      }
      22.72727% {
        background-position: -260px 0px;
      }
      27.27273% {
        background-position: -312px 0px;
      }
      31.81818% {
        background-position: -364px 0px;
      }
      36.36364% {
        background-position: -416px 0px;
      }
      40.90909% {
        background-position: -468px 0px;
      }
      45.45455% {
        background-position: -520px 0px;
      }
      50% {
        background-position: 0px -52px;
      }
      54.54545% {
        background-position: -52px -52px;
      }
      59.09091% {
        background-position: -104px -52px;
      }
      63.63636% {
        background-position: -156px -52px;
      }
      68.18182% {
        background-position: -208px -52px;
      }
      72.72727% {
        background-position: -260px -52px;
      }
      77.27273% {
        background-position: -312px -52px;
      }
      81.81818% {
        background-position: -364px -52px;
      }
      86.36364% {
        background-position: -416px -52px;
      }
      90.90909% {
        background-position: -468px -52px;
      }
      95.45455% {
        background-position: -520px -52px;
      }
      100% {
        background-position: -520px -52px;
      }
    }
  }

  .clock {
    color: #fff;
    font-size: 96px;
    line-height: 1;
    text-align: center;
    text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
  }

  .date {
    color: #fff;
    font-size: 20px;
    text-align: center;
    text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
  }

  .to-unlock {
    position: absolute;
    bottom: 50px;
    left: 50%;
    color: #fff;
    font-size: 24px;
    line-height: 1.2;
    text-align: center;
    white-space: nowrap;
    text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.75);
    transform: translate(-50%, 0);
    animation-name: to-unlock-bound;
    animation-duration: 4s;
    animation-play-state: running;
    animation-iteration-count: infinite;

    @keyframes to-unlock-bound {
      75% {
        transform: translate(-50%, 0);
      }
      87.5% {
        transform: translate(-50%, -10px);
      }
      100% {
        transform: translate(-50%, 0);
      }
    }

    .small {
      font-size: 0.8em;
    }
  }
}
</style>
