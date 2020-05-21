import React from 'react';
import classes from './Header.module.css';
import Logo from '../../Logo/Logo';
import Button from '../../UI/Button/Button';

const header = (props) => (
  <header className={classes.Header}>
    <Button clickHandler={props.handleBackdrop} buttonText="About" />
    <Logo isRotating={false} width="60vh"/>
  </header>
);

export default header;