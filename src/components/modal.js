import React, { Component } from 'react';
import {connect} from 'react-redux';

import {hideModal} from '../actions'

import '../styles/modals.css';

class Modal extends Component {

  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  renderModal(ModalComponent) {
    return <ModalComponent />
  }

  closeModal(e) {
    e.preventDefault();
    this.props.hideModal();
  }

  render() {

    const {show, component} = this.props;

    if(!show || !component) {
      return null;
    }

    return (
      <div className="modal__wrap with-background">
        <div className="modal__container">
          <div className="modal__content">
            <div>
              {this.renderModal(component)}
              <a title="Close (Esc)" className="modal__close" onClick={this.closeModal}>×</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.modals.show,
    component: state.modals.component
  }
};

export default connect(mapStateToProps, {hideModal})(Modal);