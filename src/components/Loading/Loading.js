import React from 'react';
import logo from '../../logo.svg';
import classes from './Loading.module.css';

const loading = () => {
  return (
    <div className={classes.Loading}>
      <img src={logo} className={classes.AppLogo} alt="logo" />
      <p>Loading...</p>
    </div>
  );
}

export default loading;
