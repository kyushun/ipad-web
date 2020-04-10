import Vue from 'vue';
import Root from './root.vue';
import router from './router';
import store from './store';
import './lib/PrototypeExtension';

/* Loader */
window.addEventListener('load', () => {
  document.getElementsByTagName('body')[0]?.classList.remove('no-scroll');
  const loader = document.getElementById('loader');
  loader?.classList.add('loaded');

  setTimeout(() => {
    loader?.parentNode?.removeChild(loader);
  }, 750);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Root)
}).$mount('#app');
