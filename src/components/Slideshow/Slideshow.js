import React, { Component } from 'react';
import classes from './Slideshow.module.css';
import Slide from './Slide';
import Loading from '../UI/Loading/Loading';
import Button from '../UI/Button/Button';
import { images1, images15, images2 } from '../../images';

function getImgsForCurrentChoice (currentChoice) {
  switch (currentChoice) {
    case '1 meter':
      return images1;
    case '1.5 meters':
      return images15;
    case '2 meters':
      return images2;
    default:
      return [];
  }
};

class Slideshow extends Component {
  state = {
    currentImage: getImgsForCurrentChoice(this.props.currentChoice)[0],
  };
  componentDidUpdate(prevProps) {
    if (this.props.currentChoice !== prevProps.currentChoice) {
      this.setState({ currentImage: getImgsForCurrentChoice(this.props.currentChoice)[0] })
    }
  }
  helperFunctionPrevSlide = (currentArray, currentImage) => {
    if (currentArray.indexOf(currentImage) > 0) {
      const newImage = currentArray[currentArray.indexOf(currentImage) - 1];
      this.setState({ currentImage: newImage });
    } else {
      this.setState({ currentImage: currentArray[currentArray.length - 1] });
    }
  };
  helperFunctionNextSlide = (currentArray, currentImage) => {
    if (currentArray.indexOf(currentImage) < currentArray.length - 1) {
      const newImage = currentArray[currentArray.indexOf(currentImage) + 1];
      this.setState({ currentImage: newImage });
    } else {
      this.setState({ currentImage: currentArray[0] });
    }
  };
  handlePrevSlide = () => {
    const currentArray = getImgsForCurrentChoice(this.props.currentChoice);
    this.helperFunctionPrevSlide(currentArray, this.state.currentImage);
  };
  handleNextSlide = () => {
    const currentArray = getImgsForCurrentChoice(this.props.currentChoice);
    this.helperFunctionNextSlide(currentArray, this.state.currentImage);
  };
  render () {
    let content = null;
    if (this.state.currentImage) {
      content = <div className={`${classes.SlideshowBox} ${classes.Active}`}>
      <Slide id={this.state.currentImage.id} file={this.state.currentImage.file} title={this.state.currentImage.title} />
      </div>
    }
    return (
      <React.Fragment>
      {!content ? <Loading loadingText="Choose the distance above!" /> :
        <div className={classes.Slideshow}>
          <Button
          buttonText="<"
          buttonStylingType="slideshowControls"
          clickHandler={this.handlePrevSlide}
          />
          {content}
          <Button
          buttonText=">"
          buttonStylingType="slideshowControls"
          clickHandler={this.handleNextSlide}
          />
        </div>}
      </React.Fragment>
      );
  }
};

export default Slideshow;