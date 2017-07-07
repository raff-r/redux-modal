import React, { Component } from 'react';
import {connect} from 'react-redux';

import Utils from '../utils/utils';

import {hideModal} from '../actions'

import '../styles/modals.css';

class Modal extends Component {

  constructor(props) {
    super(props);

    this.handleOnCloseClick = this.handleOnCloseClick.bind(this);
    this.handleOnOutsideClick = this.handleOnOutsideClick.bind(this);

  }

  renderModal(ModalComponent) {
    return <ModalComponent />
  }

  handleOnOutsideClick(e) {
    if (!Utils.isChildOf(e.target, this.refs.modalContent) || false) {
      this.props.hideModal();
    }
  }

  handleOnCloseClick(e) {
    e.preventDefault();
    this.props.hideModal();
  }

  render() {

    const {show, component, options} = this.props;

    if(!show || !component) {
      return null;
    }

    return (
      <div className="modal__wrap with-background modal__wrap--zoom-in" onClick={this.handleOnOutsideClick}>
        <div className={`modal__container ${options.size === 'full-screen' ? 'full-screen' : ''}`}>
          <div className="modal__content" ref="modalContent">
            <div className={`modal__style ${options.size}`}>
              {this.renderModal(component)}
              <a title="Close (Esc)" className="modal__close" onClick={this.handleOnCloseClick}>×</a>
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
    component: state.modals.component,
    options: state.modals.options
  }
};

export default connect(mapStateToProps, {hideModal})(Modal);