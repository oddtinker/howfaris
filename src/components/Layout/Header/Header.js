import React from 'react';
import classes from './Header.module.css';
import Button from '../../UI/Button/Button';

const header = (props) => (
  <header className={classes.Header}>
    <Button buttonStylingType="header" clickHandler={props.handleBackdrop} buttonText="About" />
  </header>
);

export default header;