import React from 'react';
import Loading from '../../Loading/Loading';
import classes from './Main.module.css';

const main = (props) => (
  props.isLoading ? <Loading /> :
  <main className={classes.Main}>
    <div>Title</div>
    <div>Buttons</div>
    <div>Slideshow</div>
  </main>
);

export default main;