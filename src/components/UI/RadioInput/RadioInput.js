import React from 'react';
import classes from './RadioInput.module.css';

const radioInput = props => (
  <div className={classes.RadioInput}>
    <input
    onClick={props.clickHandler}
    type="radio"
    name={props.radioGroupName}
    id={props.radioInputID}
    />
    <label htmlFor={props.radioInputID}>{props.radioInputLabel}</label>
  </div>
)

export default radioInput;