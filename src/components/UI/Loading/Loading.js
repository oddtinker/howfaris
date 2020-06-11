import React from 'react';
import classes from './Loading.module.css';
import Logo from '../../Logo/Logo';

const loading = (props) => {
  return (
    <div className={classes.Loading}>
      <Logo isRotating={true} width="200vh" />
      <p>{props.loadingText}</p>
    </div>
  );
}

export default loading;
