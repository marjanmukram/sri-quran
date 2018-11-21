import { CHANGE_LANG } from './types';

export function changeLang(ln) {
  return {
    type: CHANGE_LANG,
    payload: ln
  };
}
