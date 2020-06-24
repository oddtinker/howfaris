import React, { Component } from 'react';
import classes from './Main.module.css';
import SwitchBlock from '../../UI/SwitchBlock/SwitchBlock';
import Slideshow from '../../Slideshow/Slideshow';
import InfoBlock from '../../UI/InfoBlock/InfoBlock';

class Main extends Component {
  state = {
    options: [
      {
        distanceM: '1 meter',
        distanceF: 'just over 3 feet',
        entities: 'the UK (from July 4), the WHO, the EU'
      },
      {
        distanceM: '1.5 meters',
        distanceF: 'almost 5 feet',
        entities: 'Australia, Germany'
      },
      {
        distanceM: '2 meters',
        distanceF: 'about 6.5 feet',
        entities: 'the UK (until July 4), Canada, the US'
      },
    ],
    currentChoice: '',
  };
  choiceHandler = event => {
    const chosenDistance = event.target.value;
    this.setState({ currentChoice: chosenDistance });
  }
  render() {
    const fullInfo = this.state.options.find(element => element.distanceM === this.state.currentChoice);
    return (
    <main className={classes.Main}>
      {!this.state.currentChoice ? <h1>Your physical distancing guide<br />How far is...</h1> : <h1>How far is... {this.state.currentChoice}?</h1>}
      <SwitchBlock
        options={this.state.options}
        currentChoice={this.state.currentChoice}
        changeHandler={this.choiceHandler}/>
      {this.state.currentChoice ? <InfoBlock
      currentChoice={this.state.currentChoice}
      fullInfo={fullInfo}
      isHovering={false} /> : null }
      <Slideshow currentChoice={this.state.currentChoice} />
    </main>
)}};

export default Main;