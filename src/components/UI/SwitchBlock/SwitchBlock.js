import React from 'react';
import classes from './SwitchBlock.module.css';
import RadioInput from '../RadioInput/RadioInput';

const switchBlock = props => {
  let data = props.options.map((item, index) => <RadioInput
    key={index}
    buttonStylingType="switchBlock"
    radioInputLabel={item.distanceM}
    radioGroupName="dataOptions"
    radioInputID={item.distanceM}
    changeHandler={props.changeHandler}
    currentChoice={props.currentChoice}
    entities={item.entities} />);
  return (
    <form
    className={props.switchType === 'sidebar' ? classes.Sidebar : classes.SwitchBlock}>
      {data}
    </form>
)};

export default switchBlock;