import {SHOW_MODAL, HIDE_MODAL} from '../actions/types';

const initialState = {show: false, component: null};

export default function modalReducer(state = initialState, action) {

  switch (action.type) {
    case SHOW_MODAL:
      return {...state, show: true, component: action.payload.component};
    case HIDE_MODAL:
      return {...state, show: false, component: null};
    default:
      return state
  }

}