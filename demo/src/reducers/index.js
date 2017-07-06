import { combineReducers } from 'redux';

import modalReducer from '../../../src/reducers/modal';

const rootReducer = combineReducers({
  modals: modalReducer
});

export default rootReducer;