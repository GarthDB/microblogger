import {
  SELECT_PATH,
  INVALIDATE_PATH,
  REQUEST_CONTENT,
  RECEIVE_CONTENT,
  RECEIVE_FILELIST,
} from '../actions';

export const selectedPath = (state = '', action) => {
  switch (action.type) {
    case SELECT_PATH:
      return action.path;
    default:
      return state;
  }
};

export const content = (state = {
  isFetching: false,
  didInvalidate: false,
  content: false,
  files: [],
}, action) => {
  switch (action.type) {
    case INVALIDATE_PATH:
      return Object.assign({}, state, {
        didInvalidate: true,
      });
    case REQUEST_CONTENT:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_CONTENT:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.content,
        lastUpdated: action.receivedAt,
      });
    case RECEIVE_FILELIST:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        filelist: action.filelist,
        files: action.filelist.files,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
};

export const contentByPath = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_PATH:
    case RECEIVE_CONTENT:
    case REQUEST_CONTENT:
      return Object.assign({}, state, {
        [action.path]: content(state[action.path], action),
      });
    case RECEIVE_FILELIST:
      return Object.assign({}, state, {
        [action.path]: content(state[action.patch], action),
      });
    default:
      return state;
  }
};
