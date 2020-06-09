import React from 'react';
import classes from './Footer.module.css';
import Button from '../../UI/Button/Button';

const footer = () => (
  <footer className={classes.Footer}>
    <a href="https://github.com/larisachristie/howfaris" target="_blank" rel="noopener noreferrer">
      <Button buttonText="GitHub" buttonStylingType="footer"/>
      </a>
  </footer>
)

export default footer;