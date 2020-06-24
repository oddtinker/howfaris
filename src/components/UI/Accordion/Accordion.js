import React from 'react';
import classes from './Accordion.module.css';
import arrow from '../../../assets/images/arrow.svg';

const accordion = props => (
  <>
    <div className={classes.TopLine}>
      <h3>{props.expanderText}</h3>
      <img src={arrow}
      className={props.isExpanded ? `${classes.ExpandArrow} ${classes.Clicked}` : classes.ExpandArrow}
      onClick={props.expanderHandler} />
    </div>
    <div className={props.isExpanded ? classes.Open : classes.Hidden }>
      {props.expandedText}
    </div>
  </>
);

export default accordion;