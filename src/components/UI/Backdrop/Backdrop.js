import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => (
  props.isBackdropDown ? <div className={classes.Backdrop} onClick={props.handleBackdrop}></div> : null
);

export default backdrop;