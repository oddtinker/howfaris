import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.isBackdropDown !== this.props.isBackdropDown;
  };
  render () {
    return (
      <>
        <Backdrop
        handleBackdrop={this.props.handleBackdrop}
        isBackdropDown={this.props.isBackdropDown} />

        <div className={classes.Modal}
        style={{
          transform: this.props.isBackdropDown ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.isBackdropDown ? '1' : '0',
        }}>
          {this.props.children}</div>
      </>
    )
  }
}

export default Modal;

