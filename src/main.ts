import Vue from 'vue';
import Root from './root.vue';
import router from './router';
import store from './store';
import './lib/PrototypeExtension';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Root)
}).$mount('#app');
