import { combineReducers } from 'redux';
import {
  SELECT_PATH, INVALIDATE_PATH,
  REQUEST_FILELIST, RECEIVE_FILELIST,
} from '../actions';

const selectedPath = (state = '', action) => {
  switch (action.type) {
    case SELECT_PATH:
      return action.path;
    default:
      return state;
  }
};

const content = (state = {
  isFetching: false,
  didInvalidate: false,
  items: [],
}, action) => {
  switch (action.type) {
    case INVALIDATE_PATH:
      return Object.assign({}, state, {
        didInvalidate: true,
      });
    case REQUEST_FILELIST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_FILELIST:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.files,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
};

const contentByPath = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_PATH:
    case RECEIVE_FILELIST:
    case REQUEST_FILELIST:
      return Object.assign({}, state, {
        [action.path]: content(state[action.path], action),
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  selectedPath,
  contentByPath,
});

export default rootReducer;
