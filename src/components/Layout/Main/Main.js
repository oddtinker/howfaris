import React, { Component } from 'react';
import classes from './Main.module.css';
import SwitchBlock from '../../UI/SwitchBlock/SwitchBlock';
import Slideshow from '../../Slideshow/Slideshow';

class Main extends Component {
  state = {
    entities: ['WHO / EU', 'US', 'UK', 'DE'],
    distances: ['1 meter', '1.5 meters', '2 meters'],
    // distances: [[1, 3], [1.5, 4], [2, 6]],
    // metrics: ['meters', 'feet'],
    currentChoice: '',
  };
  choiceHandler = event => {
    const chosenDistance =  event.target.value;
    this.setState({ currentChoice: chosenDistance });
    console.log(event.target);
  }
  render() {
    return (
    <main className={classes.Main}>
      <h1>How far is... {this.state.currentChoice}?</h1>
      <SwitchBlock
        dataList={this.state.distances}
        changeHandler={this.choiceHandler}/>
      <Slideshow currentChoice={this.state.currentChoice} />
    </main>
)}};

export default Main;