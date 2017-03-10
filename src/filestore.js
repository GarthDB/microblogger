import Vue from 'vue';
import Revue from 'revue';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import * as actions from './actions';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

/* eslint-disable no-underscore-dangle */
const reduxStore = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const store = new Revue(Vue, reduxStore, actions);

// eslint-disable-next-line no-undef
if (typeof __DEV__ !== 'undefined' && __DEV__) {
  window.store = store;
}

export default store;
