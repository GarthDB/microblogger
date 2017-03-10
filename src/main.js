import Vue from 'vue';
import Home from './views/home.vue';
import store from './filestore.js';
import { selectPath, fetchContentIfNeeded } from './actions';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: (h) => h(Home),
  created: () => {
    const initialPath = '_posts/';
    store.dispatch(selectPath(initialPath));
    store.dispatch(fetchContentIfNeeded(initialPath));
  },
});
