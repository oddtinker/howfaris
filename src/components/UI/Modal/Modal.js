import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
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
          <div className={classes.CloseButton}>
            <span title="Close">
              <Button buttonText="X" buttonStylingType="cross" clickHandler={this.props.handleBackdrop}/>
            </span>
          </div>
          {this.props.children}</div>
      </>
    )
  }
}

export default Modal;

