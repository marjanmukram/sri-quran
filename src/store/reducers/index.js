import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  language: languageReducer,
  searchForm: searchReducer
});
