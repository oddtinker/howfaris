import React from 'react';
import classes from './InfoBlock.module.css';

const InfoBlock = (props) => {
  return (
    <div className={props.isHovering ? classes.InfoBlockHover : classes.InfoBlockStatic}>
      {props.isHovering ? <p>As recommended by {props.text}</p> : <p>As recommended by {props.fullInfo.entities}.<br />The distance of {props.fullInfo.distanceM} equals roughly to {props.fullInfo.distanceF}.</p>}
    </div>
  )
}

export default InfoBlock;