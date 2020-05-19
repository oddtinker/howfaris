import React from 'react';
import classes from './App.module.css';
import Loading from './components/Loading/Loading';

const App = () => {
  return (
    <div className={classes.App}>
      <Loading />
    </div>
  );
}

export default App;
