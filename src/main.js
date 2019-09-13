import Vue from "vue";
import App from "./App.vue";
import vueSmoothScroll from "vue2-smooth-scroll";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

Vue.use(vueSmoothScroll, { offset: -50, updateHistory: false });
