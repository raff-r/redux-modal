import React, { Component } from 'react';
import {connect} from 'react-redux';

import {showModal} from '../../../src/actions'

import DemoModal from './demo-modal';
import Modal from '../../../src/components/modal';

class App extends Component {

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
          <div className="col s4">
            <a className="waves-effect waves-light btn" onClick={(e) => this.openModal(e, {size: 'small'})}>Small</a>
          </div>
          <div className="col s4">
            <a className="waves-effect waves-light btn" onClick={(e) => this.openModal(e, {size: 'medium'})}>Medium</a>
          </div>
          <div className="col s4">
            <a className="waves-effect waves-light btn" onClick={(e) => this.openModal(e, {size: 'large'})}>Large</a>
          </div>
        </div>
        <Modal />
      </div>
    );
  }
}

export default connect(null, {showModal})(App);