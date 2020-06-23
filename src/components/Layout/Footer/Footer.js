import React from 'react';
import classes from './Footer.module.css';
import Button from '../../UI/Button/Button';
import Link from '../../UI/Link/Link';

const footer = () => (
  <footer className={classes.Footer}>
    <Link
      urlAddress="https://github.com/larisachristie/howfaris"
      urlTitle="Hire me!"
      urlText={<Button buttonText="GitHub" buttonStylingType="footer"/>}/>
  </footer>
)

export default footer;