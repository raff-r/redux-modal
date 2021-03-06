import React, { Component } from 'react';
import {connect} from 'react-redux';

import {showModal} from '../../../src/actions'

import DemoModal from './demo-modal';
import Modal from '../../../src/components/modal';
import '../../../src/styles/modals.css';

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
          <h4>Size options</h4>
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
        <br/><br/>
        <div className="row center-align">
          <h4>Hide close button options</h4>
          <div className="col s6">
            <a className="waves-effect waves-light btn" onClick={(e) => this.openModal(e, {size: 'medium', hideCloseBtn: true, closeOutsideModal: true})}>Hide close button</a>
          </div>
          <div className="col s6">
            <a className="waves-effect waves-light btn" onClick={(e) => this.openModal(e, {size: 'medium', hideCloseBtn: false, closeOutsideModal: true})}>Don't hide close button</a>
          </div>
        </div>
        <br/><br/>
        <div className="row center-align">
          <h4>Close outside modal options</h4>
          <div className="col s6">
            <a className="waves-effect waves-light btn" onClick={(e) => this.openModal(e, {size: 'medium', closeOutsideModal: true})}>Close outside modal</a>
          </div>
          <div className="col s6">
            <a className="waves-effect waves-light btn" onClick={(e) => this.openModal(e, {size: 'medium', closeOutsideModal: false})}>Don't close outside modal</a>
          </div>
        </div>
        <Modal />
      </div>
    );
  }
}

export default connect(null, {showModal})(App);