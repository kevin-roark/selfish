import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import AboutMe from './routes/AboutMe';
import Contact from './routes/Contact';
import Links from './routes/Links';
import Essays from './routes/Essays';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/info', component: AboutMe },
    { path: '/contact', component: Contact },
    { path: '/links', component: Links },
    { path: '/essays', component: Essays },
  ],
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
