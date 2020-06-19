import React from 'react';

function slide (props) {
  return (
    <>
      <img id={props.id} src={props.file} alt={props.title}/>
      <h3>{props.title}</h3>
    </>
  )
}

export default slide;