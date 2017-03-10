import { Filelist, File, PathError } from '../types/';

export const SELECT_PATH = 'SELECT_PATH';
export const INVALIDATE_PATH = 'INVALIDATE_DIRECTORY';
export const REQUEST_CONTENT = 'REQUEST_CONTENT';
export const RECEIVE_CONTENT = 'RECEIVE_CONTENT';
export const RECEIVE_FILELIST = 'RECEIVE_FILELIST';

export function selectPath(path) {
  return {
    type: SELECT_PATH,
    path,
  };
}

export function invalidatePath(path) {
  return {
    type: INVALIDATE_PATH,
    path,
  };
}

export function requestContent(path) {
  return {
    type: REQUEST_CONTENT,
    path,
  };
}

function _parseContent(data, path) {
  const directory = (path === '') ? path : path;
  let result;
  if (Array.isArray(data)) {
    result = new Filelist(data, directory);
  } else if (data.type === 'file') {
    result = new File(data);
  } else {
    result = new PathError(data);
  }
  return result;
}

export function receiveContent(path, json) {
  return {
    type: RECEIVE_CONTENT,
    path,
    content: json,
    receivedAt: Date.now(),
  };
}

export function recieveFilelist(path, filelist) {
  return {
    type: RECEIVE_FILELIST,
    path,
    filelist,
    receivedAt: Date.now(),
  };
}
// content: _parseContent(data, path),

const fetchContent = path => dispatch => {
  dispatch(requestContent(path));
  return fetch(`https://api.github.com/repos/smithtimmytim/jekyll-microblog/contents/${path}`)
    .then(response => response.json())
    .then(data => {
      if (Array.isArray(data)) {
        const filelist = new Filelist(data, path);
        dispatch(recieveFilelist(path, filelist));
      }
      // dispatch(receiveContent(path, data))
    });
};

const shouldFetchContent = (state, path) => {
  const content = state.contentByPath[path];
  if (!content) {
    return true;
  }
  if (content.isFetching) {
    return false;
  }
  return content.didInvalidate;
};

export const fetchContentIfNeeded = path => (dispatch, getState) => {
  if (shouldFetchContent(getState(), path)) {
    return dispatch(fetchContent(path));
  }
  return false;
};
