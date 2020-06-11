import React from 'react';
import classes from './HoverBlock.module.css';

const HoverBlock = (props) => {
  return (
    <div className={classes.HoverBlock}>
      <p>As recommended by {props.hoverText}</p>
    </div>
  )
}

export default HoverBlock;