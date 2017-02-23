import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import ContentDetail from './routes/ContentDetail';
import AboutMe from './routes/AboutMe';
import Contact from './routes/Contact';
import Links from './routes/Links';
import Essays from './routes/Essays';
import Eyeball from './routes/Eyeball';
import TaggedContent from './routes/TaggedContent';
import { routeHasTags, tagsFromRoute } from './util/tags-route';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/info', component: AboutMe },
    { path: '/contact', component: Contact },
    { path: '/links', component: Links },
    { path: '/essays', component: Essays },
    { path: '/eyeball', component: Eyeball },

    {
      path: '/detail/:slug',
      component: ContentDetail,
      props: true,
      beforeEnter: (to, from, next) => {
        if (routeHasTags(from)) {
          const tags = tagsFromRoute(from);
          next(`/detail/${to.params.slug}/tagged/${tags.join(',')}`);
        } else {
          next();
        }
      },
    },
    { path: '/detail/:slug/tagged/:tags', component: ContentDetail, props: true },
    { path: '/detail/:slug/tagged', redirect: '/detail/:slug' },

    { path: '/tagged/:tags', component: TaggedContent, props: true },
    { path: '/tagged', redirect: '/' },
  ],
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
