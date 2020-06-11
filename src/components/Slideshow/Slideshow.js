import React, { Component } from 'react';
import classes from './Slideshow.module.css';
import Loading from '../UI/Loading/Loading';
import { images1, images15, images2 } from '../../images';

class Slideshow extends Component {
  state = {
    isLoading: false,
  };
  componentDidMount() {
    if (!this.props.currentChoice) {
      this.setState({ isLoading: true });
    }
    if (images15 && this.state.isLoading) {
      setTimeout(() => this.setState({ isLoading: false }), 1000);
    }
  };
  render () {
    let content = null;
    if (this.props.currentChoice === '1 meter') {
      content = images1.map((item, index) => {
        return (
          <div className={classes.SlideshowBox}>
            <img key={index} src={item.file} alt={item.title}/>
            <h3>{item.title}</h3>
          </div>
      )});
    }
    if (this.props.currentChoice === '1.5 meters') {
      content = images15.map((item, index) => {
        return (
          <div className={classes.SlideshowBox}>
            <img key={index} src={item.file} alt={item.title}/>
            <h3>{item.title}</h3>
          </div>
      )});
    }
    if (this.props.currentChoice === '2 meters') {
      content = images2.map((item, index) => {
        return (
          <div className={classes.SlideshowBox}>
            <img key={index} src={item.file} alt={item.title}/>
            <h3>{item.title}</h3>
          </div>
      )});
    }
    return (
      !content ? null :
      <React.Fragment>
        <div className={classes.Slideshow}>
          <div className={classes.SlideshowControls} id="leftControl"></div>
          {content}
          <div className={classes.SlideshowControls} id="rightControl"></div>
        </div>
      </React.Fragment>
    )
  }
}

export default Slideshow;