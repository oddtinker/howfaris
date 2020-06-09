import React from 'react';
import classes from './Loading.module.css';
import Logo from '../../Logo/Logo';

const loading = () => {
  return (
    <div className={classes.Loading}>
      <Logo isRotating={true} width="200vh" />
      <p>Loading...</p>
    </div>
  );
}

export default loading;
