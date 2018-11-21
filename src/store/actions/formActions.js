import { CHANGE_LANG, CHANGE_SEARCH_TERM } from './types';

export function changeLang(ln) {
  return {
    type: CHANGE_LANG,
    payload: ln
  };
}

export function changeTerm(searchTerm) {
  return {
    type: CHANGE_SEARCH_TERM,
    payload: searchTerm
  };
}
