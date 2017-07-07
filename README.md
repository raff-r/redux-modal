# React Redux Modal [demo](https://raff-r.github.io/redux-modal/)

## Implementation Guide

##### 1. Installation

`npm install --save https://github.com/raff-r/redux-modal.git`

##### 2. Add the `reducer` to Redux.

```
import { combineReducers } from 'redux';

import modalReducer from 'redux-modal';

const rootReducer = combineReducers({
  modals: modalReducer
});

export default rootReducer;
```

##### NOTE: The reducer name for `redux-modal` must be `modals`.

##### 3. Add the `Modal` component to the root of your app.

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import Modal from 'redux-modal';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware())
);

ReactDOM.render(
  <Provider store={store}>
    <Modal />
  </Provider>
  , document.querySelector('#root'));
```