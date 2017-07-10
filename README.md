# React Redux Modal [demo](https://raff-r.github.io/redux-modal/)

## Implementation Guide

##### 1. Installation

`npm install --save https://github.com/raff-r/redux-modal.git`

##### 2. Add the `reducer` to Redux.

```
import { combineReducers } from 'redux';

import modalReducer from 'modal-popup';

const rootReducer = combineReducers({
  modals: modalReducer
});

export default rootReducer;
```

##### NOTE: The reducer name for `redux-modal` must be `modals`.

##### 3. Add the `Modal` component and styles to the root of your app.

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import {
    modal as Modal,
    styles
} from 'modal-popup';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware())
);

ReactDOM.render(
  <Provider store={store}>
    <div>
        ... other JSX ...
        <ReduxModal />
    </div>
  </Provider>
  , document.querySelector('#root'));
```

##### 4. Build button to open modal and pass in component.

```
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actions} from 'modal-popup';

const DemoModal = () => {
  return (
    <div>
      This is a test modal
    </div>
  )
};

class AppTest extends Component {

  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
  }

  openModal(e, options) {
    e.preventDefault();
    this.props.showModal(DemoModal, options);
  }

  render() {

    return (
      <div className="container">
        <br/><br/>
        <div className="row center-align">
          <div className="col s3">
            <a className="waves-effect waves-light btn" onClick={(e) => this.openModal(e, {size: 'small'})}>Small</a>
          </div>
          <div className="col s3">
            <a className="waves-effect waves-light btn" onClick={(e) => this.openModal(e, {size: 'medium'})}>Medium</a>
          </div>
          <div className="col s3">
            <a className="waves-effect waves-light btn" onClick={(e) => this.openModal(e, {size: 'large'})}>Large</a>
          </div>
          <div className="col s3">
            <a className="waves-effect waves-light btn" onClick={(e) => this.openModal(e, {size: 'full-screen'})}>Full Screen</a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null,actions)(AppTest);
```


## API (actions)

### showModal(component, options)
Display a modal popup with a specific React component and options

#### component (React component)
The react component to render inside of the modal popup

#### options (Object)
The properties to adjust the behaviour of the modal popup

Property    | Description                           | Values                            |
----------- | ------------------------------------- | --------------------------------- |
size        | Adjust the width of the modal popup   | small, medium, large, full-screen |

### hideModal()
Remove the current open modal from the DOM
