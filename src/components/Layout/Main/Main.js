import React, { Component } from 'react';
import classes from './Main.module.css';
import SwitchBlock from '../../UI/SwitchBlock/SwitchBlock';
import Slideshow from '../../Slideshow/Slideshow';

class Main extends Component {
  state = {
    options: [
      {
        distanceM: '1 meter',
        distanceF: '3 feet',
        entities: 'the WHO, the EU'
      },
      {
        distanceM: '1.5 meters',
        distanceF: '4 feet',
        entities: 'Australia, Germany'
      },
      {
        distanceM: '2 meters',
        distanceF: 'just over 6 feet',
        entities: 'Canada, the UK, the US'
      },
    ],
    currentChoice: '',
  };
  choiceHandler = event => {
    const chosenDistance =  event.target.value;
    this.setState({ currentChoice: chosenDistance });
  }
  render() {
    return (
    <main className={classes.Main}>
      <h1>How far is... {this.state.currentChoice}?</h1>
      <SwitchBlock
        options={this.state.options}
        currentChoice={this.state.currentChoice}
        changeHandler={this.choiceHandler}/>
      <Slideshow currentChoice={this.state.currentChoice} />
    </main>
)}};

export default Main;