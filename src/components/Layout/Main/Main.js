import React, { Component } from 'react';
import Loading from '../../UI/Loading/Loading';
import classes from './Main.module.css';
import SwitchBlock from '../../UI/SwitchBlock/SwitchBlock';

class Main extends Component {
  state = {
    entities: ['WHO / EU', 'US', 'UK', 'DE'],
    distances: ['1 meter', '1.5 meters', '2 meters'],
    // distances: [[1, 3], [1.5, 4], [2, 6]],
    // metrics: ['meters', 'feet'],
    currentChoice: [],
  };
  choiceHandler = event => {
    const chosenDistance =  event.target.innerText;
    this.setState({ currentChoice: chosenDistance });
    console.log(event);
  }
  render() {
    // const currentDistanceChoice = this.state.currentChoice.join(' ');
    return (
    this.props.isLoading ? <Loading /> :
    <main className={classes.Main}>
      <h1>How far is... {this.state.currentChoice}?</h1>
      <div className={classes.SwitchesGroup}>
        <SwitchBlock
        dataList={this.state.distances}
        clickHandler={this.choiceHandler}/>
      </div>
      <div>SLIDESHOW PLACEHOLDER</div>
    </main>
)}};

export default Main;