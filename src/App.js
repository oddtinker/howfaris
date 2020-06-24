import React from 'react';
import classes from './App.module.css';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';
import About from './components/About/About';
import Modal from './components/UI/Modal/Modal';

class App extends React.Component {
  state = {
    isBackdropDown: false,
  }
  backdropHandler = () => {
    this.setState(prev => {
      return { isBackdropDown: !prev.isBackdropDown }
    });
  }
  render() {
    return (
      <div className={classes.App}>
        <Header
        handleBackdrop={this.backdropHandler}/>
        <Modal
        handleBackdrop={this.backdropHandler}
        isBackdropDown={this.state.isBackdropDown}>
          <About isBackdropDown={this.state.isBackdropDown} />
        </Modal>
        <Main />
        <Footer />
      </div>
    );
  }
};

export default App;
