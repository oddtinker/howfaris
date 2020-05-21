import React from 'react';
import classes from './Logo.module.css';
import logoPic from '../../assets/images/logoA.svg';

const logo = (props) => {
  return (
  <span className={props.isRotating? (classes.Logo, classes.LogoSpinning) : classes.Logo}>
    <img src={logoPic} alt="logo" width={props.width} />
  </span>
)};

export default logo;