import {SHOW_MODAL, HIDE_MODAL} from './types';

export function showModal(component) {
  return {
    type: SHOW_MODAL,
    payload: {
      component
    }
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  }
}