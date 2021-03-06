import Vue from 'vue';
import VueRouter from 'vue-router';
import UnderConstruction from './pages/UnderConstruction.vue';
import About from './pages/About.vue';
import OfficeEcho from './pages/OfficeEcho.vue';
import Gifizer from './pages/Gifizer.vue';

Vue.use(VueRouter);

export const PAGE_TITLE = 'Yushun Kotani';

export const routes = [
  {
    name: 'About me',
    path: '/about',
    component: About,
    icon: require('./assets/icons/about.png')
  },
  {
    name: 'office echo',
    path: '/office-echo',
    component: OfficeEcho,
    icon: require('./assets/icons/oe.png')
  },
  {
    name: 'Gifizer',
    path: '/gifizer',
    component: Gifizer,
    icon: require('./assets/icons/gifizer.png')
  },
  {
    name: 'CB Resizer',
    path: '/clipboard-resizer',
    component: UnderConstruction,
    icon: require('./assets/icons/clipboard-resizer.png')
  },
  {
    name: 'Github',
    path: 'https://github.com/kyushun',
    icon: require('./assets/icons/github.png')
  },
  {
    name: 'Contact',
    path: '/contact',
    component: UnderConstruction,
    icon: require('./assets/icons/contact.png')
  },
  {
    name: 'Settings',
    path: '/settings',
    component: UnderConstruction,
    icon: require('./assets/icons/settings.png')
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, _from, next) => {
  if (to.name) {
    window.document.title = `${to.name} - ${PAGE_TITLE}`;
  } else {
    window.document.title = PAGE_TITLE;
  }
  next();
});

export default router;
