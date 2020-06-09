import React from 'react';
import classes from './SwitchBlock.module.css';
import RadioInput from '../RadioInput/RadioInput';

const switchBlock = props => {
  let data = props.dataList.map(item => <RadioInput
    key={item + props.dataList.indexOf(item)}
    buttonStylingType="switchBlock"
    radioInputLabel={item}
    radioGroupName={props.dataList}
    radioInputID={item}
    clickHandler={props.clickHandler} />);
  return (
    <form className={props.switchType === 'sidebar' ? classes.Sidebar : classes.SwitchBlock}>
      {data}
    </form>
)};

export default switchBlock;