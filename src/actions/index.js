import {SHOW_MODAL, HIDE_MODAL} from './types';

export function showModal(component, options) {
  return {
    type: SHOW_MODAL,
    payload: {
      component,
      options
    }
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  }
}