import Vue from "vue";
import App from "./App.vue";
import VueAnalytics from "vue-analytics";
import vueSmoothScroll from "vue2-smooth-scroll";

const GOOGLE_TRACKING_ID = "UA-147956404-1";

var accessToken = (() => {
  var params = new URLSearchParams(window.location.search);
  var token = params.get("access_token");
  if (token) {
    localStorage.accessToken = token;
    return token;
  } else {
    return localStorage.accessToken || null;
  }
})();

Vue.config.productionTip = false;
Vue.use(VueAnalytics, {
  id: GOOGLE_TRACKING_ID,
  fields: { userId: accessToken }
});
Vue.use(vueSmoothScroll, { offset: -50, updateHistory: false });

new Vue({
  render: h => h(App)
}).$mount("#app");
