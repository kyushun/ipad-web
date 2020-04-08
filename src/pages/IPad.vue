<template>
  <div id="ipad" ref="ipad" :style="style">
    <nav class="home" ref="home" :class="{ 'app-opened': appOpened }">
      <template v-if="initialized">
        <AppIcon
          v-for="(app, i) of apps"
          :key="(app, i)"
          :link="app.path"
          :image="app.icon"
          :style="{
            transform: `
              matrix(1, 0, 0, 1,
                ${getTranslate(i).x},
                ${getTranslate(i).y})`
          }"
          @click="appClick"
        >
          {{ app.name }}
        </AppIcon>
      </template>
    </nav>
    <transition name="float-icon">
      <AppIcon v-if="appOpenedFromHome" class="float-icon"></AppIcon>
    </transition>
    <transition name="float-panel">
      <main v-if="appOpened" class="float-panel">
        <router-view></router-view>
        <HomeIndicator @click="closeApp"></HomeIndicator>
      </main>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import AppIcon from '../components/AppIcon.vue';
import HomeIndicator from '../components/HomeIndicator.vue';
import { routes } from '../router';
import Point from '../lib/Point';
import * as Const from '../lib/Const';
import { Route } from 'vue-router';

type AppStatus = 'Closed' | 'OpenedFromHome' | 'OpenedDirectly';

@Component({
  components: {
    AppIcon,
    HomeIndicator
  }
})
export default class IPad extends Vue {
  private style = {
    '--float-icon-top': '0',
    '--float-icon-left': '0',
    '--float-icon-background-image': 'none',
    '--float-panel-transform-origin': 'none'
  };
  private initialized = false;
  private homeOpened = false;
  private appStatus: AppStatus = 'Closed';

  mounted() {
    this.initialized = true;

    if (this.$route.name) {
      this.homeOpened = true;
      this.openApp();
    } else {
      requestAnimationFrame(() => {
        this.homeOpened = true;
      });
    }
  }

  @Watch('$route', { immediate: false, deep: true })
  pathChanged(to: Route) {
    if (to.name) {
      this.openApp();
    }

    if (this.appOpened && (to.path == '/' || !to.name)) {
      this.closeApp();
    }
  }

  appClick(e: MouseEvent) {
    this.openApp(e.currentTarget as Element);
  }

  get apps() {
    return routes;
  }

  get appOpened() {
    return (
      this.appStatus == 'OpenedFromHome' || this.appStatus == 'OpenedDirectly'
    );
  }

  get appOpenedFromHome() {
    return this.appStatus == 'OpenedFromHome';
  }

  openApp($src?: Element) {
    // Float Icon
    const floatIconStyle = {};
    if ($src) {
      this.appStatus = 'OpenedFromHome';
      const { top, left } = $src.getBoundingClientRect();
      Object.assign(floatIconStyle, {
        '--float-icon-top': top + window.pageYOffset + 'px',
        '--float-icon-left': left + window.pageXOffset + 'px',
        '--float-icon-background-image': ($src as HTMLElement).style
          .backgroundImage
      });
    } else {
      this.appStatus = 'OpenedDirectly';
      $src = this.$refs.home as HTMLElement;
    }

    // Float Panel
    const $ipad = this.$refs.ipad as Element;
    const scaleX = Const.appIconSize / $ipad.clientWidth;
    const scaleY = Const.appIconSize / $ipad.clientHeight;
    const translateX = -($ipad.getCenterPoint().x - $src.getCenterPoint().x);
    const translateY = -($ipad.getCenterPoint().y - $src.getCenterPoint().y);
    Object.assign(this.style, floatIconStyle, {
      '--float-panel-transform-origin': `matrix(
            ${scaleX}, 0, 0,
            ${scaleY}, ${translateX}, ${translateY}
          )`
    });
  }

  closeApp() {
    this.appStatus = 'Closed';
  }

  getAppCenterPosition(index: number) {
    const $home = this.$refs.home as Element;
    const homePos = $home.getPosition();

    const appSize = Const.appIconSize + Const.appIconMargin * 2;
    let appRelativePosX = appSize * index + appSize / 2;
    const line = Math.floor(appRelativePosX / $home.clientWidth);
    appRelativePosX -= line * $home.clientWidth;

    const x = appRelativePosX + homePos.x;
    const y = homePos.y + (line + 1) * appSize - appSize / 2;
    return new Point(x, y);
  }

  getTranslate(index: number) {
    if (this.homeOpened) {
      return new Point(0, 0);
    }

    const appCtrPos = this.getAppCenterPosition(index);
    const $home = this.$refs.home as Element;
    const homeCtrPos = $home.getCenterPoint();

    const radius =
      window.outerWidth > window.outerHeight
        ? window.outerWidth
        : window.outerHeight;

    const intersections = Math.getIntersectionsOfCircleWithLine(
      homeCtrPos,
      appCtrPos,
      homeCtrPos,
      radius
    );

    return appCtrPos
      .getCloserPoint(intersections)
      .move(-appCtrPos.x, -appCtrPos.y);
  }
}
</script>

<style lang="scss">
#ipad {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  height: 100%;
  width: 100%;
  background-image: url('../assets/ipadwall.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>

<style scoped lang="scss">
.home {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: var(--ipad-screen-size);
  height: calc(130px * 5);
  transition: transform 0.5s;

  &.app-opened {
    transform: matrix(0.8, 0, 0, 0.8, 0, 0);
  }
}

// Float icon
// z-index: 100
.float-icon {
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: var(--float-icon-background-image);
  border-radius: 0;
  opacity: 0;
  z-index: 100;

  &-leave-active {
    animation-name: float-icon-close;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    @keyframes float-icon-close {
      0% {
        opacity: 1;
      }
      95% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        visibility: hidden;
        top: var(--float-icon-top);
        left: var(--float-icon-left);
        width: var(--app-icon-size);
        height: var(--app-icon-size);
        border-radius: var(--app-icon-radius);
      }
    }
  }
}

// Float panel
// z-index: 1000
.float-panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 0;
  z-index: 1000;

  &-enter-active {
    overflow: hidden;
    animation-name: float-panel-open;
    animation-duration: 0.5s;
    animation-fill-mode: none;

    @keyframes float-panel-open {
      0% {
        border-radius: var(--app-icon-radius);
        opacity: 0;
        transform: var(--float-panel-transform-origin);
      }
      10% {
        opacity: 1;
      }
      100% {
        border-radius: 0;
        transform: matrix(1, 0, 0, 1, 0, 0);
      }
    }
  }

  &-leave-active {
    overflow: hidden;
    animation-name: float-panel-close;
    animation-duration: 0.5s;
    animation-fill-mode: none;

    @keyframes float-panel-close {
      0% {
        transform: matrix(1, 0, 0, 1, 0, 0);
      }
      25% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        transform: var(--float-panel-transform-origin);
      }
    }
  }
}
</style>
