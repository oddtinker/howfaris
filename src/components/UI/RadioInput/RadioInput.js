import React from 'react';
import classes from './RadioInput.module.css';

const radioInput = props => (
  <div className={classes.RadioInput}>
    <label
    htmlFor={props.radioInputID.split(' ').join('')}
    onChange={(e) => props.changeHandler(e)}>
    <input
    type="radio"
    name={props.radioGroupName}
    id={props.radioInputID.split(' ').join('')}
    value={props.radioInputLabel}
    /><br />{props.radioInputLabel}</label>
  </div>
)

export default radioInput;