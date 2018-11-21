import { CHANGE_LANG, CHANGE_SEARCH_TERM } from '../actions/types';

const initState = {
  language: '',
  term: ''
};

export default function(state = initState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return { ...state, term: action.payload };
    case CHANGE_LANG:
      return { ...state, language: action.payload };
    default:
      return state;
  }
}
