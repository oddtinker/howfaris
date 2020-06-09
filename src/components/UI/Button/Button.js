import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
  let concatenatedClasses = [classes.Button];
  switch (props.buttonStylingType) {
    case 'cross':
      concatenatedClasses.push(classes.Cross);
      break;
    case 'header':
      concatenatedClasses.push(classes.HeaderButton);
      break;
    case 'footer':
      concatenatedClasses.push(classes.FooterButton);
      break;
    case 'switchBlock':
      concatenatedClasses.push(classes.SwitchBlockButton);
      break;
    default:
      break;
  }
  return (
    <button
    type="button"
    className={concatenatedClasses.join(' ')}
    onClick={props.clickHandler}>{props.buttonText}</button>
  )
}

export default button;