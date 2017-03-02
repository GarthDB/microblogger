import Vue from 'vue';
import Home from './views/home.vue';
import store from './filestore.js';
import { fetchPostsIfNeeded } from './actions';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: (h) => h(Home),
  created: () => {
    store.dispatch(fetchPostsIfNeeded('_posts/'));
  },
});
