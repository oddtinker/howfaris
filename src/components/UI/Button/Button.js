import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
  return (
    <button
    type="button"
    className={classes.Button}
    onClick={props.clickHandler}>{props.buttonText}</button>
  )
}

export default button;