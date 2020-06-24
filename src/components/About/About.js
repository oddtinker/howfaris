import React, { Component } from 'react';
import classes from './About.module.css';
import urls from '../../urls';
import Link from '../UI/Link/Link';
import Accordion from '../UI/Accordion/Accordion';

class About extends Component {
  state = {
    isExpanded: false,
  }
  handleExpand = () => {
    this.setState(prev => {
      return { isExpanded: !prev.isExpanded };
    });
  }
  render () {
    if (!this.props.isBackdropDown) {
      return null;
    }
    const lis = urls.map(item => 
      <li key={item.id}><Link urlAddress={item.urlAddress} urlText={item.urlText} urlTitle={item.urlTitle} /></li>
    );
    const uls = <ul>{lis}</ul>
    return (
      <section className={classes.About}>
        <h2>About this project</h2>
        <p>Literal physical distancing can be tough. This app visualizes the distances we're supposed to keep from each other in public spaces.</p>
        <Accordion
          isExpanded={this.state.isExpanded}
          expanderHandler={this.handleExpand}
          expanderText="Sources"
          expandedText={uls}
        />
      </section>
)}};

export default About;