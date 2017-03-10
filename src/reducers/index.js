import { combineReducers } from 'redux';
import { selectedPath, contentByPath } from './files';

const rootReducer = combineReducers({
  selectedPath,
  contentByPath,
});

export default rootReducer;
