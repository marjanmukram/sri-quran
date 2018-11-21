import { CHANGE_LANG } from '../actions/types';

const initState = {
  language: '',
  term: ''
};

export default function(state = initState, action) {
  switch (action.type) {
    case CHANGE_LANG:
      return { ...state, language: action.payload };
    default:
      return state;
  }
}
