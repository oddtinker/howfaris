import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
  let joinedClasses = [classes.Button];
  switch (props.buttonStylingType) {
    case 'cross':
      joinedClasses.push(classes.Cross);
      break;
    case 'header':
      joinedClasses.push(classes.HeaderButton);
      break;
    case 'footer':
      joinedClasses.push(classes.FooterButton);
      break;
    case 'switchBlock':
      joinedClasses.push(classes.SwitchBlockButton);
      break;
    case 'slideshowControls':
      joinedClasses[0] = classes.SlideshowControls;
      break;
    default:
      break;
  }
  return (
    <button
    type="button"
    className={joinedClasses.join(' ')}
    onClick={props.clickHandler}>{props.buttonText}</button>
  )
}

export default button;